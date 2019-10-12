import React, { Component } from 'react'
import { fetchPlants } from '../actions/plantActions'
import { loginUser } from '../actions/userActions'
import { connect } from 'react-redux'
import PlantCard from '../components/PlantCard'
import { USERS_URL} from '../constants.js'
import FilterOptions from '../components/FilterOptions'


class PlantContainer extends Component {
    constructor(props){
        super(props)
       
    }

    filterPlants(){
        return this.props.plants.fetchedPlants.filter(plantObj => {
            return plantObj.name.toLowerCase().includes(this.props.search.toLowerCase())
        })  
    }

    checkForUser(){
        if(localStorage.loggedIn){
            let id = localStorage.loggedIn
            fetch(USERS_URL + "/" + id)
            .then(res => res.json())
            .then((user_data => {
                this.props.loginUser(user_data, this.props.history)
                this.props.fetchPlants()
                })
            );
        } else {
            this.props.history.push('/login');
        }
    }

    componentDidMount(){
        this.checkForUser()
    }
        
           
     //Use local state OR redux state for the search feature 
     //You can filter the plants based on the search in the component 


    generatePlants = () => {
        return this.filterPlants().map(plant => {
        return <div className="plant-card" key={plant.id}>
            <PlantCard id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
    }

     
    

    render() {
        console.log(this.props.plants.fetchedPlants, "fetched plants")
        return (
            <>
            <br/>
            <FilterOptions/>
            <div className="plant-container">
                {this.generatePlants()}
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    plants: state.plants
})

export default connect(mapStateToProps, {fetchPlants, loginUser})(PlantContainer)
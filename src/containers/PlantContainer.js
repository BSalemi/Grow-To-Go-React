import React, { Component } from 'react'
import { fetchPlants, searchPlants } from '../actions/plantActions'
import { loginUser } from '../actions/userActions'
import { connect } from 'react-redux'
import PlantCard from '../components/PlantCard'
import { USERS_URL} from '../constants.js'
import FilterOptions from '../components/FilterOptions'


class PlantContainer extends Component {
   
    state = {
        text: ""
    }

    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
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
        const plantData = this.props.plants.fetchedPlants.map(plant => {
        return <div className="plant-card" key={plant.id}>
            <PlantCard id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
        return plantData
    }

    render() {

        return (
            <>
            <div className="searchForm" onSubmit={event => this.handleOnSubmit(event)}>
                <form>
                    <input type="text" value={this.state.value} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
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
    plants: state.plants,
    text: state.text
})

export default connect(mapStateToProps, {fetchPlants, searchPlants, loginUser})(PlantContainer)
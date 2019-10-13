import React, { Component } from 'react'
import { fetchPlants } from '../actions/plantActions'
import { loginUser } from '../actions/userActions'
import { connect } from 'react-redux'
import PlantCard from '../components/PlantCard'
import { USERS_URL} from '../constants.js'


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
        
    filterVisiblePlants = () => {
        const plants = this.props.plants.fetchedPlants
        switch(this.props.visibilityFilter){
            case "sort_price_asc":
                return plants.sort((a, b) => (a.price > b.price) ? 1 : -1 );   
            case "sort_price_desc":
                return plants.sort((a, b) => (a.price < b.price) ? 1 : -1 );
            case "find_mini":
                return plants.filter(plant => plant.size === "Mini");
            case "find_small":
                return plants.filter(plant => plant.size === "Small");
            case "find_medium":
                return plants.filter(plant => plant.size === "Medium");
            case "find_large":
                return plants.filter(plant => plant.size === "Large");
            case "find_xlarge":
                return plants.filter(plant => plant.size === "X-Large");
            case "find_beginner":
                return plants.filter(plant => plant.exp_level === "Beginner");
            case "find_intermediate":
                return plants.filter(plant => plant.exp_level === "Intermediate");
            case "find_advanced":
                return plants.filter(plant => plant.exp_level === "Advanced");
            case "find_low":
                return plants.filter(plant => plant.light_required.includes("Low"));
            case "find_medium_indirect":
                return plants.filter(plant => plant.light_required.includes("Medium"));
            case "find_bright_indirect":
                return plants.filter(plant => plant.light_required.includes("Bright Indirect"));
            case "find_bright_direct":
                return plants.filter(plant => plant.light_required.includes("Bright Direct"));
            case "find_full_sun":
                return plants.filter(plant => plant.light_required.includes("Full Sun"));
            case "pet-friendly":
                return plants.filter(plant => plant.pet_friendly === true)
        }
             
    }

    generatePlants = () => {
        if((this.props.visibilityFilter) && (this.props.search === "")){
            return this.filterVisiblePlants().map(plant => {
            return <div className="plant-card" key={plant.id}>
            <PlantCard id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
            })
        } else {
        return this.filterPlants().map(plant => {
        return <div className="plant-card" key={plant.id}>
            <PlantCard id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
    }
}


    render() {
        return (
            <>
            <br/>
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Plant from '../components/Plant'

class PlantContainer extends Component {

    filterPetFriendly(){
        const plants = this.props.plants.fetchedPlants
        if(this.props.petFriendly){
            return plants.filter(plant => plant.pet_friendly === true)
        } else {
            return plants
        }
    }

    filterPlants(){
        return this.props.plants.fetchedPlants.filter(plantObj => {
            return plantObj.name.toLowerCase().includes(this.props.search.toLowerCase())
        })
    }


    filterVisiblePlants = () => {
        const {visibilityFilter} = this.props

        let filtered = this.filterPetFriendly()

        if(visibilityFilter.price === "sort_price_asc"){
            filtered = filtered.sort((a, b) => (a.price > b.price) ? 1 : -1 ); 
        }
        if(visibilityFilter.price === "sort_price_desc"){
            filtered = filtered.sort((a, b) => (a.price < b.price) ? 1 : -1 );
        }
        if(visibilityFilter.size === "find_mini"){
            filtered = filtered.filter(plant => plant.size === "Mini");
        }
        if(visibilityFilter.size === "find_small"){
            filtered = filtered.filter(plant => plant.size === "Small");
        }
        if(visibilityFilter.size === "find_medium"){
            filtered = filtered.filter(plant => plant.size === "Medium");
        }
        if(visibilityFilter.size === "find_large"){
            filtered = filtered.filter(plant => plant.size === "Large");
        }
        if(visibilityFilter.size === "find_xlarge"){
            filtered = filtered.filter(plant => plant.size === "X-Large");
        }
        if(visibilityFilter.expLevel === "find_beginner"){
            filtered = filtered.filter(plant => plant.exp_level === "Beginner");
        }
        if(visibilityFilter.expLevel === "find_intermediate"){
            filtered = filtered.filter(plant => plant.exp_level === "Intermediate");
        }
        if(visibilityFilter.expLevel === "find_advanced"){
            filtered = filtered.filter(plant => plant.exp_level === "Advanced");
        }
        if(visibilityFilter.lightRequired === "find_low"){
            filtered = filtered.filter(plant => plant.light_required.includes("Low"));
        }
        if(visibilityFilter.lightRequired === "find_medium_indirect"){
            filtered = filtered.filter(plant => plant.light_required.includes("Medium"));
        }
        if(visibilityFilter.lightRequired === "find_low"){
            filtered = filtered.filter(plant => plant.light_required.includes("Low"));
        }
        if(visibilityFilter.lightRequired === "find_bright_indirect"){
            filtered = filtered.filter(plant => plant.light_required.includes("Bright Indirect"));
        }
        if(visibilityFilter.lightRequired === "find_bright_direct"){
            filtered = filtered.filter(plant => plant.light_required.includes("Bright Direct"));
        }
        if(visibilityFilter.lightRequired === "find_full_sun"){
            filtered = filtered.filter(plant => plant.light_required.includes("Full Sun"));
        }
        return filtered
    }

    generatePlants = () => {
        if(this.filterVisiblePlants() && (this.props.visibilityFilter || this.props.petFriendly) && this.props.search === ""){
            return this.filterVisiblePlants().map(plant => {
            return <div className="plant-card" key={plant.id}>
            <Plant id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
            })
        } else {
        return this.filterPlants().map(plant => {
        return <div className="plant-card" key={plant.id}>
            <Plant id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
    }
}


    render() {
        return (
            <div className="plant-container">
                {this.generatePlants()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    plants: state.plants
})

export default connect(mapStateToProps)(PlantContainer)
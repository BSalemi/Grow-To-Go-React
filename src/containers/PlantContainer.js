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
        const filtered = this.filterPetFriendly()
        console.log(filtered, "filterPetFriendly")
        
        const visFilter = this.props.visibilityFilter
        
        if(visFilter.price == "sort_price_asc"){
            filtered = filtered.sort((a, b) => (a.price > b.price) ? 1 : -1 ); 
        }
        if(visFilter.price == "sort_price_desc"){
            filtered = filtered.sort((a, b) => (a.price < b.price) ? 1 : -1 );
        }
        if(visFilter.size == "find_mini"){
            filtered = filtered.filter(plant => plant.size === "Mini");
        }
        if(visFilter.size == "find_small"){
            filtered = filtered.filter(plant => plant.size === "Small");
        }
        if(visFilter.size == "find_medium"){
            filtered = filtered.filter(plant => plant.size === "Medium");
        }
        if(visFilter.size == "find_large"){
            filtered = filtered.filter(plant => plant.size === "Large");
        }
        if(visFilter.size == "find_xlarge"){
            filtered = filtered.filter(plant => plant.size === "X-Large");
        }
        if(visFilter.expLevel == "find_beginner"){
            filtered = filtered.filter(plant => plant.exp_level === "Beginner");
        }
        if(visFilter.expLevel == "find_intermediate"){
            filtered = filtered.filter(plant => plant.exp_level === "Intermediate");
        }
        if(visFilter.expLevel == "find_advanced"){
            filtered = filtered.filter(plant => plant.exp_level === "Advanced");
        }
        if(visFilter.lightRequired == "find_low"){
            filtered = filtered.filter(plant => plant.light_required.includes("Low"));
        }
        if(visFilter.lightRequired == "find_medium_indirect"){
            filtered = filtered.filter(plant => plant.light_required.includes("Medium"));
        }
        if(visFilter.lightRequired == "find_low"){
            filtered = filtered.filter(plant => plant.light_required.includes("Low"));
        }
        if(visFilter.lightRequired == "find_bright_indirect"){
            filtered = filtered.filter(plant => plant.light_required.includes("Bright Indirect"));
        }
        if(visFilter.lightRequired == "find_bright_direct"){
            filtered = filtered.filter(plant => plant.light_required.includes("Bright Direct"));
        }
        if(visFilter.lightRequired == "find_full_sun"){
            filtered = filtered.filter(plant => plant.light_required.includes("Full Sun"));
        }  
        return filtered
    }
                    // case "find_mini":
                        
                    // case "find_small":
                    //     return filtered.filter(plant => plant.size === "Small");
                    // case "find_medium":
                    //     return filtered.filter(plant => plant.size === "Medium");
                    // case "find_large":
                    //     return filtered.filter(plant => plant.size === "Large");
                    // case "find_xlarge":
                    //     return filtered.filter(plant => plant.size === "X-Large");
                    // case "find_beginner":
                    //     return filtered.filter(plant => plant.exp_level === "Beginner");
                    // case "find_intermediate":
                    //     return filtered.filter(plant => plant.exp_level === "Intermediate");
                    // case "find_advanced":
                    //     return filtered.filter(plant => plant.exp_level === "Advanced");
                    // case "find_low":
                    //     return filtered.filter(plant => plant.light_required.includes("Low"));
                    // case "find_medium_indirect":
                    //     return filtered.filter(plant => plant.light_required.includes("Medium"));
                    // case "find_bright_indirect":
                    //     return filtered.filter(plant => plant.light_required.includes("Bright Indirect"));
                    // case "find_bright_direct":
                    //     return filtered.filter(plant => plant.light_required.includes("Bright Direct"));
                    // case "find_full_sun":
                    //     return filtered.filter(plant => plant.light_required.includes("Full Sun"));  
                    // default:

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

export default connect(mapStateToProps)(PlantContainer)
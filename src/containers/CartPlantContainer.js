import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartPlant from '../components/CartPlant'

class CartPlantContainer extends Component {


    generateCartPlants = () => {
        const plantData = this.props.plants.fetchedPlants.map(plant => {
        return <div className="plant-card" key={plant.id}>
            <PlantCard id={plant.id} image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
        return plantData
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.user.cart, "user cart")
}

export default connect()(CartPlantContainer)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_PLANTS_URL } from '../constants.js'
import {addCartPlant } from '../actions/userActions'
import {findPlant } from '../actions/plantActions'


class PlantShow extends Component {
    

    componentDidMount(){
        this.props.findPlant(this.props.match.params.id)
    }

    
    addToCart = event => {
        event.preventDefault()
        let cartId = this.props.user.user.carts[this.props.user.user.carts.length - 1].id
        const cart_plant = {
            cart_id: cartId,
            plant_id: event.target.dataset.plantId
        }
        fetch(CART_PLANTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(cart_plant)
            })
            .then(res => res.json())
            .then((user_data) => {
            this.props.addCartPlant(user_data)
        })
    }
        
       
  
    renderPlant =() => {
        let plant = this.props.plants.foundPlant
        if(plant){
            return(
                <>
                <div className="plant-show-container-left">
                    <img className="plant-show-pic" alt="house-plant" src={plant.image} />
                </div>
                <div className="plant-show-container-right">
                    <h3>{plant.name}</h3>
                    {/* <ul className="plant-attributes"> */}
                        <p><strong>Price:</strong> ${plant.price}</p>
                        <p><strong>Size:</strong> {plant.size}</p>
                        <p><strong>Species:</strong> {plant.species}</p>
                        <p><strong>Experience Level:</strong> {plant.exp_level}</p>
                        <p><strong>Light Required:</strong> {plant.light_required}</p>
                        <p><strong>Pet Friendly:</strong> {plant.pet_friendly ? "Yes. This plant is safe for pets" : "No. This plant is toxic to pets"}</p>
                    {/* </ul> */}
                    <button data-plant-id={plant.id} onClick={event => this.addToCart(event)}> Add To Cart </button>
                </div> 
                </>
            )      
        } else {
            return(
                    <> 
                    No plant with that ID was found.
                    <br/>
                   <Link to="/">Return Home </Link>
                   </>  
            )
        }
    }
     
    
    render(){
        console.log(this.props.plants.foundPlant, "plant")
        return (
            <>
            {this.renderPlant()}
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps, {findPlant, addCartPlant})(PlantShow)
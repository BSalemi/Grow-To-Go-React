import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CART_PLANTS_URL } from '../constants.js';
import { addCartPlant } from '../actions/userActions';
import { findPlant } from '../actions/plantActions';
import ReviewForm from './ReviewForm';


class PlantShow extends Component {
    

    componentDidMount(){
        this.props.findPlant(this.props.match.params.id)
        console.log(this.props.match.params.id, "thisPropsFindPlant")
    }

    componentDidUpdate(){
        console.log(JSON.parse(JSON.stringify(this.props.plants)));
    }
    
    addToCart = event => {
        event.preventDefault()
        let cartId = this.props.user.user.carts[this.props.user.user.carts.length - 1].id
        const cart_plant = {
            cart_id: cartId,
            plant_id: event.target.dataset.plantId
        }
        this.props.addCartPlant(cart_plant)
    }
        
       
  
    renderPlant =() => {
        let plant = this.props.plants.foundPlant
        console.log(this.props.plants, "props in show plant")
        if(plant){
            return(
                <div className="plant-show-container">
                <div className="plant-show-container-left">
                    <img className="plant-show-pic" alt="house-plant" src={plant.image} />
                </div>
                <div className="plant-show-container-right">
                    <h3>{plant.name}</h3>
                        <p><strong>Price:</strong> ${plant.price}</p>
                        <p><strong>Size:</strong> {plant.size}</p>
                        <p><strong>Species:</strong> {plant.species}</p>
                        <p><strong>Experience Level:</strong> {plant.exp_level}</p>
                        <p><strong>Light Required:</strong> {plant.light_required}</p>
                        <p><strong>Pet Friendly:</strong> {plant.pet_friendly ? "Yes. This plant is safe for pets" : "No. This plant is not safe for pets"}</p>
                    <button data-plant-id={plant.id} onClick={event => this.addToCart(event)}> Add To Cart </button>
                </div> 
                </div>
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
        return (
            <div className="show-page">
            {this.renderPlant()}
            {this.props.plants.foundPlant && <ReviewForm user_id={this.props.user.user.id} plant_id={this.props.plants.foundPlant.id}/>}
            
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps, {findPlant, addCartPlant})(PlantShow)
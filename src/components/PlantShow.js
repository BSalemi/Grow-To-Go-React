import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_PLANTS_URL } from '../constants.js'
import { addCartPlant } from '../actions/userActions'
import { USERS_URL} from '../constants.js'
import { loginUser } from '../actions/userActions'
import { fetchPlants } from '../actions/plantActions'

const PlantShow = (props) => {
    let plant = props.plants.fetchedPlants.find(plantObj => plantObj.id === props.match.params.id)

    function renderPlant(){
        if(plant){
            return(
                <div className="plant-show-container">
                          <h3>{plant.name}</h3>
                          <img className="plant-show-pic" alt="house-plant" src={plant.image} />
                          <ul className="plant-attributes">
                             <li>${plant.price}</li>
                             <li><strong>Size:</strong> {plant.size} </li>
                             <li><strong>Price:</strong> ${plant.price}</li>
                             <li><strong>Species:</strong> {plant.species}</li> 
                             <li><strong>Experience Level:</strong> {plant.exp_level}</li>
                             <li><strong>Light Required:</strong> {plant.light_required}</li>
                             <li><strong>Pet Friendly:</strong> {plant.pet_friendly ? "This product is safe for pets" : "This product is toxic to pets"}</li>
                          </ul>
                          <button data-plant-id={plant.id} onClick={event => this.addToCart(event)}> Add To Cart </button>
                      </div>
            )
        } else {
            return(
                    <> 
                   "Oops! No plant with that ID was found."
                   <Link to="/">Home </Link>
                   </>  
            
            )
        }
    
    }

     

     

    // checkForUser(){
    //     if(localStorage.loggedIn){
    //         let id = localStorage.loggedIn
    //         fetch(USERS_URL + "/" + id)
    //         .then(res => res.json())
    //         .then((user_data => {
    //             this.props.loginUser(user_data, this.props.history)
    //             })
    //         );
    //     } else {
    //         this.props.history.push('/login');
    //     }
    // }

  
            
               
   
    

    
    
       
        return (
            <div>
            {renderPlant()} 
            </div>

        )
}
const mapStateToProps = state => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps, {loginUser, fetchPlants})(PlantShow)
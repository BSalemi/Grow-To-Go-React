import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CART_PLANTS_URL } from '../constants.js'
import { addCartPlant } from '../actions/userActions'
import { USERS_URL} from '../constants.js'
import { loginUser } from '../actions/userActions'
import { fetchPlants } from '../actions/plantActions'

class PlantShow extends Component {
    constructor(props){
        super(props)
        console.log(props, "props")
    
    const plant = this.props.plants.fetchedPlants.find(plantObj => plantObj.id === this.props.match.params.id)
    }

     renderPlant(){
         if(plant){
             return(
                <div className="plant-show-container">
                    <h3>{this.props.name}</h3>
                    <img className="plant-show-pic" alt="house-plant" src={this.props.image} />
                    <ul className="plant-attributes">
                       <li>${this.props.price}</li>
                       <li><strong>Size:</strong> {this.props.size} </li>
                       <li><strong>Price:</strong> ${this.props.price}</li>
                       <li><strong>Species:</strong> {this.props.species}</li> 
                       <li><strong>Experience Level:</strong> {this.props.exp_level}</li>
                       <li><strong>Light Required:</strong> {this.props.light_required}</li>
                       <li><strong>Pet Friendly:</strong> {this.props.pet_friendly ? "This product is safe for pets" : "This product is toxic to pets"}</li>
                    </ul>
                    <button data-plant-id={this.props.id} onClick={event => this.addToCart(event)}> Add To Cart </button>
                </div>
             )
         } else {
             "Oops! No plant with that ID was found. "
         }
     }

    checkForUser(){
        if(localStorage.loggedIn){
            let id = localStorage.loggedIn
            fetch(USERS_URL + "/" + id)
            .then(res => res.json())
            .then((user_data => {
                this.props.loginUser(user_data, this.props.history)
                })
            );
        } else {
            this.props.history.push('/login');
        }
    }

    componentDidMount(){
        this.checkForUser()
    }

    
    render(){
        // console.log(this.props.plants.fetchedPlants)
        return (
            <div>
             
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user 
})
    
export default connect(mapStateToProps, {loginUser, fetchPlants})(PlantShow)
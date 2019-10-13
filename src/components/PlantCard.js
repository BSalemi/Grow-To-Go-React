import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CART_PLANTS_URL } from '../constants.js'
import { addCartPlant } from '../actions/userActions'

class PlantCard extends Component {

    state = {
        forward: true 
    }

    flipPlantCard = (event) => {
        this.setState(prevState => {
            return{
                forward: !prevState.forward
            } 
        })
    }

    addToCart = event => {
        event.preventDefault()
        console.log("plant_id", event.target.dataset.plantId)
        let cartId = this.props.user.user.carts[this.props.user.user.carts.length - 1].id
        console.log("cartId", cartId)
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
            this.props.addCartPlant(user_data, cart_plant)
        })
    }

    renderPlantCard() {
        if(this.state.forward) {
            return (
                <div className="card-front">
                <br/>
                <img onClick={this.flipPlantCard} className="plant-pic" alt="house-plant" src={this.props.image} />
                <h3>{this.props.name}</h3>
                <p className="plant-price">${this.props.price}</p>
                <button data-plant-id={this.props.id} onClick={event => this.addToCart(event)}> Add To Cart </button>
                <br/>
                </div>
            )
        } else {
            return (
                <div className="card-back" onClick={this.flipPlantCard}>
                    <p><strong>Size:</strong> {this.props.size} </p>
                    <p><strong>Price:</strong> ${this.props.price}</p>
                    <p><strong>Species:</strong> {this.props.species}</p> 
                    <p><strong>Experience Level:</strong> {this.props.exp_level}</p>
                    <p><strong>Light Required:</strong> {this.props.light_required}</p>
                    <p><strong>Pet Friendly:</strong> {this.props.pet_friendly ? "This product is safe for pets" : "This product is toxic to pets"}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderPlantCard()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user 
})



export default connect(mapStateToProps, {addCartPlant})(PlantCard)
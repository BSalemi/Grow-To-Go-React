import React, { Component } from 'react'
import {addIcon, removeIcon, CART_PLANTS_URL} from '../constants.js'
import { removeCartPlant, addCartPlant } from '../actions/userActions'
import { connect } from 'react-redux'

class CartPlant extends Component {


    handleRemoveCart = (event) => {
        let cartPlant = event.target.dataset.cartPlantId
        fetch(CART_PLANTS_URL + "/" + cartPlant, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: cartPlant,
            }),
        })
        .then(res => res.json())
        .then((user_data) => {
            this.props.removeCartPlant(user_data)
        })
    }

    addToCart = event => {
        event.preventDefault()
        console.log("ADD CART PLANT", this.props.user)
        if(this.props.user.carts){
        let cartId = this.props.user.carts[this.props.user.carts.length - 1].id
        console.log("cartId", cartId)
        const cart_plant = {
            cart_id: cartId,
            plant_id: event.target.dataset.plantId
        }
        console.log("cart_plant inside add to cart", cart_plant)
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
            console.log(user_data, "ADD_CART_PLANT RESPONSE")
            this.props.addCartPlant(user_data)
        })
    }
    }
    
    render() {
        console.log(this.props.plant_id, "props inside cart plant")
        return (
            <div id="users-cart-plants">
                <img id="add-cart-plant" alt="add-cart-plant" src={`${addIcon}`} data-cart-plant-id={this.props.id} data-plant-id={this.props.plant_id} onClick={event => this.addToCart(event)}/><img id="remove-cart-plant" alt="remove-cart-plant" src={`${removeIcon}`} data-cart-plant-id={this.props.id} onClick={this.handleRemoveCart}/><strong>{this.props.name}</strong> - ${this.props.price}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect( mapStateToProps, {removeCartPlant, addCartPlant})(CartPlant)
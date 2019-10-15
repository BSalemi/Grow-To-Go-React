import React, { Component } from 'react'
import {addIcon, removeIcon, CART_PLANTS_URL} from '../constants.js'
import { removeCartPlant } from '../actions/userActions'
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
    
    render() {
        return (
            <div id="users-cart-plants">
                <img id="add-cart-plant" alt="add-cart-plant" src={`${addIcon}`} data-cart-plant-id={this.props.id} data-plant-id={this.props.plant_id}/><img id="remove-cart-plant" alt="remove-cart-plant" src={`${removeIcon}`} data-cart-plant-id={this.props.id} onClick={this.handleRemoveCart}/><strong>{this.props.name}</strong> - ${this.props.price}
            </div>
        )
    }
}

export default connect(null, {removeCartPlant})(CartPlant)
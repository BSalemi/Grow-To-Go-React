import React, { Component } from 'react'
import {addIcon, removeIcon} from '../constants.js'
import { removeCartPlant, addCartPlant } from '../actions/userActions'
import { connect } from 'react-redux'

class CartPlant extends Component {


    handleRemoveCart = (event) => {
        let cartPlant = event.target.dataset.cartPlantId
        this.props.removeCartPlant(cartPlant)
    }

    addToCart = event => {
        event.preventDefault()
        if(this.props.user.carts){
            let cartId = this.props.user.carts[this.props.user.carts.length - 1].id
            const cart_plant = {
                cart_id: cartId,
                plant_id: event.target.dataset.plantId
            }
            this.props.addCartPlant(cart_plant)
        }
    }
    
    render() {
        let total = (this.props.price * this.props.quantity)
        return (
            <div id="users-cart-plants">
                <img id="add-cart-plant" alt="add-cart-plant" src={`${addIcon}`} data-cart-plant-id={this.props.id} data-plant-id={this.props.plant_id} onClick={event => this.addToCart(event)}/><img id="remove-cart-plant" alt="remove-cart-plant" src={`${removeIcon}`} data-cart-plant-id={this.props.id} onClick={this.handleRemoveCart}/><strong>{this.props.name}</strong> x {this.props.quantity} - ${total}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect( mapStateToProps, {removeCartPlant, addCartPlant})(CartPlant)
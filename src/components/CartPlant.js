import React, { Component } from 'react'
import {addIcon, removeIcon} from '../constants.js'
export default class CartPlant extends Component {


    handleRemoveCart(){
        
    }
    render() {
        return (
            <div id="users-cart-plants">
                <img id="add-cart-plant" src={`${addIcon}`} data-cart-plant-id={this.props.id} data-plant-id={this.props.plant_id}/><img id="remove-cart-plant" src={`${removeIcon}`} data-cart-plant-id={this.props.id} onClick={this.handleRemoveCart}/><strong>{this.props.name}</strong> - ${this.props.price}
            </div>
        )
    }
}

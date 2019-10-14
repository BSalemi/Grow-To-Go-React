import React, { Component } from 'react'
import {addIcon, removeIcon} from '../constants.js'
export default class CartPlant extends Component {


    
    render() {
        return (
            <div id="users-cart-plants">
                <img id="add-cart-plant" src={`${addIcon}`}/><img id="remove-cart-plant" src={`${removeIcon}`}/><strong>{this.props.name}</strong> - ${this.props.price}
            </div>
        )
    }
}

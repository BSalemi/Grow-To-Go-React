import React, { Component } from 'react'
import {addIcon, removeIcon} from '../constants.js'
export default class CartPlant extends Component {


    
    render() {
        return (
            <div id="users-cart-plants">
                <button id="add-cart-plant"><img src={`${addIcon}`}/></button><button id="remove-cart-plant"><img src={`${removeIcon}`}/></button><strong>{this.props.name}</strong> - ${this.props.price}
            </div>
        )
    }
}

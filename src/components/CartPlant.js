import React, { Component } from 'react'

export default class CartPlant extends Component {


    
    render() {
        return (
            <div id="users-cart-plants">
                <strong>{this.props.name}</strong> - ${this.props.price}
            </div>
        )
    }
}

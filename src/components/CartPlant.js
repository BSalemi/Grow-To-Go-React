import React, { Component } from 'react'

export default class CartPlant extends Component {


    
    render() {
        return (
            <div>
                {this.props.name} - ${this.props.price}
            </div>
        )
    }
}

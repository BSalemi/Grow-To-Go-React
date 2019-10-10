import React, { Component } from 'react'

export default class Plant extends Component {

    render() {
        return (
            <div>
                <img src={this.props.image} class="this.props-avatar" />
                <p> {this.props.size} - ${this.props.price}</p>
                <h2>{this.props.name}</h2>
                <p><em>{this.props.species}</em></p> 
                <p><strong>Experience Level:</strong> {this.props.exp_level}</p>
                <p><strong>Light Required:</strong> {this.props.light_required}</p>
                <button data-plant-id={this.props.id}> Add To Cart </button>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class PlantCard extends Component {

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

    renderPlantCard() {
        if(this.state.forward) {
            return (
                <div className="card-front">
                <img className="plant-pic" alt="house-plant" src={this.props.image} />
                <h2>{this.props.name}</h2>
                <p>${this.props.price}</p>
                <button data-plant-id={this.props.id}> Add To Cart </button>
                </div>
            )
        } else {
            return (
                <div className="card-back">
                <p> {this.props.size} - ${this.props.price}</p>
                    <p><em>{this.props.species}</em></p> 
                    <p><strong>Experience Level:</strong> {this.props.exp_level}</p>
                    <p><strong>Light Required:</strong> {this.props.light_required}</p>
                    <p><strong>Pet Friendly:</strong>{this.props.pet_friendly ? "This product is safe for pets" : "This product is toxic to pets"}</p>
                    <button data-plant-id={this.props.id}> Add To Cart </button>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="individual-plant" onClick={this.flipPlantCard}>
                {this.renderPlantCard()}
            </div>
        )
    }
}

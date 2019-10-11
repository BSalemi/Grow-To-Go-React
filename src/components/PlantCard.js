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
                <img onClick={this.flipPlantCard} className="plant-pic" alt="house-plant" src={this.props.image} />
                <h2>{this.props.name}</h2>
                <p>${this.props.price}</p>
                <button data-plant-id={this.props.id}> Add To Cart </button>
                </div>
            )
        } else {
            return (
                <div className="card-back" onClick={this.flipPlantCard}>
                    <p><strong>Size:</strong> {this.props.size} </p>
                    <p><strong>Price:</strong> ${this.props.price}</p>
                    <p><strong>Species:</strong> {this.props.species}</p> 
                    <p><strong>Experience Level:</strong> {this.props.exp_level}</p>
                    <p><strong>Light Required:</strong> {this.props.light_required}</p>
                    <p><strong>Pet Friendly:</strong> {this.props.pet_friendly ? "This product is safe for pets" : "This product is toxic to pets"}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="individual-plant">
                {this.renderPlantCard()}
            </div>
        )
    }
}

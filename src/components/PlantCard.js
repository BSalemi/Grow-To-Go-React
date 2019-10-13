import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CART_PLANTS_URL } from '../constants.js'
import { addCartPlant } from '../actions/userActions'
import { Link } from 'react-router-dom'

class PlantCard extends Component {


    addToCart = event => {
        event.preventDefault()
        console.log("plant_id", event.target.dataset.plantId)
        let cartId = this.props.user.user.carts[this.props.user.user.carts.length - 1].id
        console.log("cartId", cartId)
        const cart_plant = {
            cart_id: cartId,
            plant_id: event.target.dataset.plantId
        }
        fetch(CART_PLANTS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(cart_plant)
        })
        .then(res => res.json())
        .then((user_data) => {
            this.props.addCartPlant(user_data, cart_plant)
        })
    }

    renderPlantCard() {
            return (
                <>
                <div>
                <br/>
                <img onClick={this.flipPlantCard} className="plant-pic" alt="house-plant" src={this.props.image} />
                </div>
                <>
                <Link to={"/plants/" + this.props.id}> <h3>{this.props.name}</h3></Link>
                <h6 className="plant-price">${this.props.price}</h6>
                <button data-plant-id={this.props.id} onClick={event => this.addToCart(event)}> Add To Cart </button>
                </>
                </>
            )
    }

    render() {
        return (
            <div>
                {this.renderPlantCard()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user 
})



export default connect(mapStateToProps, {addCartPlant})(PlantCard)
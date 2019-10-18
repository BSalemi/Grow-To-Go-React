import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CART_PLANTS_URL } from '../constants.js'
import { addCartPlant } from '../actions/userActions'
import { Link } from 'react-router-dom'

class PlantCard extends Component {


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
        
    renderPlantCard() {
            return (
                <>
                <div>
                <br/>
                <img className="plant-pic" alt="house-plant" src={this.props.image} />
                </div>
                <>
                <Link to={"/plants/" + this.props.id}> <h3>{this.props.name}</h3></Link>
                <h6 className="plant-price">${this.props.price}</h6>
                {this.props.user ? <button data-plant-id={this.props.id} onClick={event => this.addToCart(event)}> Add To Cart </button> : null }
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
    user: state.user.user
})



export default connect(mapStateToProps, {addCartPlant})(PlantCard)
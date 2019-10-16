import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartPlant from '../components/CartPlant'
import {cartIcon, CHECKOUT_URL} from '../constants.js'
import {checkout} from '../actions/userActions'

class CartPlantContainer extends Component {

    // let plantsObj = {}
   
    state = {
        visible: false
    }

    handleOnClick = () => {
        this.setState(prevState => {
            return {
            visible: !prevState.visible
            }
        })
    }

    handleCheckout = (event) => {
        let currentCart = this.props.user.carts[this.props.user.carts.length - 1]
        if(currentCart.total > 0){
        alert("Thank you for shopping at Grow To Go.\n\nCome back soon!")
        fetch(CHECKOUT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: currentCart.id
            })
        })
        .then(res => res.json())
        .then(user_data => {
            this.props.checkout(user_data)
        })
    }} 
    
    renderCart(){
        let cartContainer = document.getElementById("cart-box")
        if(this.state.visible && cartContainer){
            cartContainer.style.display = "block"
        } else if (!this.state.visible && cartContainer){
            cartContainer.style.display = "none"
        }
    }

   
    generateCartPlants = () => {
        let cartPlants = {}
        const currentCart = this.props.user.carts[this.props.user.carts.length - 1].cart_plants
        currentCart.map(cart_plant => { 
            if (!cartPlants[cart_plant.plant_id]){
                cartPlants[cart_plant.plant_id] = [cart_plant]
            } else {
                cartPlants[cart_plant.plant_id].push(cart_plant)
            }
        })
        let results = []
        for (let plant_id in cartPlants) {
            let cart_plant = cartPlants[plant_id][0];
            results.push(<div className="cart-plant-card" key={cart_plant.id}><CartPlant id={cart_plant.id} quantity={cartPlants[plant_id].length} plant_id={cart_plant.plant_id} price={cart_plant.plant.price} name={cart_plant.plant.name}/></div>)
            console.log(results, "results")
        }
        return(
            results
        )
    }
    
    render() {
        console.log(this.props.user.carts, "user cart props")
       
        return (
            <div className="cart-container">
               <button id='cart-btn' onClick={this.handleOnClick}><img alt="cart" src={`${cartIcon}`}/></button>
              
              <div id="cart-box" >
                <div id="users-cart" onClick={this.handleOnClick}>
                    {this.props.user.carts && this.renderCart()}
                    {this.props.user.carts && this.generateCartPlants()}
                </div>
                <div id="total-checkout">
                    <strong id="total">Total</strong> - ${this.props.user.carts && this.props.user.carts[this.props.user.carts.length - 1].total}             <button onClick={this.handleCheckout} id="checkout">Checkout</button>
                </div>
                
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})


export default connect(mapStateToProps, {checkout})(CartPlantContainer)
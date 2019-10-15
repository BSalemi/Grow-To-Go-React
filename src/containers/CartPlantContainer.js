import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartPlant from '../components/CartPlant'
import {cartIcon, CHECKOUT_URL} from '../constants.js'
import {checkout} from '../actions/userActions'

class CartPlantContainer extends Component {

    // let plantsObj = {}
   

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
    



    state = {
        visible: false
    }
    
    renderCart(){
        let cartContainer = document.getElementById("cart-box")
        console.log(cartContainer, "cartContainer")
        if(this.state.visible && cartContainer){
            cartContainer.style.display = "block"
        } else if (!this.state.visible && cartContainer){
            cartContainer.style.display = "none"
        }
    }

    handleOnClick = () => {
        this.setState(prevState => {
            return {
            visible: !prevState.visible
            }
        })
    }


    
   
    generateCartPlants = () => {

        const currentCart = this.props.user.carts[this.props.user.carts.length - 1].cart_plants

        const cartPlantData = currentCart.map(cart_plant => { 
        return <div className="cart-plant-card" key={cart_plant.id}>
            <CartPlant id={cart_plant.id} price={cart_plant.plant.price} name={cart_plant.plant.name}/>
        </div>
        })
        return cartPlantData
    }
    
    render() {
       
        return (
            <div className="cart-container">
               <button id='cart-btn' onClick={this.handleOnClick}><img alt="cart" src={`${cartIcon}`}/></button>
              
              <div id="cart-box" >
                <div id="users-cart" onClick={this.handleOnClick}>
                    {this.renderCart()}
                    {this.props.user.carts && this.generateCartPlants()}
                </div>
                <div id="total-checkout"><strong>Total</strong> - ${this.props.user.carts && this.props.user.carts[this.props.user.carts.length - 1].total}<button onClick={this.handleCheckout} id="checkout">Checkout</button>
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
import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartPlant from '../components/CartPlant'
import {cartIcon} from '../constants.js'
import {checkout} from '../actions/userActions'

class CartPlantContainer extends Component {

    state = {
        visible: false
    }

    handleOnMouse = () => {
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
        this.props.checkout(this.props.user, currentCart)
        }
    }

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
        }
        return(
            results
        )
    }

    render() {

        return (
            <div className="cart-container"onMouseLeave={this.handleOnMouse}>
               <button id='cart-btn' onMouseOver={this.handleOnMouse}><img alt="cart" src={`${cartIcon}`}/></button>
              {this.props.user.carts && <div id="cart-box" >
                  {this.props.user.carts[this.props.user.carts.length - 1].cart_plants.length === 0 ?

                  <p className="empty-cart">
                      Oh no! It seems your cart is empty.
                      <br/>
                      <br/>
                      Get shopping!
                      {this.renderCart()}
                  </p> :
                    <>
                    <div id="users-cart">
                        {this.props.user.carts && this.renderCart()}
                        {this.props.user.carts && this.generateCartPlants()}
                    </div>

                <div id="total-checkout">
                    <strong id="total">Total</strong> - ${this.props.user.carts && this.props.user.carts[this.props.user.carts.length - 1].total}             <button onClick={this.handleCheckout} id="checkout">Checkout</button>
                </div>
                </>
                }
              </div>
    }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})


export default connect(mapStateToProps, {checkout})(CartPlantContainer)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartPlant from '../components/CartPlant'

class CartPlantContainer extends Component {

   

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
        console.log(currentCart, "currentCart")
        const cartPlantData = currentCart.map(cart_plant => { 
        return <div className="cart-plant-card" key={cart_plant.id}>
            <CartPlant id={cart_plant.id} price={cart_plant.plant.price} name={cart_plant.plant.name}/>
        </div>
        })
        return cartPlantData
    }
    
    render() {
        
        // console.log(currentCart.cart_plants, "current cart cart plants")
        console.log(this.props.user)
       
        return (
            <div className="cart-container">
               <button id='cart-btn' onClick={this.handleOnClick}><img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart-loaded.png"/></button>
               
              
              <div id="cart-box" onClick={this.handleOnClick}>
                {this.renderCart()}
                {this.props.user.carts && this.generateCartPlants()}
                Total - ${this.props.user.carts && this.props.user.carts[this.props.user.carts.length - 1].total}
                <button id="checkout">Checkout</button>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})


export default connect(mapStateToProps)(CartPlantContainer)
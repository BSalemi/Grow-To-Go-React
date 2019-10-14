import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartPlant from '../components/CartPlants'

class CartPlantContainer extends Component {


    
    
    // generateCartPlants = () => {
    //     const currentCart = this.props.user.carts[this.props.user.carts.length - 1]
    //     const cartPlantData = currentCart.cart_plants.map(cart_plant => { 
    //     return <div className="cart-plant-card" key={cart_plant.id}>
    //         <CartPlant id={cart_plant.id} image={cart_plant.plant.image} size={cart_plant.plant.size} price={cart_plant.plant.price} name={cart_plant.plant.name} species={cart_plant.plant.species} exp_level={cart_plant.plant.exp_level} light_required={cart_plant.plant.light_required} pet_friendly={cart_plant.plant.pet_friendly}/>
    //     </div>
    //     })
    //     return cartPlantData
    // }
    
    render() {
        
        // console.log(currentCart.cart_plants, "current cart cart plants")
        console.log(this.props.user.carts[this.props.user.carts.length-1].cart_plants, "user")
       
        return (
            <div>
               <button id='cart-btn'><img src="https://img.icons8.com/ios-filled/50/000000/shopping-cart-loaded.png"/></button>
              {/* {this.generateCartPlants()} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user
})


export default connect(mapStateToProps)(CartPlantContainer)
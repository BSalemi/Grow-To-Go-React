import { LOGIN_USER, ADD_CART_PLANT, } from './types'

export function loginUser(user, history) {
    history.push('/')  
    return {
        type: LOGIN_USER,
        user
    }
}

export function addCartPlant(user, cart_plant){
    return {
        type: ADD_CART_PLANT,
        cart_plant,
        user
    }
}


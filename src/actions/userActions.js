import { LOGIN_USER, ADD_CART_PLANT, LOGOUT_USER } from './types'

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

export function logoutUser(user, history){
    history.push('/login')
    return {
        type: LOGOUT_USER,
        user
    }
}


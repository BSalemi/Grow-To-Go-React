import { LOGIN_USER, ADD_CART_PLANT, LOGOUT_USER, REMOVE_CART_PLANT } from './types'

export function loginUser(user, history) {
    console.log(history, "history loginUser")
    history.push('/')  
    return {
        type: LOGIN_USER,
        user
    }
}

export function addCartPlant(user){
    return {
        type: ADD_CART_PLANT,
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

export function removeCartPlant(user){
    return{
        type: REMOVE_CART_PLANT,
        user
    }
}


import { LOGIN_USER, ADD_CART_PLANT, LOGOUT_USER, REMOVE_CART_PLANT, CHECKOUT} from './types'
import { CART_PLANTS_URL, USERS_URL, CHECKOUT_URL } from '../constants'


export const loginUser = (user, history) => dispatch => {
    history.push('/') 
    fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             Accept: "application/json"
    },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then((user_data) => {
        localStorage.loggedIn = user_data.id
        dispatch({
            type: LOGIN_USER,
            payload: user_data
        })     
    })
}


export function logoutUser(user, history){
    history.push('/login')
    return {
        type: LOGOUT_USER,
        user
    }
}

export const addCartPlant = (cartPlant) => dispatch => {
    fetch(CART_PLANTS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(cartPlant)
    })
    .then(res => res.json())
    .then((user_data) => {
        dispatch({
            type: ADD_CART_PLANT,
            payload: user_data
        })
    })
}

export const removeCartPlant = (cartPlantId) => dispatch => {
    fetch(CART_PLANTS_URL + "/" + cartPlantId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            id: cartPlantId,
        }),
    })
    .then(res => res.json())
    .then((user_data) => {
        dispatch({
            type: REMOVE_CART_PLANT,
            payload: user_data
        })
    })
}

export const checkout = (user, currentCart) => dispatch => {
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
    .then((user) => {
        dispatch({
            type: CHECKOUT,
            user
        })
    })}





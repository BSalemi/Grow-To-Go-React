import { LOGIN_USER, ADD_CART_PLANT, LOGOUT_USER, REMOVE_CART_PLANT, CHECKOUT, ADD_REVIEW, DELETE_REVIEW} from './types'
import { CART_PLANTS_URL, USERS_URL, CHECKOUT_URL, REVIEWS_URL } from '../constants'


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

export const addReview = (review) => dispatch => {
    fetch(REVIEWS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             Accept: "application/json"
    },
    body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then((review) => {
        dispatch({
            type: ADD_REVIEW,
            review
        })
    })}

export const deleteReview = (reviewId, plantId) => dispatch => {
    fetch(REVIEWS_URL + "/" + reviewId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            id: reviewId,
            plant_id: plantId
        }),
    })
    .then(res => res.json())
    .then((plant_data) =>  {
        dispatch({
            type: DELETE_REVIEW,
            plant_data
        })
})}




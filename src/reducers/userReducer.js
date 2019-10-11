import { LOGIN_USER, ADD_CART_PLANT } from '../actions/types'

//GOAL: Save logged in user info to the Redux Store's State 

let initialState = {user: null}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state, 
                user: action.user 
            };
        case ADD_CART_PLANT: 
            return {
                ...state,
                user: {...state.user, cart: [...state.user.cart, action.cart_plant]}
            }
        // case ADD_ITEM_TO_CART:
        //     return {
        //         ...state,
        //         user: {...state.user, cart: [...state.user.cart, action.newcart_]}
        //     }
        default:
            return state;
    }
}
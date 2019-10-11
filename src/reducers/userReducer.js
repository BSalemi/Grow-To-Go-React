import { LOGIN_USER } from '../actions/types'

//GOAL: Save logged in user info to the Redux Store's State 

let initialState = {user: null}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state, 
                user: action.user 
            };
        // case ADD_ITEM_TO_CART:
        //     return {
        //         ...state,
        //         user: {...state.user, cart: [...state.user.cart, action.newcart_]}
        //     }
        default:
            return state;
    }
}
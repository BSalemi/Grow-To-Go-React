import { LOGIN_USER, ADD_CART_PLANT, LOGOUT_USER } from '../actions/types'

//GOAL: Save logged in user info to the Redux Store's State 

let initialState = {user: {
    id: 0,
    name: "",
    email: "",
    carts: null
  }
}

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
                user: {...state.user, carts: [...state.user.carts, action.cart_plant]}
            }
        case LOGOUT_USER:
            return {
                initialState
            }
        default:
            return state;
    }
}
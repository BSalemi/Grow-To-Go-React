import { LOGIN_USER, ADD_CART_PLANT, LOGOUT_USER, REMOVE_CART_PLANT, CHECKOUT } from '../actions/types'

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
                user: action.payload 
            };
        case ADD_CART_PLANT: 
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return initialState
            
        case REMOVE_CART_PLANT:
            return{
                ...state,
                user: action.payload
            }
        case CHECKOUT:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
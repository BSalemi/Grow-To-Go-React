import { LOGIN_USER, LOGOUT_USER } from '../actions/types'

//GOAL: Save logged in user info to the Redux Store's State 

let initialState = {user: null}

export function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state, 
                user: action.user 
            };
        default:
            return state;
    }
}
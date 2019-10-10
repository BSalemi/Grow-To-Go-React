import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { plantReducer } from './plantReducer'



const rootReducer = combineReducers({
    users: userReducer,
    plants: plantReducer
});

export default rootReducer
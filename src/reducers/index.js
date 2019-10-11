import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { plantReducer } from './plantReducer'



const rootReducer = combineReducers({
    user: userReducer,
    plants: plantReducer
});

export default rootReducer
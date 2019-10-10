import { FETCH_PLANTS } from '../actions/types'

let initialState = {fetchedPlants: []}

export function plantReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PLANTS:
            return {
                ...state,
                fetchedPlants: action.payload
            }
        default: 
            return state;
    }
}
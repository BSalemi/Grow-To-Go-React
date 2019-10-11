import { FETCH_PLANTS, SEARCH_PLANTS } from '../actions/types'

let initialState = {text: "", fetchedPlants: []}

export function plantReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PLANTS:
            return {
                ...state,
                fetchedPlants: action.payload
            }
        case SEARCH_PLANTS:
            return {

            }
        default: 
            return state;
    }
}
import { FETCH_PLANTS, FIND_PLANT, ADD_REVIEW, DELETE_REVIEW } from '../actions/types'

let initialState = {filter: null, fetchedPlants: [], foundPlant: null, reviews: []}

export function plantReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PLANTS:
            return {
                ...state,
                fetchedPlants: action.payload
            };
        case FIND_PLANT:
            return{
                ...state,
                foundPlant: action.payload
            }
        case ADD_REVIEW:
            return {
                ...state,
                review: action.review
            }
        case DELETE_REVIEW:
            return {
                ...state,
                plant: action.plant
            }
        default: 
            return state;
    }



}
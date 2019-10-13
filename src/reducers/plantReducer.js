import { FETCH_PLANTS } from '../actions/types'
import {FIND_PLANT } from '../actions/types'

let initialState = {filter: null, fetchedPlants: [], foundPlant: null}

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
        default: 
            return state;
    }



}
import { FETCH_PLANTS, FIND_PLANT } from './types'
import { PLANTS_URL } from '../constants.js'

export const fetchPlants = () => dispatch => {
    fetch(PLANTS_URL)
    .then(res => res.json())
    .then(plants => {
        dispatch({
            type: FETCH_PLANTS,
            payload: plants
        })  
    })
}

export const findPlant = (id) => dispatch => {
    fetch(PLANTS_URL+"/"+id)
    .then(res => res.json())
    .then(plant => {
        dispatch({
            type: FIND_PLANT,
            payload: plant
        })  
    })
}



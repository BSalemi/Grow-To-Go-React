import { FETCH_PLANTS } from './types'

const PLANTS_URL = "http://localhost:3000/plants"

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

 
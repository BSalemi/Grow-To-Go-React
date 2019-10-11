import { FETCH_PLANTS, SEARCH_PLANTS } from './types'
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

export const searchPlants = text => dispatch => {
    console.log("searchPlants has been called ");
    dispatch({
      type: SEARCH_PLANTS,
      payload: text
    });
  };

 
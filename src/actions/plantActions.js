import { FETCH_PLANTS, FIND_PLANT, ADD_REVIEW, DELETE_REVIEW } from './types'
import { PLANTS_URL, REVIEWS_URL } from '../constants.js'

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
export const addReview = (review) => dispatch => {
    fetch(REVIEWS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             Accept: "application/json"
    },
    body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then((review) => {
        console.log(JSON.stringify(review, "review in dispatch"))
        dispatch({
            
            type: ADD_REVIEW,
            payload: review
        })
    })}

export const deleteReview = (reviewId) => dispatch => {
    
    fetch(REVIEWS_URL + "/" + reviewId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            id: reviewId
        }),
    })
    .then(res => res.json())
    .then((id) =>  {
        dispatch({
            type: DELETE_REVIEW,
            id
            
        })
})}





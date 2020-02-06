import React from 'react';
import Review from './Review.js'

export default class Reviews extends React.Component {
    // constructor(){
    //     console.log(props, "reviews component props")}
    
    generateReviews = () => {
        const reviews = this.props.reviews.map(review => {
            return <Review title={review.title} body={review.body}/>
        })
        return reviews
    }
    render(){
        return
    }
}
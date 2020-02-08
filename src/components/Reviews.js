import React from 'react';
import Review from './Review.js';
import {connect} from 'react-redux';

class Reviews extends React.Component {

    handleRemoveReview = event => {
        
    }
   
    generateReviews = () => {
        const reviews = this.props.reviews.map(review => {
            return <Review key={review.id} title={review.title} body={review.body}/>
            
        })
        return reviews
    }
    render(){
        return(
            <ul>
                {this.generateReviews()}
            </ul>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps)(Reviews)
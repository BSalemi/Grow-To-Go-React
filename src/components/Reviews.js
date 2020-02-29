import React from 'react';
import Review from './Review.js';
import {connect} from 'react-redux';

class Reviews extends React.Component {
 
    generateReviews = () => {
        const reviews = this.props.reviews.map(review => {
            return <Review key={review.id} id={review.id} title={review.title} body={review.body} user_id={review.user_id} plant_id={review.plant_id}/>
        })
        return reviews
       
    }
    render(){
        return(
            <>
                {this.generateReviews()}
           </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps)(Reviews)
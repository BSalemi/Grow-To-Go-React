import React from 'react';
import {deleteReviewIcon, REVIEWS_URL} from '../constants.js';
import { deleteReview } from '../actions/plantActions';
import {connect} from 'react-redux';

class Review extends React.Component {

    handleRemoveReview = event => {
        event.preventDefault();
        let reviewId = event.target.dataset.reviewId
        this.props.deleteReview(reviewId);
    }
    
    render(){
    
        let user_id = this.props.user.user.id 
        return(
                <div className="review">
                    {user_id === this.props.user_id ? <img id="remove-review" alt="remove-review" src={`${deleteReviewIcon}`} data-review-id={this.props.id} onClick={event => this.handleRemoveReview(event)}/> : ""}
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>  
                </div>   
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps, {deleteReview})(Review)
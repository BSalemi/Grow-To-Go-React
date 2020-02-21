import React from 'react';
import {deleteReviewIcon, REVIEWS_URL} from '../constants.js';
import { deleteReview } from '../actions/userActions';
import {connect} from 'react-redux';

class Review extends React.Component {

    handleRemoveReview = event => {
        event.preventDefault();
        let reviewId = event.target.dataset.reviewId
        let plantId = this.props.plant_id
        this.props.deleteReview(reviewId, plantId);
    }
    
    render(){
        let user_id = this.props.user.user.id 
        console.log(this.props, "props")
        return(
                <div className="review">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>
                   {user_id === this.props.user_id ? <img id="remove-review" alt="remove-review" src={`${deleteReviewIcon}`} data-review-id={this.props.id} onClick={event => this.handleRemoveReview(event)}/> : ""}
                </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps, {deleteReview})(Review)
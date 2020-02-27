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
                    <div id="review">
                        <h5 id="review-heading">{this.props.title}</h5>
                        <p id="review-body"> {this.props.body}</p>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps, {deleteReview})(Review)
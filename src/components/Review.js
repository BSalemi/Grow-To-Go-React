import React from 'react';
import {deleteReview, REVIEWS_URL} from '../constants.js';
import {connect} from 'react-redux';

class Review extends React.Component {
    
    handleRemoveReview = event => {
        event.preventDefault();
        let reviewId = event.target.dataset.reviewId
        fetch(REVIEWS_URL + "/" + reviewId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                id: reviewId,
            }),
        })
        .then(res => res.json())
        .then()
    }
    
    render(){
        let user_id = this.props.user.user.id 
        console.log(user_id, "user id")
        console.log(this.props, "props")
        return(
                <div className="review">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>
                   {user_id === this.props.user_id ? <img id="remove-review" alt="remove-review" src={`${deleteReview}`} data-review-id={this.props.id} onClick={this.handleRemoveReview}/> : ""}
                </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps)(Review)
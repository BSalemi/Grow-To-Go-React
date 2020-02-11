import React from 'react';
import {deleteReview} from '../constants.js';
import {connect} from 'react-redux';

class Review extends React.Component {
    
    render(){
        let user_id = this.props.user.user.id 
        console.log(user_id, "user id")
        console.log(this.props, "props")
        return(
                <div className="review">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>
                   {user_id == this.props.user_id ? <img id="remove-review" alt="remove-review" src={`${deleteReview}`} data-review-id={this.props.id} onClick={this.handleRemoveReview}/> : ""}
                </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    plants: state.plants
})
    
export default connect(mapStateToProps)(Review)
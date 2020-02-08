import React from 'react';
import {deleteReview} from '../constants.js'

export default class Review extends React.Component {
    render(){
        return(
           
                <div className="review">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.body}</p>
                    <img id="remove-review" alt="remove-review" src={`${deleteReview}`} data-review-id={this.props.id} onClick={this.handleRemoveReview}/>
                </div>
            
        )
    }
}
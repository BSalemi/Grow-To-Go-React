import React from 'react';

export default class Review extends React.Component {
    render(){
        return(
            <li>
                <h4>{this.props.title}</h4>
                <p>{this.props.body}</p>
            </li>
        )
    }
}
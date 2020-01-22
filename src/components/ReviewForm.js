import React from 'react'; 

export default class ReviewForm extends React.Component {
    render() {
        return(
            <div className="review-form">
                <form>
                    <input type="text" name="title" placeholder="Review Title"/>
                    <input type="textarea" name="body" placeholder="Review Body"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
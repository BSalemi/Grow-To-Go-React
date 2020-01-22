import React from 'react'; 

export default class ReviewForm extends React.Component {
    state = {
        title: "",
        body: ""
    }

    render() {
        return(
            <div className="review-form">
                <form>
                    <input type="text" name="title" placeholder="Review Title" value={this.state.title}/>
                    <input type="textarea" name="body" placeholder="Review Body" value={this.state.body}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
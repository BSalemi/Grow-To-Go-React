import React from 'react'; 

export default class ReviewForm extends React.Component {
    state = {
        title: "",
        body: ""
    }

    handleOnChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div className="review-form">
                <form>
                    <input type="text" name="title" placeholder="Review Title" value={this.state.title} onChange={event => this.handleOnChange(event)}/>
                    <input type="textarea" name="body" placeholder="Review Body" value={this.state.body} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
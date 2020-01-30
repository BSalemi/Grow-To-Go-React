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

    handleOnSubmit = (event)=> {
        event.preventDefault()
        const review = {
            title: this.state.title,
            body: this.state.body
        }
    }

    render() {
        return(
            <div className="review-form">
                <h5>Add Review:</h5>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" name="title" placeholder="Review Title" value={this.state.title} onChange={event => this.handleOnChange(event)}/>
                    <input type="textarea" name="body" placeholder="Review Body" value={this.state.body} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
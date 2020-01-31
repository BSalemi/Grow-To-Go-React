import React from 'react'; 
import { connect } from 'react-redux';
import { REVIEWS_URL } from '../constants.js'
import { addReview } from '../actions/userActions'

class ReviewForm extends React.Component {

    

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
            body: this.state.body,
            user_id: this.props.user_id,
            plant_id: this.props.plant_id
        }
        this.props.addReview(review)
    }
    //     fetch(REVIEWS_URL, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //              Accept: "application/json"
    //     },
    //     body: JSON.stringify(review)
    //     })
    //     .then(res => res.json())
    //     .then(review_data => {
    //         console.log(review_data, "review_data")
    //     })
    // }


    render() {
        console.log(this.props, "props review form")
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

const mapStateToProps = state => ({
    user: state.user.user
})

export default connect(mapStateToProps, {addReview})(ReviewForm)
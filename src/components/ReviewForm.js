import React from 'react'; 
import { connect } from 'react-redux';
import { addReview } from '../actions/plantActions'

class ReviewForm extends React.Component {

    state = {
        title: "",
        body: "",
        visibility: false
    }

    handleOnChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event)=> {
        event.preventDefault();
        const review = {
            title: this.state.title,
            body: this.state.body,
            user_id: this.props.user_id,
            plant_id: this.props.plant_id
        }
        this.props.addReview(review);
        this.setState({
            title: "",
            body: "",
            visibility: false
        })
    }

    toggleVisibility = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }
    render() {
        const {visibility, body, title} = this.state
        return(
            <>
            <div>
                <button onClick={this.toggleVisibility} className={visibility ? "hidden" : "leave-review"}>Leave Review</button>
            </div>
            <div className={visibility ? "review-form" : "hidden"}>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" name="title" placeholder="Review Title" value={title} onChange={event => this.handleOnChange(event)}/>
                    <input type="textarea" name="body" placeholder="Review Body" value={body} onChange={event => this.handleOnChange(event)}/>
                    <input id="review-submit" type="submit" value="Add Review"/>
                </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    plants: state.plants
})

export default connect(mapStateToProps, {addReview})(ReviewForm)
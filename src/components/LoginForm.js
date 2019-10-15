import React from 'react'
import { loginUser } from '../actions/userActions'
import {fetchPlants} from '../actions/plantActions'
import { connect } from 'react-redux'
import {USERS_URL} from '../constants.js' 
import { withRouter } from 'react-router-dom'

// let loggedIn = null


class LoginForm extends React.Component {

    state = {
        name: "",
        email: ""
    }


    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email
        }
        fetch(USERS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json"
        },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then((user_data) => {
            this.props.loginUser(user_data, this.props.history)
            localStorage.loggedIn = user_data.id
            this.props.history.push('/')
            this.props.fetchPlants()
        })
    }  

    render(){
        return(
            <div id="login form">
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" name="name" placeholder="Please enter your name" value={this.state.name} onChange={event => this.handleOnChange(event)}/> 
                    <br/>
                    <input type="text" name="email" placeholder="Please enter your email" value={this.state.email} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input type="submit" value="Get Shopping!"/>
                </form>
            </div>
        )
    }
}


export default connect(null, {loginUser, fetchPlants})(withRouter(LoginForm))
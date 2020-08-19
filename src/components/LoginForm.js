import React from 'react'
import { loginUser } from '../actions/userActions'
import {fetchPlants} from '../actions/plantActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


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
        const {name, email} = this.state
        event.preventDefault()
        if(name.length > 1 && email.length > 1){
            const user = {
                name: name,
                email: email
            }
            
            this.props.loginUser(user, this.props.history)
            this.props.history.push('/')
            this.props.fetchPlants()
        } else {
            alert("Please enter a username and email address to login.")
        }

        
    }  

    render(){
        return(
            <div id="login-form">
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input type="text" name="name" placeholder="Please enter your name" value={this.state.name} onChange={event => this.handleOnChange(event)}/> 
                    <br/>
                    <input type="email" name="email" placeholder="Please enter your email" value={this.state.email} onChange={event => this.handleOnChange(event)}/>
                    <br/>
                    <input id="login-submit" type="submit" value="Get Shopping!"/>
                </form>
            </div>
        )
    }
}


export default connect(null, {loginUser, fetchPlants})(withRouter(LoginForm))
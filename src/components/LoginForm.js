import React from 'react'

const USERS_URL = "http://localhost:3000/users"


export default class LoginForm extends React.Component {

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
        .then(user_data => console.log(user_data, "user_data"))
    }
    render(){
        return(
            <div id="login form">
                {/* <h4>Welcome to GrowToGo. Enter your name and email to get started. </h4> */}
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
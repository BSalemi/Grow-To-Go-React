import React from 'react'

export default class LoginForm extends React.Component {

    state = {
        name: "",
        email: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div id="login form">
                <form>
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
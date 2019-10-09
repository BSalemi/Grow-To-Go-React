import React from 'react'

export default class LoginForm extends React.Component {

    state = {
        name: "",
        email: ""
    }
    render(){
        return(
            <div id="login form">
                <form>
                    <input type="text" name="name" placeholder="Please enter your name" value={this.state.name}/> 
                    <br/>
                    <input type="text" name="email" placeholder="Please enter your email" value={this.state.email}/>
                    <br/>
                    <input type="submit" value="Get Shopping!"/>
                </form>
            </div>
        )
    }
}
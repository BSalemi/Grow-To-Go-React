import React, { Component } from 'react'
import {logoutUser} from '../actions/userActions'
import {connect} from 'react-redux'
import {logoutIcon} from '../constants.js'
import {withRouter} from 'react-router-dom'
 
class Logout extends Component {

    
    renderLogOutButton(){
        let logOutBtn = document.getElementById("logout")
        if(localStorage.loggedIn && logOutBtn){
            logOutBtn.style.display = "block"
        } else if (!localStorage.loggedIn && logOutBtn){
            logOutBtn.style.display = "none";
            this.props.history.push("/login")

        }
    }

    handleOnClick = () => {
        localStorage.clear('loggedIn')
        let user = this.props.user.user
        this.props.logoutUser(user, this.props.history)
    }
     

    render() {
        return (
            <div>
                <div className="logout-btn">
                    <button id="logout" onClick={this.handleOnClick}><img alt="logout button" src={`${logoutIcon}`}/></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {logoutUser})(withRouter(Logout))
import React, { Component } from 'react'
import {connect} from 'react-redux'

class Logout extends Component {

    
    
     

    render() {
        return (
            <div>
                <div class="logout-btn">
                    <button id="logout"><img alt="logout button" src="http://icons.iconarchive.com/icons/icons8/windows-8/32/User-Interface-Logout-icon.png"/></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(Logout)
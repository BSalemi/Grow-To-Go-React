import React, { Component } from 'react'

export default class Cart extends Component {
    state = {
        visible: false
    }

    renderCart(){
        if(this.state.visible){
            return(
                <div className="cart">

                </div>
            )
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CART_PLANTS_URL } from '../constants.js'
import { addCartPlant } from '../actions/userActions'

class PlantShow extends Component {
    constructor(props){
        super(props)
        console.log(props, "props")
    }

    const plant = this.props.plants.fetchedPlants.find(plantObj => plantObj.id === this.props.match.params.id)

    render(){
        return (
            <div>
              null  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user 
})
    
export default connect(mapStateToProps)(PlantShow)
import React, { Component } from 'react'
import { fetchPlants } from '../actions/plantActions'
import { connect } from 'react-redux'
import Plant from '../components/Plant'


class PlantContainer extends Component {
    
    state = {
        text: ""
    }

    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    componentDidMount(){
        this.props.fetchPlants()
    }


    generatePlants = () => {
        const plantData = this.props.plants.fetchedPlants.map(plant => {
        return <div className="plant-card" key={plant.id}>
            <Plant image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
        return plantData
    }

    render() {

        return (
            <>
            <div className="searchForm">
                <form>
                    <input type="text" value={this.state.value} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>

            <div className="plant-container">
                {this.generatePlants()}
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {plants: state.plants}
}

export default connect(mapStateToProps, {fetchPlants})(PlantContainer)
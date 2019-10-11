import React, { Component } from 'react'
import { fetchPlants, searchPlants } from '../actions/plantActions'
import { connect } from 'react-redux'
import PlantCard from '../components/PlantCard'
import FilterOptions from '../components/FilterOptions'


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
            <PlantCard image={plant.image} size={plant.size} price={plant.price} name={plant.name} species={plant.species} exp_level={plant.exp_level} light_required={plant.light_required} pet_friendly={plant.pet_friendly}/>
        </div>
        })
        return plantData
    }

    render() {

        return (
            <>
            <div className="searchForm" onSubmit={event => this.handleOnSubmit(event)}>
                <form>
                    <input type="text" value={this.state.value} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
            <br/>
            <FilterOptions/>
            <div className="plant-container">
                {this.generatePlants()}
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    plants: state.plants,
    text: state.text
})

export default connect(mapStateToProps, {fetchPlants, searchPlants})(PlantContainer)
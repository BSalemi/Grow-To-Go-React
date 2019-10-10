import React from 'react'

export default class SearchBar extends React.Component {
    state = {
        value: ""
    }

    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
 
    render(){
        return(
            <div className="searchForm">
                <form>
                    <input type="text" value={this.state.value} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}
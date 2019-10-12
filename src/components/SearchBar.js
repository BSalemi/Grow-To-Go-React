import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        text: ""
    }

    handleOnChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }


    render() {
        return (
            <div className="searchForm" onSubmit={event => this.handleOnSubmit(event)}>
                <form>
                    <input type="text" value={this.state.value} onChange={event => this.handleOnChange(event)}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

import React, {Component} from 'react'

 class SearchBar extends Component  {

    toggleSearch = () => {
        const searchInput = document.querySelector("#search-input")
        const searchToggle = document.querySelector(".toggle-search")

        searchInput.classList.toggle('hidden')
    }
    
    render(){
        return (
            <div className="search-form">
                <button className=".toggle-search" onClick={this.toggleSearch}>Search</button>
                <form>
                   <input type="text" id="search-input" className="hidden" onChange={this.props.updateSearch}/>
                </form>
            </div>
        )
    }
}

export default SearchBar
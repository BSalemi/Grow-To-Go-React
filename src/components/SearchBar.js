import React from 'react'

const SearchBar = (props) =>  {
        return (
            <div className="search-form">
                <form>
                   Search: <input type="text" id="search-input" onChange={props.updateSearch}/>
                </form>
            </div>
        )
}

export default SearchBar
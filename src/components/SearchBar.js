import React from 'react'

const SearchBar = (props) =>  {
        return (
            <div className="searchForm">
                <form>
                    <input type="text" id="search-input" placeholder="Search" onChange={props.updateSearch}/>
                </form>
            </div>
        )
}

export default SearchBar
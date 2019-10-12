import React from 'react'

const SearchBar = (props) =>  {
        return (
            <div className="searchForm" onSubmit={event => this.handleOnSubmit(event)}>
                <form>
                    <input type="text" id="search-input" onChange={props.updateSearch}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
}

export default SearchBar
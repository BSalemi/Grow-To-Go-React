import React, {Component} from 'react'


class FilterOptions extends Component {

    toggleFilters = () => {
        const menus = document.querySelector(".sort-menus")
        const filterToggle = document.querySelector(".toggle-filter")

        menus.classList.toggle('hidden')
        filterToggle.classList.toggle('toggle-clicked')
    }

    render(){
        const {setVisibilityFilter, setPetFriendly} = this.props 

        return (
        <>
            <button className="toggle-filter" onClick={this.toggleFilters}>Filter Options </button>

            <div className="sort-menus hidden">
                <div className="sort-menu-children">
                    <label value="select-price"><strong style={{padding: "3px"}}>Price:</strong></label>
                    <select onChange={setVisibilityFilter} id="price-dropdown" name="price">
                        <option value="sort_price_asc">Low to High</option>
                        <option value="sort_price_desc">High to Low</option>
                    </select>
                </div>

                <div className="sort-menu-children">
                    <label value="select-size"><strong style={{padding: "3px"}}>Size:</strong></label>
                    <select onChange={setVisibilityFilter} id="size-dropdown" name="size">
                        <option  value="find_mini">Mini</option>
                        <option  value="find_small">Small</option>
                        <option  value="find_medium">Medium</option>
                        <option  value="find_large">Large</option>
                        <option  value="find_xlarge">X-Large</option>
                    </select>
                </div>

                <div className="sort-menu-children">
                    <label value="select-exp-level"><strong style={{padding: "3px"}}>Experience:</strong></label>
                    <select onChange={setVisibilityFilter} id="exp-level-dropdown" name="expLevel">
                        <option  value="find_beginner">Beginner</option>
                        <option  value="find_intermediate">Intermediate</option>
                        <option  value="find_advanced">Advanced</option>
                    </select>
                </div>

                <div className="sort-menu-children">
                    <label value="select-light-required"><strong style={{padding: "3px"}}>Light Requirement:</strong></label>
                    <select onChange={setVisibilityFilter} id="light-required-dropdown" name="lightRequired">
                        <option  value="find_low">Low Light</option>
                        <option  value="find_medium_indirect">Medium Indirect</option>
                        <option  value="find_bright_indirect">Bright Indirect</option>
                        <option  value="find_bright_direct">Bright Direct</option>
                        <option  value="find_full_sun">Full Sun</option>
                    </select>
                </div>

                <div className="sort-menu-children">
                    <label value="select-pet-friendly"><strong style={{padding: "3px"}}>Pet Friendly: </strong></label>
                    <input onClick={setPetFriendly}  defaultChecked={false} type="checkbox" id="pet-friendly-checkbox" value="pet-friendly"/>
                </div>
            </div>
        </>
        )
    }
}

    export default FilterOptions
import React, { Component } from 'react'



const FilterOptions = (props) => {
    
        return (
            <div className="sort-menus">
            <div className="sort-menu-children">
                <label value="select-price"><strong>Sort by Price:</strong></label>
                <select onChange={props.setVisibilityFilter} id="price-dropdown" name="sort-price">
                    <option value="sort_price_asc">Low to High</option>
                    <option value="sort_price_desc">High to Low</option>
                </select>
            </div>
            <div className="sort-menu-children">
                <label value="select-size"><strong>Sort by Size:</strong></label>
                <select onChange={props.setVisibilityFilter} id="size-dropdown" name="select-size">
                    <option  value="find_mini">Mini</option>
                    <option  value="find_small">Small</option>
                    <option  value="find_medium">Medium</option>
                    <option  value="find_large">Large</option>
                    <option  value="find_xlarge">X-Large</option>
                </select>
            </div>

            <div className="sort-menu-children">
                <label value="select-exp-level"><strong>Sort by Experience:</strong></label>
                <select onChange={props.setVisibilityFilter} id="exp-level-dropdown" name="select-exp-level">
                    <option  value="find_beginner">Beginner</option>
                    <option  value="find_intermediate">Intermediate</option>
                    <option  value="find_advanced">Advanced</option>
                </select>
            </div>

            <div className="sort-menu-children">
                <label value="select-light-required"><strong>Sort by Light Requirement:</strong></label>
                <select onChange={props.setVisibilityFilter} id="light-required-dropdown" name="select-light-required">
                    <option  value="find_low">Low Light</option>
                    <option  value="find_medium_indirect">Medium Indirect</option>
                    <option  value="find_bright_indirect">Bright Indirect</option>
                    <option  value="find_bright_direct">Bright Direct</option>
                    <option  value="find_full_sun">Full Sun</option>
                </select>
            </div>
            <div className="sort-menu-children">
                <label value="select-pet-friendly"><strong>Pet Friendly: </strong></label>
                <input onChange={props.setVisibilityFilter} type="checkbox" id="pet-friendly-checkbox" value="pet-friendly"/>
            </div>
        </div>
        )
    }

    export default FilterOptions
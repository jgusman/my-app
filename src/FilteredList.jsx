import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        // TODO: Add a new key/value pair in the state to keep track of type
        this.state = {
            search: "",
            type: "",
            sort: "",
            condition: ""
        };
    }
    // Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

    filterItem = (item) => {
        // Checks if the current search term is contained in this item
        // TODO: Add condition to check item’s type
        if (this.state.type == "" && this.state.condition == "") {
            return item.name.toLowerCase().search(this.state.search) !== -1
        }
        else if(this.state.condition == "") {
        return item.name.toLowerCase().search(this.state.search) !== -1
         && item.type == this.state.type; }
        else if(this.state.type == "") {
        return item.name.toLowerCase().search(this.state.search) !== -1
         && item.condition == this.state.condition; }
        else {
        return item.name.toLowerCase().search(this.state.search) !== -1
         && item.type == this.state.type && item.condition == this.state.condition; }
        

    }
    /* TODO: Add an event handling method for when an item in dropdown is selected
       Per the DropdownButton documentation, this function should take in an eventKey and     
       event
    */
    onSelectHandler = (event) => {
        this.setState({type: event})
    }

    /* Resets the type to All */
    onSelectHandlerAll = (event) => {
        this.setState({type: ""})
    }

    onSelectHandlerCond = (event) => {
        this.setState({condition: event})
    }

    /* Resets the type to All */
    onSelectHandlerAllCond = (event) => {
        this.setState({condition: ""})
    }

    onSortHandler = (event) => {
        this.setState({sort: event})
    }

    processList = () => {
        if (this.state.sort == "") {
            var items = this.props.items.filter(this.filterItem).sort(function(a, b){return a.distance - b.distance}) 
            return items
        }
        else if (this.state.sort == "Recent") {
            var items = this.props.items.filter(this.filterItem).sort(function(a, b){return a.time - b.time})
            return items
        }
        else if (this.state.sort == "Distance") {
            var items = this.props.items.filter(this.filterItem).sort(function(a, b){return a.distance - b.distance})
            return items
        }
    }


    render() {
        return (
            <div className="filter-list">
                <div className = "header">
                <h1>Curb Alert</h1>
                {/* TODO: Add more menu items with onSelect handlers*/}
                <h2> Find free stuff people leave on the curb! </h2>
                </div>

                <div className="parameters">

                <h3>

                <div className="filterBox">
                Filter By: 
                <DropdownButton className = "dropDown" id="typeDropdown" title={"Type"}>
                  <MenuItem eventKey="All" onSelect={this.onSelectHandlerAll}>All</MenuItem>
                  <MenuItem eventKey="Furniture" onSelect={this.onSelectHandler}>Furniture</MenuItem>
                  <MenuItem eventKey="Electronics" onSelect={this.onSelectHandler}>Electronics</MenuItem>
                </DropdownButton>

                <DropdownButton className = "dropDown" id="conditionDropdown" title={"Condition"}>
                  <MenuItem eventKey="All" onSelect={this.onSelectHandlerAllCond}>All</MenuItem>
                  <MenuItem eventKey="Like New" onSelect={this.onSelectHandlerCond}>Like New</MenuItem>
                  <MenuItem eventKey="Good" onSelect={this.onSelectHandlerCond}>Good</MenuItem>
                  <MenuItem eventKey="Fair" onSelect={this.onSelectHandlerCond}>Fair</MenuItem>
                  <MenuItem eventKey="Bad" onSelect={this.onSelectHandlerCond}>Bad</MenuItem>
                </DropdownButton>
                </div>

                <div className = "searchInput">

                <input type="text" placeholder="Search Stuff" onChange={this.onSearch} />
                </div>

                <div className="sortArea">
                Sort By: 
                <DropdownButton className = "dropDown" id="sortDropdown" title={"Sort"}>
                  <MenuItem eventKey="None" onSelect={this.onSortHandlerAll}>None</MenuItem>
                  <MenuItem eventKey="Recent" onSelect={this.onSortHandler}>Most Recent</MenuItem>
                  <MenuItem eventKey="Distance" onSelect={this.onSortHandler}>Closest</MenuItem>
                </DropdownButton>
                </div>
                </h3>
                </div>
                <List items={this.processList()} /> 
            </div>
        );
    }
}
export default FilteredList;
import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList'; 

/*
import Counter from './Counter';


import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
      return (
          <div className = "App">
              <HelloWorld name={"Jake Gusman"}/>
              <Counter/>
          </div>
      );
  }
}
*/
/*
    This list of produce that is passed into the FilteredList component.
    Notice that it is a list of javascript objects where {key: value}.
*/


const stuff = [
  {name: "Blue Couch", type: "Furniture", condition: "Good", time: 1, distance: 2.1, pic: "./Photos/blue_couch.png",id:"A"},
  {name: "Wooden Dresser", type: "Furniture", condition: "Good", time: 3, distance: 4.5, pic: "/Photos/wood_dresser.jpg",id:"B"},
  {name: "Dishwasher", type: "Electronics", condition: "Fair", time: 6, distance: 0.5, pic: "/Photos/dishwasher.jpg",id:"C"},
  {name: "Air Conditioner", type: "Electronics", Condition: "Good", time: 15, distance: 5.2, pic: "/Photos/aircon.jpg",id:"D"},
  {name: "Infant Seat", type: "Furniture", condition: "Like New", time: 17, distance: 2.1, pic: "/Photos/infant-seat.jpg",id:"E"},
  {name: "Washing Machine", type: "Electronics", condition: "Fair", time: 31, distance: 7.6,pic: "/Photos/washing_machine.jpeg",id:"F"},
  {name: "Brown Couch", type: "Furniture", condition: "Good", time: 35, distance: 1.3, pic: "/Photos/brown_couch.jpg",id:"G"},
  {name: "Workout Machine and Desk", type: "Furniture", condition: "Good", time: 45, distance: 6.0, pic: "/Photos/workoutmachine_and_desk.jpg",id:"H"},
  {name: "Black TV", type: "Electronics", condition: "Bad", time: 46, distance: 8.1, pic: "/Photos/black_TV.jpg",id:"I"},
  {name: "Stove", type: "Electronics", condition: "Bad", time: 47, distance: 1, pic: "/Photos/stove.jpeg",id:"J"},
  {name: "Silver and Grey TVs", type: "Electronics", condition: "Fair", time: 51, distance: 3.9, pic: "/Photos/silverandgrey_TVs.jpg",id:"K"},
  {name: "Yellow Bookshelf", type: "Furniture",condition: "Good", time: 55, distance: 4.0, pic: "/Photos/yellow_bookshelf.jpg",id:"L"},
];

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* 
                  The list of produce will be passed into the FilteredList
                  component the items property.
                */} 
                <FilteredList items={stuff} />
            </div>
        );
    }
}

export default App;


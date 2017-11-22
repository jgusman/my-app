   
import React, { Component } from 'react';


/*
  The ListItem component creates the item in each list
*/
class ListItem extends Component {


  render() {
  var item = this.props.item

    return (
        <div className = "item-box"> 

            <div className = 'item-pic'>
              <img src = {item.pic} height = "150" alt = {item.name}></img>
            </div>
            
            <div className = "item-time">
              {item.time} minutes ago
            </div>

            <div className = "item-description">
              {item.name} 
            </div>

            <div className = "item-distance">
                {item.distance} miles away
            </div>

        </div>
        )
  }
}

  export default ListItem;
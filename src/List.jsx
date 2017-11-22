import React, { Component } from 'react';
import ListItem from './ListItem';

/*
  The list component will take the list of items passed in as a property
  and create an HTML list with those item.
*/
class List extends Component {
    renderList() {
        /*
           Javascript map will let you iterate and modify each item in a list.
           In this example, we are changing each item
           (ex. {name: "Apple", type: "Fruit"}) into a HTML list element.
        */
        const items = this.props.items.map(item => {
            return (
              <li key={item.name}> 

               <ListItem item = {item}/>

              </li>
          )
        });

        return items;
    }

    render() {
        return (
            <ul className = "list">
                {this.renderList()}
            </ul>
        );
    }
}

export default List;
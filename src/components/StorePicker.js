import React from 'react'
import {getFunName} from '../helpers.js'

class StorePicker extends React.Component {     //Capital classname so can be used more than once

  constructor() {  //bunch of code that runs when class is created
    super();  //creates react component
    this.goToStore = this.goToStore.bind(this);
  }


  goToStore(event) {  //event is all of the information from form
    event.preventDefault();
    console.log("you changed the url");
    console.log(this);
    console.log(this.storeInput.value)
    //first we're going to grab hold of the text
    //secondly we're going to transition from / to /store/:storeId
  }


  //render methods are bound to the class, therefore can use this in on submit which is grabbing StorePicker
  render() {    
    return (
      <form className="store-selector" onSubmit={this.goToStore}>  
        <input type="text" placeholder="Store Name" required  defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form> 
      )
    }
  }   


export default StorePicker;
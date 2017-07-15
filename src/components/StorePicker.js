import React from 'react'
import {getFunName} from '../helpers.js'

class StorePicker extends React.Component {     //Capital classname so can be used more than once

  constructor() {  //bunch of code that runs when class is created
    super();  //creates react component
    this.goToStore = this.goToStore.bind(this);
  }


  goToStore(event) {  //event is the entire form object
    event.preventDefault();
    //first we're going to grab hold of the text
    const storeId = this.storeInput.value;
    //secondly we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`store/${storeId}`)
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

  StorePicker.contextTypes = {       //this makes router available to StorePicker via context
    router: React.PropTypes.object
    }



export default StorePicker;
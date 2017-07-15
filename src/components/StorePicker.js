import React from 'react'
import {getFunName} from '../helpers.js'

class StorePicker extends React.Component {     //Capital classname so can be used more than once

  render() {
    return (
      <form className="store-selector">
        <input type="text" placeholder="Store Name" required  defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </form> 
    )
 

  }

}   


export default StorePicker;
import React from 'react'

class StorePicker extends React.Component {     //Capital classname so can be used more than once

  render() {
    return (
      <form className="store-selector">
        <input type="text" placeholder="Store Name"/>
        <button type="submit">Visit Store</button>
      </form> 
    )
 

  }

}   


export default StorePicker;
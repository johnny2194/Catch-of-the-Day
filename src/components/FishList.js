import React from 'react'
import Fish from './Fish'

class FishList extends React.Component { 

  render() {
    return( 
      <ul className="list-of-fishes">
        {this.props.fishes.map(function(fish) {
          return ( <Fish name={fish.name} key={fish.id} description={fish.description} status={fish.status} image={fish.image} price={fish.price}/> )}
          )} 
      </ul>
    )
  }
}

export default FishList
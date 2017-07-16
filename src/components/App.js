import React from 'react';
// import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {

  constructor() {
    super();

    this.addFish = this.addFish.bind(this);

    this.state = {
      fishes:[],
      order: {}
      }

    }

  addFish(fish){
    
    fish.id = Date.now();
    let newFishes = this.state.fishes.concat([fish]);
    this.setState({fishes: newFishes});
  };

  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    )
  } 
}

export default App;
import React from 'react';
// import StorePicker from './StorePicker'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import SampleFishes from '../sample-fishes'
import FishList from './FishList'

class App extends React.Component {

  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSampleFishes = this.loadSampleFishes.bind(this);

    this.state = {
      fishes:[],
      order: {}
      }

    }

  addFish(fish){

    fish.id = Date.now();
    let newFishes = this.state.fishes.concat([fish]);
    this.setState({fishes: newFishes});
  }

  loadSampleFishes() {
    let newFishes = this.state.fishes.concat(SampleFishes);
    this.setState({fishes: newFishes})
  }

  // var commentNodes = this.props.data.map(function(comment) {
  //   return (
  //     <Comment author={comment.author} key={comment.id}>
  //       {comment.text}
  //     </Comment>
  //   )

  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <FishList fishes={this.state.fishes}/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    )
  } 
}

export default App;
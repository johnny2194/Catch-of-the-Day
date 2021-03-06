import React from 'react';
import {formatPrice} from '../helpers.js'

class Order extends React.Component {

  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
    }

  renderOrder(key) {
    const fish = this.props.fishes.filter((fish) => { return fish.name === key })[0];
    const count = this.props.order[key];
    if(!fish || fish.status === 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available!</li>;
      }

      return (
        <li key={key}>
          <span>{count}lbs {fish.name}</span>
          <span className="price">{formatPrice(count * fish.price)}</span>
          </li>
      )
    }

  render(){

    const orderIds = Object.keys(this.props.order);
    console.log(orderIds)

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes.filter((fish) => { return fish.name === key })[0]

      console.log(fish)
      const count = this.props.order[key];
      if(fish && fish.status === 'available') {
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
      }, 0);
    //   returns array of strings that represents enumerable property
    return(
      <div className="order-wrap">
        <h2>Your order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
            </li>
          </ul>
      </div>
    )
  }
}

export default Order

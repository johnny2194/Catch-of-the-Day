import React from 'react'
import {formatPrice} from '../helpers.js'

class Fish extends React.Component {

  render() {

    const isAvailable = this.props.status === 'available';
    const buttonText = isAvailable ? 'Add to order' : 'Sold Out!'; //ternary operator  

    return(
      <li className="menu-fish">
        <img src={this.props.image} alt={this.props.name}/>
        <h3 className="fish-name">{this.props.name}
          <span className="price">{formatPrice(this.props.price)}</span>
          </h3>
        <p>{this.props.description}</p>
        <button>{buttonText}</button>
        </li>
      )
  }
}

export default Fish
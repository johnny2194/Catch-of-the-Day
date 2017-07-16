import React from 'react'

class Fish extends React.Component {

  render() {
    return(
      <li className="menu-fish">
        <img src={this.props.image} alt={this.props.name}/>
        <h3 className="fish-name">{this.props.name}
          <span className="price">{this.props.price}</span>
          </h3>
        <p>{this.props.description}</p>
        <button>Add to order</button>
        </li>
      )
  }
}

export default Fish
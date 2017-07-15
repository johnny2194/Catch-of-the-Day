import React from 'react';

class AddFishForm extends React.Component {

  createFish(event) {
    event.preventDefault();

    //create fish object that grabs hold of the values from form
    const fish = {    
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      description: this.description.value,
      value: this.image.value,
    }

    console.log(fish)
  }

  render() {
    return( 
      <div>
        <form className="fish-edit" onSubmit={this.createFish.bind(this)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
          <input ref={(input) => this.price = input}  type="text" placeholder="Fish Price"/>
          <select ref={(input) => this.status = input}>
            <option value="available">Fresh as hell!</option>
            <option value="unavailable">Sold out!</option>
          </select>
          <textarea ref={(input) => this.description = input} placeholder="Fish Desc"></textarea>
          <input ref={(input) => this.image = input} type="text" placeholder="Fish Image"/>
          <button type="submit">+ Add Item</button>
        </form>
      </div>
    )
  }
}

export default AddFishForm
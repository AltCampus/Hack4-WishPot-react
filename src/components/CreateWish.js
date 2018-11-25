import React, { Component } from 'react'

class CreateWish extends Component {
  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange} placeholder="Enter Wishlist Title" />
        </form>
      </div>
    )
  }
}

export default CreateWish ;
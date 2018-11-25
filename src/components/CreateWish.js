import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWishBoard } from './../actions/action'
import { Link } from 'react-router-dom';


class CreateWish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishTitle: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      wishTitle: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTitle(this.state.wishTitle)
  }

  render() {
    const {boards} = this.props;
    console.log(boards)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="Enter Wishlist Title" />
        </form>
        <div>
          {
            boards && boards.map((board, id) => (
              <Link to={`/board/${id}`}>
                <h1>{board.name}</h1>
              </Link>
            ))
          }

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (value) => dispatch(addWishBoard(value))
  }
}

function mapStateToProps(state){
  return {
    boards : state.boards
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateWish) ;
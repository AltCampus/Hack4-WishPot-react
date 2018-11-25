import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addWishItem } from './../actions/action'

class Wishes extends Component {
    state = {
        items: ''
    }

    handleChange = (e) => {
        this.setState({
            items: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.additems(this.state.items, this.props.id)
    }

  render() {
      const { wishTitle, id } = this.props;
        const board = wishTitle[id]
        console.log(id, wishTitle[id])
    return (
      <div>
        <h1>{board.name}</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder="create list"></input>
        </form>
      </div>
      
    )
  }
}

const mapStateToProps =(state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        wishTitle: state.boards, 
        id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        additems: (value) => dispatch(addWishItem(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Wishes)
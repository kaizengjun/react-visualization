import React, { Component } from 'react'

class Bubble extends Component {
  render () {
    return (
      <div>
        <p>Bubble</p>
        <p>{this.props.arr}</p>
      </div>
    )
  }
}

export default Bubble
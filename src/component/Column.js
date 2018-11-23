import React, { Component } from 'react'

class Column extends Component {
  render () {
    const item = this.props.item
    const style = {
      height: item.val * 7 +'px',
      backgroundColor: item.color
    }
    return (
      <div className='colum' style={style}>
        <span className="value">{item.val}</span>
      </div>
    )
  }
}

export default Column
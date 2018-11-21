import React, { Component } from 'react'

class Bubble extends Component {
  constructor (props) {
    super(props)
    this.state = { data: props.arr}
  }

  handleClick () {
    console.log('Click')
  }

  render () {
    return (
      <div>
        <p>Bubble</p>
        <div className='wrapper'>
          {this.state.data.map(num => 
            <div key={num} className='colum' style={{height: num * 7 +'px'}}>
              <span className="value">{num}</span>
            </div>
          )}
        </div>
        <button onClick={this.handleClick}>Start</button>
      </div>
    )
  }
}

export default Bubble
import React, { Component } from 'react'

class Bubble extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.arr,
      sortStateArr: []
    }
  }

  startSort () {
    const arr = this.state.data
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
        this.state.sortStateArr.push([...arr])
      }
    }
    let count = 0
    while (count < this.state.sortStateArr.length) {
      this.handleDelay(count)
      count++
    }
  }

  handleDelay (count) {
    setTimeout(() => {
      this.setState({
        data: this.state.sortStateArr[count]
      })
    }, 1000 * count)
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
        <button onClick={this.startSort.bind(this)}>Start</button>
      </div>
    )
  }
}

export default Bubble
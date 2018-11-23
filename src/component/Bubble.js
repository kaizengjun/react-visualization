import React, { Component } from 'react'
import Column from './Column'
import _ from 'lodash'

const TIMEOUT = 100

class Bubble extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.arr.map(item => {
        return {
          val: item,
          color: 'cadetblue'
        }
      }),
      sortStateArr: []
    }
  }

  startSort () {
    const arr = this.state.data
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        const copy = _.cloneDeep(arr)
        const copy2 = _.cloneDeep(arr)
        copy[j].color = 'yellow'
        copy[j + 1].color = 'yellow'
        this.state.sortStateArr.push(_.cloneDeep(copy))
        if (arr[j].val > arr[j + 1].val) {
          copy2[j].color = 'red'
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        } else {
          copy2[j + 1].color = 'red'
        }
        this.state.sortStateArr.push(_.cloneDeep(copy2))
        this.state.sortStateArr.push(_.cloneDeep(arr))
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
    }, TIMEOUT * count)
  }

  reset () {
    this.setState({
      data: this.props.arr.map(item => {
        return {
          val: item,
          color: 'cadetblue'
        }
      }),
      sortStateArr: []
    })
  }

  render () {
    return (
      <div>
        <p>Bubble</p>
        <div className='wrapper'>
          {this.state.data.map(item =>
            <Column key={item.val} item={item} />
          )}
        </div>
        <button onClick={this.startSort.bind(this)}>Start</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    )
  }
}

export default Bubble
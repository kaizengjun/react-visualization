import React, { Component } from 'react';
import './App.css';
import Bubble from './component/Bubble'

class App extends Component {
  render() {
    const sortArr = [20, 3, 9, 44, 12]
    return (
      <div className="App">
        <Bubble arr={sortArr}/>
      </div>
    );
  }
}

export default App;

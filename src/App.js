import React, { Component } from 'react';
import './App.css';
import Hello from './component/Hello'
import Bubble from './component/Bubble'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
        <Bubble/>
      </div>
    );
  }
}

export default App;

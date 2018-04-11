import React, { Component } from 'react';
import logo from './tic-tac-toe.svg';
import './App.css';
import GameGrid from './GameGrid.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reactoe</h1>
        </header>
        <GameGrid />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './GameGrid.css';
import logo from './tic-tac-toe.svg';
import Tile from './Tile'

class GameGrid extends Component {


  render() {
    return (
      <div className="GridPanel">
      <div id="showgrid">
        <div className ="row">
          <Tile id='1' />
          <Tile id='2' />
          <Tile id='3' />
        </div>
        <div class="row">
          <Tile id= '4' />
          <Tile id= '5' />
          <Tile id= '6' />
        </div>
        <div class="row">
          <Tile id= '7' />
          <Tile id= '8' />
          <Tile id= '9' />
        </div>
        </div>
      </div>
    );
  }
}

export default GameGrid;

import React, { Component } from 'react';
import './GameGrid.css';

class GameGrid extends Component {
  render() {
    return (
      <div className="GridPanel">
      <div id="showgrid">
        <div class="row">
          <button class="column" id="1x1">1</button>
          <button class="column" id="1x2">2</button>
          <button class="column" id="1x3">3</button>
        </div>
        <div class="row">
          <button class="column" id="2x1">4</button>
          <button class="column" id="2x2">5</button>
          <button class="column" id="2x3">6</button>
        </div>
        <div class="row">
          <button class="column" id="3x1">7</button>
          <button class="column" id="3x2">8</button>
          <button class="column" id="3x3">9</button>
        </div>
        </div>
      </div>
    );
  }
}

export default GameGrid;

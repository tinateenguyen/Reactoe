import React, { Component } from 'react';

class Tile extends Component {
  squareClicked(){
    console.log(this.state.id)
    return document.getElementById('${this.state.id}').innerHTML = "<h5>X<h5>"

    // return document.getElementById('btn').innerHTML = "Hey There!"
  }

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id
    }
  }

  render() {
    return (
      <button onClick={this.squareClicked.bind(this)} className="column" id = '${this.state.id}'>{this.state.id}</button>
    )
  }
}

export default Tile;

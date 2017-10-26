import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MapButton extends Component {

  selectToDisplay(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
  }
  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={this.selectToDisplay.bind(this)}>Ver {this.props.buttons}</button>
      </div>
    );
  }

}

export default MapButton;

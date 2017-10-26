import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ButtonHolder from '../Navigation/ButtonHolder.jsx';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      buttons :
      [
        'concesiones',
        'entradas',
        'edificios',
      ]
    };
  }
  mapOnCanvas(imgWidth, imgHeigth){
    window.onload = function(imgWidth, imgHeigth) {
      var c=document.getElementById("myCanvas");
      const ctx=c.getContext("2d");
      var img=document.getElementById("uniandesMap");
      ctx.drawImage(img,200, 300);
    };
  }

  render() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    return (
      <div>
        <ButtonHolder buttons={this.state.buttons}/>
        <img
          id = "uniandesMap"
          visibility= "hidden"
          height = "0"
          width = "0"
          src = '/uniandesMap1400.png'
          alt = "Uniandes Map" />
          <canvas
            id = "myCanvas"
            height = {windowHeight}
            width = {windowWidth}/>
            {this.mapOnCanvas(windowWidth,windowHeight)}
          </div>
        );
      }

    }

    export default Map;

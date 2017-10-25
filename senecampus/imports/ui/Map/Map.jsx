import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Map extends Component {

  mapOnCanvas(){
    window.onload = function() {
      var c=document.getElementById("myCanvas");
      const ctx=c.getContext("2d");
      var img=document.getElementById("uniandesMap");
      ctx.drawImage(img,0,0);
    };
  }
  render() {

    return (
      <div>
        <img
          id = "uniandesMap"
          visibility= "hidden"
          height = "0"
          width = "0"
          src = '/uniandesMap1400.png'
          alt = "Uniandes Map" />
          <canvas
            id = "myCanvas"
            height = "1500"
            width = "1570"/>
          {this.mapOnCanvas()}
        </div>
      );
    }

  }

  export default Map;

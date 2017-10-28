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
        {
          "nombre":"concesiones",
          "descripcion":"Los expendios de comida dentro de los edificios",
          "locaciones":
          [
            {
              "edificio":"ML",
              "nombre":"Gratto",
              "posicion":"Quinto piso, oriente",
              "descripcion":"cafeteria",
              "locx": 225,
              "locy": 615
            },
            {
              "edificio":"ML",
              "nombre":"AmiGo",
              "posicion":"Quinto piso, occidente",
              "descripcion":"Tienda",
              "locx": 225,
              "locy": 646
            }
          ]
        },
        {
          "nombre":"microondas",
          "descripcion":"microondas publicos, gratis para la comunidad",
          "locaciones":
          [
            {
              "edificio":"ML",
              "nombre":"Gratto",
              "posicion":"Quinto piso, oriente",
              "descripcion":"cafeteria",
              "locx": 165,
              "locy": 495
            }
          ]
        },

      ]
    };
  }

  mapOnCanvas(imgWidth, imgHeigth){
    let imgW= imgWidth*0.9;
    let imgH= imgHeigth*0.9;
    window.onload = function() {
      var c=document.getElementById("myCanvas");
      const ctx=c.getContext("2d");
      var img=document.getElementById("uniandesMap");
      ctx.drawImage(img,0,0,imgH,imgW);
    };
  }

  render() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
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
            height = {windowHeight*1.7}
            width = {windowWidth}/>
            {this.mapOnCanvas(windowHeight*1.7,windowWidth)}
            <ButtonHolder buttons={this.state.buttons}/>
          </div>
        );
      }

    }

    export default Map;

import React, { Component } from 'react';

class PlaceDescription extends Component {

  drawPin(pin){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.translate(pin.x,pin.y);
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.bezierCurveTo(2,-10,-20,-25,0,-30);
    ctx.bezierCurveTo(20,-25,-2,-10,0,0);
    ctx.fillStyle="#FF0000";
    ctx.fill();
    ctx.strokeStyle="black";
    ctx.lineWidth=1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,-21,3,0,Math.PI*2);
    ctx.closePath();
    ctx.fillStyle="black";
    ctx.fill();

    ctx.restore();
}
  render() {
    var pin= {
      x:(this.props.locaciones.locx*window.innerWidth/1400),
      y:(this.props.locaciones.locy*window.innerHeight/1400)};
    return (
      <div>
      {this.drawPin(pin)}
        <h2>{this.props.locaciones.descripcion}</h2>
        <h3>{this.props.locaciones.nombre}</h3>
        <h4>{this.props.locaciones.edificio}</h4>
        <h4>{this.props.locaciones.posicion}</h4>
      </div>
    );
  }

}

export default PlaceDescription;

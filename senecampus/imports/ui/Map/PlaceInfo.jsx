import React, { Component } from 'react';

import PlaceDescription from './PlaceDescription.jsx';
class PlaceInfo extends Component {
  renderPlaces(){
    return(
      this.props.info.locaciones.map((b)=>{
        return <PlaceDescription key={b.key} locaciones={b}/>
      })
    );
  }
  render() {
    return (
      <div>
        <h2>{this.props.info.nombre}</h2>
        <p>{this.props.info.descripcion}</p>
        {this.renderPlaces()}
      </div>
    );
  }

}

export default PlaceInfo;

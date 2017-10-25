import React, { Component } from 'react';

// import uniandesMap from '../../public/uniandesMap.png';

class Map extends Component {

  render() {
    return (
      <div>
        <img
         id = "uniandesMap1"
         height = "400"
         width = "400"
        src = '/uniandesMap.png'
         alt = "Goofy pic of me" />
        <canvas id = "drawing"
          height = "400"
          width = "400">
        <p>Canvas not supported</p>
        </canvas>      </div>
    );
  }

}

export default Map;

import React, { Component } from 'react';

class MapButton extends Component {

  render() {
    return (
      <div>
        <button>Ver {this.props.buttons}</button>
      </div>
    );
  }

}

export default MapButton;

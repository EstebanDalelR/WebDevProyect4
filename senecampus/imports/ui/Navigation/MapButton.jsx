import React, { Component } from 'react';

class MapButton extends Component {

  render() {
    return (
      <div>
        <button>{this.props.buttons}</button>
      </div>
    );
  }

}

export default MapButton;

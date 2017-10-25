import React, { Component } from 'react';

import MapButton from './MapButton.jsx';
class ButtonHolder extends Component {

  renderButtons(){
    return(
      this.props.buttons.map((b)=>{
        return <MapButton key={b.key} buttons={b}/>
      })
    );
  }
  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    );
  }

}

export default ButtonHolder;

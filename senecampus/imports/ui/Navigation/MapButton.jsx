import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import PlaceInfo from '../Map/PlaceInfo.jsx';
class MapButton extends Component {
  constructor(props) {
    super(props);
    this.state =
    {buttonClicked :false}
    ;
  }

  selectToDisplay(){
    this.setState({buttonClicked:true});
  }

  render() {
    return (
      <div>
        <button
          className='btn btn-primary'
          onClick={this.selectToDisplay.bind(this)}>
          Ver {this.props.buttons.nombre}
        </button>
        {(this.state.buttonClicked)?
				  <PlaceInfo info={this.props.buttons}/>:<div></div>
				}
      </div>
    );
  }

}

export default MapButton;

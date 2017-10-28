import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Buttons } from '../api/buttons.js';
import Navbar from './Navigation/Navbar.jsx';
import Map from './Map/Map.jsx';
import Report from './Reports/Reports.jsx';
import '../api/buttons.js'

class App extends Component {
   renderTasks() {
    return this.props.buttons.map((button) => (
       <Task key={buttons._id} button={button} />
     ));
   }
  render() {
    return (
      <div>
        <Navbar/>
        <Map buttons={this.props.buttons}/>
        <Report/>
      </div>
    );
  }

}

// App.propTypes = {
//   buttons: PropTypes.isRequired,
// };


export default createContainer(() => {

  return {
    buttons: Buttons.find({}).fetch(),
  };

}, App);

import React, { Component } from 'react';

import Navbar from './Navigation/Navbar.jsx';
import Map from './Map/Map.jsx';
import Report from './Reports/Reports.jsx';
class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Map/>
        <Report/>
      </div>
    );
  }

}

export default App;

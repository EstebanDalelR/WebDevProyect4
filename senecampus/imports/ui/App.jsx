import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Buttons } from '../api/buttons.js';
import { Reports } from '../api/reports.js';
import Navbar from './Navigation/Navbar.jsx';
import Map from './Map/Map.jsx';
import ReportsUI from './Reports/ReportsUI.jsx';
import SingleReport from './Reports/SingleReport.jsx';

class App extends Component {
   renderTasks() {
    return this.props.buttons.map((button) => (
       <Task key={buttons._id} button={button} />
     ));
   }

   renderReports(){
    if(this.props.reports){
      return(
          this.props.reports.map((t, i)=>{
            return <SingleReport key={i} report={t}></SingleReport>
          })
        );
    }else{
      return (<h2>No hay reportes para mostrar! el Campus está a salvo!</h2>);
    }
   }

  render() {
    return (
      <div>
        <Navbar/>
        <Map buttons={this.props.buttons}/>
        <div className="reports">
          <ReportsUI/>
          <div>
            {this.renderReports()}
          </div>
        </div>
      </div>
    );
  }

}

// App.propTypes = {
//   buttons: PropTypes.isRequired,
// };


export default createContainer(() => {
  Meteor.subscribe('buttons');
  Meteor.subscribe('reports');

  return {
    buttons: Buttons.find({}, { sort : { votes : -1 }}).fetch(),
    reports: Reports.find({}, { sort: { postDate: -1 }}).fetch()
  };
}, App);

import React, { Component } from 'react';

class SingleReport extends Component {

      constructor(props){
            super(props);
      }

      render() {
            return (
                  <div>
                        <h4>{this.props.report.title}</h4>
                        <h6>Por: {this.props.report.posterName}</h6>
                        <h6>{this.props.report.postDate}</h6>
                        <p>En el edificio: {this.props.report.building}</p>
                        <p>Esto pasó: {this.props.report.description}</p>
                  </div>
            );
      }

}

export default SingleReport;

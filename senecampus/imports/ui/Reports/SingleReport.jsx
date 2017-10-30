import React, { Component } from 'react';

class SingleReport extends Component {

      constructor(props){
            super(props);
      }

      render() {
            return (
                  <div className="container post">
                        <h4>{this.props.report.title}</h4>
                        <h6>Por: {this.props.report.posterName}</h6>
                        <h6>Fecha: {new Date(this.props.report.postDate).toLocaleString()}</h6>
                        <row className="row">
                              <p className="col-sm-12 col-md-4">En el edificio: <bold>{this.props.report.building}</bold></p>
                              <p className="col-sm-12 col-md-8">Ocurrió esto: {this.props.report.description}</p>
                        </row>
                  </div>
            );
      }

}

export default SingleReport;

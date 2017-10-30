import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Reports } from '../../api/reports.js';

class ReportsUI extends Component {

  handleSubmit(event){

      event.preventDefault();

      var title = ReactDOM.findDOMNode(this.refs.title).value.trim();
      var type =  ReactDOM.findDOMNode(this.refs.type).value.trim();
      var posterName = (Meteor.user())?Meteor.user().username:'Anónimo';
      var postDate = Date.now(); 
      var building = ReactDOM.findDOMNode(this.refs.building).value.trim();
      var description = ReactDOM.findDOMNode(this.refs.description).value.trim();

      Meteor.call('reports.postReport',{
            title,
            type,
            posterName,
            postDate,
            building,
            description
      },(err, res)=>{
            if(err){
                  console.log(err);
            }else{
                  //success
            }
      });
  }

  render() {
    return (
      <div>
            <form>
                  <div className="container form">
                        <div className="row">
                              <h3>Reporte de problemas</h3>
                              <h5>¿Encontraste un problema? ¡Reportalo acá!:</h5>
                        </div>
                        <div className="row">
                              <label for="title" className="col-sm-12 col-md-3">Título</label>
                              <input className="col-sm-12 col-md-8" type="text" ref="title" placeholder="Título del reporte"/>
                        </div>
                        <div className="row">
                              <label for="type" className="col-sm-12 col-md-3">Tipo de daño</label>
                              <input className="col-sm-12 col-md-8" type="text" ref="type" placeholder="Tipo de daño encontrado"/>
                        </div>
                        <div className="row">
                              <label for="building" className="col-sm-12 col-md-3">Edificio</label>
                              <input className="col-sm-12 col-md-8"
                              list="edificios"
                              ref="building"
                              placeholder="Edificio"
                              />
                              <datalist id="edificios">
                                    <option value='A'/>
                                    <option value='Au'/>
                                    <option value='Au2'/>
                                    <option value='Au03'/>
                                    <option value='Au04'/>
                                    <option value='Au05'/>
                                    <option value='Au06'/>
                                    <option value='Au07'/>
                                    <option value='B'/>
                                    <option value='C'/>
                                    <option value='Ch'/>
                                    <option value='D'/>
                                    <option value='E'/>
                                    <option value='Es'/>
                                    <option value='F'/>
                                    <option value='G'/>
                                    <option value='Ga'/>
                                    <option value='H'/>
                                    <option value='I'/>
                                    <option value='J'/>
                                    <option value='K'/>
                                    <option value='K1'/>
                                    <option value='K2'/>
                                    <option value='L'/>
                                    <option value='La'/>
                                    <option value='LL'/>
                                    <option value='M'/>
                                    <option value='M1'/>
                                    <option value='Mj'/>
                                    <option value='ML'/>
                                    <option value='N'/>
                                    <option value='Ña'/>
                                    <option value='Ñb'/>
                                    <option value='Ñd'/>
                                    <option value='Ñe'/>
                                    <option value='Ñf'/>
                                    <option value='Ñg'/>
                                    <option value='Ñh'/>
                                    <option value='Ñi'/>
                                    <option value='Ñj'/>
                                    <option value='Ñk'/>
                                    <option value='Ñl'/>
                                    <option value='Ño'/>
                                    <option value='Ñv'/>
                                    <option value='O'/>
                                    <option value='P'/>
                                    <option value='P1'/>
                                    <option value='Pu'/>
                                    <option value='Es'/>
                                    <option value='Q'/>
                                    <option value='Cp'/>
                                    <option value='R'/>
                                    <option value='Rga'/>
                                    <option value='Rgb'/>
                                    <option value='Rgc'/>
                                    <option value='S'/>
                                    <option value='Sd'/>
                                    <option value='S1'/>
                                    <option value='T'/>
                                    <option value='Tm'/>
                                    <option value='Tr'/>
                                    <option value='Tx'/>
                                    <option value='U'/>
                                    <option value='V'/>
                                    <option value='X'/>
                                    <option value='Y'/>
                                    <option value='Z'/>
                              </datalist>
                        </div>
                        <div className="row">
                              <label className="col-sm-12 col-md-3" for="description">Descripción</label>
                              <input className="col-sm-12 col-md-8" type="text" ref="description" placeholder="Reporte"/> 
                        </div>
                        <div className="row">
                              <input className="button" type="submit" onClick={this.handleSubmit.bind(this)} value="Enviar Reporte"/>
                        </div>
                  </div>
            </form>
      </div>
    );
  }

}

export default ReportsUI;

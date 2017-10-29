import React, { Component } from 'react';

class Reports extends Component {

  handleSubmit(){

  }
  render() {
    return (
      <div>
      <form>
      <h4>¿Encontraste un problema? ¡Reportalo acá!:</h4>
      <input
      list="edificios"
      ref="reportRext"
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
      </form>
      <input type="text" placeholder="Reporte"/>
      <input type="submit" value="Enviar"/>
      </div>
    );
  }

}

export default Reports;

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBarLogged from '../components/NavBarLogged';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
// import Select from 'react-select';

var date = new Date().toISOString();
console.log(date);
// status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar
export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  selectWindow(windows){
    switch (windows) {
      case 1:
         window.location.href = "http://localhost:3000/DoctorForm";
        break;
      case 2:
         window.location.href = "http://localhost:3000/ScheduleTable";
        break;
      case 3:
         window.location.href = "http://localhost:3000/DoctorStatus";
        break;
      case 4:
         window.location.href = "http://localhost:3000/updateschedule";


    }
  }
  render(){
    return(
      <div>
      <NavBarLogged></NavBarLogged>
        <div className="top-space espaco espaco-acima">
          <div className="form-style-5">
              <h3>Dashboard</h3>
              <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => this.selectWindow(1)}> Cadastrar médico</button>
              <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => this.selectWindow(2)}> Visualizar tabela</button>
              <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => this.selectWindow(3)}> Alterar status</button>
              <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => this.selectWindow(4)}> Atualizar horário</button>
            </div>
        </div>
        <Footer ></Footer>
      </div>


    );

  }
}

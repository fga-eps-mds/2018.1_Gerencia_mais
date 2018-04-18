import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import FormErrors from '../components/FormErrors';
import {Carousel} from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

var date = new Date("Dec 25,1995");
console.log(date);
export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      registration: '',
      start: '',
      time_start:'',
      end: '',
      time_end:'',
      CPF: '',
      status: null,
      description: '',
      hospital:'',
      creator: '1',
      rule: null,
      calendar: '1',
    }
     this.onChange = this.onChange.bind(this);
     this.onChange2 = this.onChange2.bind(this);
  }
  onChange(e) {
    const title = e.target.title;
    const value = e.target.value === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[title] : value});
}

  onChange2(e){
    const title = e.target.title;
    this.setState(
      {[title]: e.target.checked}
    )
  }
  handleSubmit = e => {
    e.preventDefault();
    const {title , registration, start, end, CPF, status, hospital, calendar, creator} = this.state;
    const lead = {title , registration, start, end, CPF, status, hospital, calendar,creator};
    const conf = {
      method: "POST",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('http://localhost:8000/schedule/api-event/', conf).then(response => console.log(response));
}

  render(){
      let statusmensager;
      if(this.state.status === true){
       statusmensager=(<h1>True</h1>)
      }
      else if (this.state.status === false)
      {
      statusmensager = ( <h1>False</h1>)
      }
    return(
      <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
        <div classtitle="top-space espaco espaco-acima">
          <div class="form-style-5">
            <form>
              <h3>Cadastro de horário de médicos</h3>
              <fieldset>

              <legend><span class="number">1</span> Nome</legend>
              <input id="titleID" type="text" title="title" value={this.state.title} onChange = {this.onChange} placeholder="Digite o nome aqui" />
              <h1>{this.state.title}</h1>

              <legend><span class="number">2</span> Numero de Identificação</legend>
              <input id="idID" type="text" title="registration" value={this.state.registration} onChange = {this.onChange} placeholder="Digite o numero aqui"/>
              <h1>{this.state.registration}</h1>

              <legend><span class="number">3</span>CPF</legend>
              <input id="CPFID" type="text" title="CPF" value={this.state.CPF} onChange = {this.onChange} placeholder="Digite o CPF"/>
              <h1>{this.state.CPF}</h1>

              <legend><span class="number">4</span>Hospital</legend>
              <input id="hospitalID" type="text" title="hospital" value={this.state.hospital} onChange = {this.onChange} placeholder="Digite o Hospital"/>
              <h1>{this.state.hospital}</h1>

             <legend><span class="number">5</span>Status</legend>
              <input id="statusID" type="checkbox" title="status" value={this.state.status} onChange = {this.onChange2} placeholder="Disponível"/>
              {statusmensager}

              <legend><span class="number">6</span>Data e Hora de Entrada</legend>
              <input id="edID" type="date" title="start" value = {this.state.start} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
              <input id="edID" type="time" title="time_start" value = {this.state.time_start} onChange = {this.onChange}/>
              <h1>{this.state.start}</h1>
              <h1>{this.state.time_start}</h1>

              <legend><span class="number">7</span>Data e Hora de Saída</legend>
                <input id="edID" type="date" title="end" value = {this.state.end} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                <input id="edID" type="time" title="time_end" value = {this.state.time_end} onChange = {this.onChange}/>
                  <h1>{this.state.end}</h1>
                  <h1>{this.state.time_end}</h1>
              </fieldset>
              <input type="submit" value="Apply" onClick={this.handleSubmit}/>
            </form>
            </div>
        </div>
        <Footer ></Footer>
      </div>


    );

  }
}

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
import { Redirect } from 'react-router-dom';

var date = new Date().toISOString();
console.log(date);
// status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar
export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null,
      color_event:"#ff0000",
      title: '',
      registration: '',
      start: date ,
      time_start:'',
      end: date,
      time_end:'',
      CPF: '',
      description:'',
      created_on:date,
      updated_on:date,
      end_recurring_period:date,
      status: true,
      description: '',
      hospital:'',
      creator: '1',
      rule: null,
      calendar:'1',
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
    const {id,color_event,start, end, title, hospital, registration, CPF, status, description, created_on, updated_on, end_recurring_period, creator, rule, calendar} = this.state;
    console.log({id,color_event,start, end, title, hospital, registration, CPF, status, description, created_on, updated_on, end_recurring_period, creator, rule, calendar} );
    const lead = {id,color_event,start, end, title, hospital, registration, CPF, status, description, created_on, updated_on, end_recurring_period, creator, rule, calendar} ;
    const temp = JSON.stringify(lead)
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('http://localhost:8000/schedule/gp_list/', conf).then(response => console.log(response));
}


  render(){
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

              <legend><span class="number">2</span> Numero de Identificação</legend>
              <input id="idID" type="text" title="registration" value={this.state.registration} onChange = {this.onChange} placeholder="Digite o numero aqui"/>

              <legend><span class="number">3</span>CPF</legend>
              <input id="CPFID" type="text" title="CPF" value={this.state.CPF} onChange = {this.onChange} placeholder="Digite o CPF"/>

              <legend><span class="number">4</span>Hospital</legend>
              <input id="hospitalID" type="text" title="hospital" value={this.state.hospital} onChange = {this.onChange} placeholder="Digite o Hospital"/>

             <legend><span class="number">5</span>Status</legend>
              <input id="statusID" type="checkbox" title="status" value={this.state.status} onChange = {this.onChange2} placeholder="Disponível"/>

              <legend><span class="number">6</span>Data e Hora de Entrada</legend>
              <input id="edID" type="date" title="start" value = {this.state.start} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
              <input id="edID" type="time" title="time_start" value = {this.state.time_start} onChange = {this.onChange}/>

              <legend><span class="number">7</span>Data e Hora de Saída</legend>
                <input id="edID" type="date" title="end" value = {this.state.end} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                <input id="edID" type="time" title="time_end" value = {this.state.time_end} onChange = {this.onChange}/>
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

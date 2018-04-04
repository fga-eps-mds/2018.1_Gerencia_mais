import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import FormErrors from '../components/FormErrors'
import DoctorAPI from '../api.js'
import {Carousel} from 'react-bootstrap';


const DoctorsAPI = {
  doctors: [
    {id:0, name: "Fabio"},
    {id:1, name: "Joao"},
    {id:10, name: "Alonso"},
    {id:11, name: "Sara"},
    {id:100, name: "Vinicius"},
  ],
  all: function() {return this.doctors},
  get: function(id){
    const isDoctor = p => p.number === id
    return this.doctors.find(isDoctor)
  }
}

export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      entry_date: '',
      entry_time: '',
      departure_date: '',
      departure_time: '',
      formErrors: {name: '', id: '', entry_date: '', entry_time: '', departure_date: '', departure_time: ''},
      name_valid: false,
      id_valid: false,
      entry_date_valid: false,
      entry_time_valid: false,
      departure_date_valid: false,
      departure_time_valid: false,
      form_valid: false,
      registered_names: ['Paulo','Pablo','Paula','Pedro'],
      registered_ids: ['1','2','3','4','5'],
    }
  }


  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }



  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let name_valid = this.state.name_valid;
    let id_valid = this.state.id_valid;
    let registered_names = this.state.registered_names;
    let registered_ids = this.state.registered_ids;

    switch(fieldName) {
      case 'name':
      // name_valid = /\d/.test(value)
        for(var i in registered_names){
          if(registered_names[i] == value){
            name_valid = true;
            break;
          }else {
            name_valid = false;
          }
        }
        fieldValidationErrors.name = name_valid ? '' : 'Nome nao encontrado: ' ;

        this.setState({formErrors: fieldValidationErrors,
                        name_valid: name_valid,
                      }, this.validateForm);
        break;

        case 'id':
          for(var i in registered_ids){
            if(registered_ids[i] == value){
              id_valid = true;
              break;
            }else {
              id_valid = false;
            }
          }
          fieldValidationErrors.id = id_valid ? '' : 'Id nao encontrado: ' ;

    this.setState({formErrors: fieldValidationErrors,
                    id_valid: id_valid,
                  }, this.validateForm);
  }
  console.log(name_valid);
  }

  validateForm() {
    this.setState({formValid: this.state.name_valid});
  }

  sendInfo(){
    console.log('entrou');
    var name = document.getElementById("nameID").value;
    var id = document.getElementById("idID").value;
    var entry_date = document.getElementById("edID").value;
    var entry_time = document.getElementById("etID").value;
    var departure_date = document.getElementById("ddID").value;
    var departure_time = document.getElementById("dtID").value;
    var info = new Array();
    info.push(name);
    info.push(id);
    info.push(entry_date);
    info.push(entry_time);
    info.push(departure_date);
    info.push(departure_time);
    console.log(info);
    var dictstring = JSON.stringify(info);
    console.log(dictstring);
    var fs = require('fs');
    fs.writeFile("thing.json", dictstring);
  }


  render(){
    return(
      <div>
      <NavBar></NavBar>
        <div className="top-space espaco espaco-acima">
          <div class="form-style-5">
            <form>

              <h3>Cadastro de horário de médicos</h3>
              <p>{DoctorsAPI.doctors.name}</p>
              <fieldset>
              <legend><span class="number">1</span> Nome</legend>
              <input id="nameID" type="text" name="name" value={this.state.name} placeholder="Digite o nome aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">2</span> Numero de Identificação</legend>
              <input id="idID" type="number" name="id" value={this.state.id} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">3</span>Data de Entrada</legend>
              <input id="edID" type="date" name="entry_date" value={this.state.entry_date}
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">4</span>Horário de Entrada</legend>
              <input id="etID" type="time" name="entry_time" value={this.state.entry_time} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">3</span>Data de Saída</legend>
              <input id="ddID" type="date" name="departure_date" value={this.state.departure_date}
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">5</span>Horário de Saída</legend>
              <input id="dtID" type="time" name="departure_time" value={this.state.departure_time} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><FormErrors formErrors={this.state.formErrors} /></legend>
              </fieldset>
              <input type="submit" value="Apply"
                onClick={this.sendInfo}/>
            </form>
            </div>
        </div>
        <Footer ></Footer>
      </div>


    );

  }
}

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import FormErrors from '../components/FormErrors'
import DoctorAPI from '../api.js'
import {Carousel} from 'react-bootstrap';


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
      api: [
        {reg_name: 'Paulo', reg_ids: '1', status:true},
        {reg_name: 'Sabino', reg_ids: '2', status:true},
        {reg_name: 'Marcos', reg_ids: '3', status:true},
        {reg_name: 'Valquiria', reg_ids: '4', status:true},
      ],
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
    // let entry_date_ =  this.state.entry_date;
    // let departure_date_valid = this.state.departure_date_valid;
    let name = this.state.name;
    let id = this.state.id;
    let api = this.state.api;
    switch(fieldName) {
      case 'name':
        for(var nn = 0; nn < api.length; nn++){
          if(api[nn].reg_name.toLowerCase() == value.toLowerCase()){
            name_valid = true;
            break;
          }else {
            name_valid = false;
          }
        }
        if(id){
          if(name_valid == true){
            console.log(api[nn].reg_ids);
            console.log(id);
            if(api[nn].reg_ids != id){
              name_valid = false;
              id_valid = false;
              console.log('false');
            }
            else{
              name_valid = true;
              id_valid = true;
              console.log('true');
            }
          }
          fieldValidationErrors.id = id_valid ? '' : 'Erro: Id não correspondente' ;
        }
        fieldValidationErrors.name = name_valid ? '' : 'Erro: Nome não correspondente' ;
        this.setState({formErrors: fieldValidationErrors,
                        name_valid: name_valid,
                        id_valid: id_valid,
                      }, this.validateForm);
        break;

        case 'id':
          for(var nn = 0; nn < api.length;  nn++){
            if(api[nn].reg_ids == value){
              id_valid = true;
              break;
            }else {
              id_valid = false;
            }
          }
          if(name){
            if(id_valid == true){
              console.log(api[nn].reg_name);
              console.log(name);
              if(api[nn].reg_name.toLowerCase() != name.toLowerCase()){
                name_valid = false;
                id_valid = false;
                console.log('false');
              }
              else{
                name_valid = true;
                id_valid = true;
                console.log('true');
              }
               fieldValidationErrors.name = name_valid ? '' : 'Erro: Nome não correspondente' ;
            }
          }
          fieldValidationErrors.id = id_valid ? '' : 'Erro: Id não correspondente' ;
          this.setState({formErrors: fieldValidationErrors,
                          name_valid: name_valid,
                          id_valid: id_valid,
                        }, this.validateForm);
        break;

        // case 'departure_date':
        //   if(value > entry_date){
        //     departure_date_valid = true;
        //   }else{
        //     departure_date_valid = false;
        //   }
        //   fieldValidationErrors.id = id_valid ? '' : 'Erro: Data de saída menor que a data de entrada' ;
        //   this.setState({formErrors: fieldValidationErrors,
        //                   departure_date_valid: departure_date_valid,
        //                 }, this.validateForm);
      }
  }

  validateForm() {
    this.setState({formValid: this.state.name_valid});
  }

  sendInfo(){
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
    var dictstring = JSON.stringify(info);
    console.log(dictstring);
  }


  render(){
    return(
      <div>
      <NavBar></NavBar>
        <div className="top-space espaco espaco-acima">
          <div class="form-style-5">
            <form>
              <h3>Cadastro de horário de médicos</h3>
              <fieldset>
              <legend><span class="number">1</span> Nome</legend>
              <input id="nameID" type="text" name="name" value={this.state.name} placeholder="Digite o nome aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">2</span> Numero de Identificação</legend>
              <input id="idID" type="text" name="id" value={this.state.id} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">3</span>Data de Entrada</legend>
              <input id="edID" type="date" name="entry_date" value={this.state.entry_date}
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">4</span>Horário de Entrada</legend>
              <input id="etID" type="time" name="entry_time" value={this.state.entry_time} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">5</span>Data de Saída</legend>
              <input id="ddID" type="date" name="departure_date" value={this.state.departure_date}
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">6</span>Horário de Saída</legend>
              <input id="dtID" type="time" name="departure_time" value={this.state.departure_time} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><FormErrors formErrors={this.state.formErrors} /></legend>
              </fieldset>
              <input type="submit" value="Apply"
                disabled={!this.state.formValid}
                onClick={this.sendInfo}/>
            </form>
            </div>
        </div>
        <Footer ></Footer>
      </div>


    );

  }
}

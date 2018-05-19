import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import FormErrors from '../components/FormErrors'
import {Carousel} from 'react-bootstrap';




export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: '',
      new_entry_date: '',
      new_entry_time: '',
      new_departure_date: '',
      new_departure_time: '',
      formErrors: {name: '', id: '', new_entry_date: '', new_entry_time: '', new_departure_date: '', new_departure_time: ''},
      name_valid: false,
      id_valid: false,
      new_entry_date_valid: false,
      new_entry_time_valid: false,
      new_departure_date_valid: false,
      new_departure_time_valid: false,
      form_valid: false,
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

      }
  }

  validateForm() {
    this.setState({formValid: this.state.name_valid});
  }

  sendInfo(){
    var name = document.getElementById("nameID").value;
    var id = document.getElementById("idID").value;
    var new_entry_date = document.getElementById("edID").value;
    var new_entry_time = document.getElementById("etID").value;
    var new_departure_date = document.getElementById("ddID").value;
    var new_departure_time = document.getElementById("dtID").value;
    var info = new Array();
    info.push(name);
    info.push(id);
    info.push(new_entry_date);
    info.push(new_entry_time);
    info.push(new_departure_date);
    info.push(new_departure_time);
    var dictstring = JSON.stringify(info);
    console.log(dictstring);
  }


  render(){
    return(
      <div>
      <NavBar></NavBar>
      <div className="top-space espaco espaco-acima">
          <div className="form-style-5">
            <form>
              <h3>Atualização de horário de médicos</h3>
              <fieldset>
              <legend><span className="number">1</span> Nome: </legend>
              <legend><span className="number">2</span> Numero de Identificação: </legend>
              <legend><span className="number">3</span>Nova Data de Entrada</legend>
              <input id="edID" type="date" name="new_entry_date" value={this.state.new_entry_date}
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span className="number">4</span>Novo Horário de Entrada</legend>
              <input id="etID" type="time" name="new_entry_time" value={this.state.new_entry_time} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span className="number">5</span>Nova Data de Saída</legend>
              <input id="ddID" type="date" name="new_departure_date" value={this.state.new_departure_date}
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span className="number">6</span>Novo Horário de Saída</legend>
              <input id="dtID" type="time" name="new_departure_time" value={this.state.new_departure_time} placeholder="Digite o numero aqui"
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

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
//import FormErrors from '../components/FormErrors'
import {Carousel} from 'react-bootstrap';




export default class DoctorStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    }
  }
  async componentDidMount() {
      try {
        const res = await fetch('http://localhost:8000/schedule/api-event/?format=json');
        const todos = await res.json();
        this.setState({todos});
      } catch (e) {
        console.log(e);
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


  render(){
    return(
      <div>
      <NavBar></NavBar>
        <div className="top-space espaco espaco-acima">
          <div className="form-style-5">
            <form>
              <table>
                <thead>
                <tr>
                <th>Nome</th>
                <th>Hospital</th>
                <th>Matrícula</th>
                <th>CPF</th>
                <th>Descrição</th>
                </tr>
                </thead>
                {this.state.todos.map(item => (
                <tbody>
                <tr key={item.id} className="success">
                 <td>{item.title}</td>
                 <td>{item.hospital}</td>
                 <td>{item.registration}</td>
                 <td>{item.CPF}</td>
                 <td>{item.description}</td>
                </tr>
              </tbody>
              ))}
            </table>
              <h3>Alterar Status do Médico</h3>
              <fieldset>
              <legend><span className="number">1</span> Nome</legend>
              <input id="nameID" type="text" name="name" value={this.state.name} placeholder="Digite o nome aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span className="number">2</span> Numero de Identificação</legend>
              <input id="idID" type="text" name="id" value={this.state.id} placeholder="Digite o numero aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span className="number">3</span> Status</legend>
              <input id="stsID" type="radio" name="status" value={this.state.status = true}
                onChange={(event) => this.handleUserInput(event)}/> Disponível <br></br>
              <input id="stnID" type="radio" name="status" value={this.state.status = false}
                  onChange={(event) => this.handleUserInput(event)}/> Indisponível <br></br>
                Descrição: (Opcional)
              <textarea name='comments' value={this.state.comments} rows="4" cols="50"
               onChange={(event) => this.handleUserInput(event)}
              >
              </textarea>
              <legend>  </legend>
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

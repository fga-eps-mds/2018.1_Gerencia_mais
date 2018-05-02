import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer'
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap'
export default class RegistrationAdmin extends Component{
  constructor(props){
    super(props);
    this.state = {
        name:'',
        adress: '',
        phone: '',
        password:'',
        password_confirm:'',
        key:'',
        keyword_valid:false,
        password_valid: false,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const title = e.target.title;
    const value = e.target.value;
    this.setState({[title] : value},
        () => { this.validateField(title, value) });

  }

  validateField(fieldName,value){

    switch (fieldName) {
      case 'password':
        if ( this.state.password === this.state.password_confirm )
        {
          this.state.password_valid.setState(true);
        }
        else{
          this.state.password_valid.setState(false);
        }
        break;

      case 'key':
        if(this.state.key === "E50E99E54C369B23DD04"){
          this.state.keyword_valid.setState(true);
        }
        else{
          this.state.keyword_valid.setState(false);
        }
        break;

      default:
       break;

    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const {name,adress,phone,password,key} = this.state;
    const lead = {name,adress,phone,password,key};
    const temp = JSON.stringify(lead)
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('http://localhost:8000/administrator/gp-admin-list/', conf).then(response => console.log(response));
}


render(){
  let message_password;
  let message_password_length;
  let message_key;
  let submit;
  if(this.state.key === "E50E99E54C369B23DD04"){
    message_key = (
      <div>
      </div>
    );
  }
  else{
    message_key = (
      <div>
        <p>Chave inválida!</p>
      </div>
    );
  }

  if(this.state.password.length < 8){
    message_password_length =(
      <div>
        <p>Sua senha tem que ter mais de 8 caracteres</p>
      </div>
    );
  }
  if(this.state.password === this.state.password_confirm){
    message_password =(
      <div>
      </div>
    );
  }
  else{
    message_password=(
      <div>
        <p>"As senhas não coincidem."</p>
      </div>
    );
  }
  const popoverLeft = (
  <Popover id="popover-positioned-left" title="">
    <h3>Cadastro efetuado com sucesso</h3>
  </Popover>
);
  if((this.state.password === this.state.password_confirm)  && (this.state.key === "E50E99E54C369B23DD04")){
    submit = (
      <div>
          <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
          <input type="submit" value="Apply" onClick={this.handleSubmit}/>
          </OverlayTrigger>
      </div>
    );
  }

  else {
    submit = (
    <div>
      <p>Campos inválidos</p>
      <input type="submit" value="Apply"/>
    </div>
  );
  }

  return(
    <div>
    <NavBar></NavBar>
    <SideBar></SideBar>
      <div classtitle="top-space espaco espaco-acima">
        <div className="form-style-5">
          <form>
            <h3>Cadastro de Administradores</h3>
            <fieldset>

            <legend><span className="number">1</span> Nome</legend>
            <input id="titleID" type="text" title="name" value={this.state.name} onChange = {this.onChange} placeholder="Digite o nome aqui" />

            <legend><span className="number">2</span> Endereço</legend>
            <input id="titleID" type="text" title="adress" value={this.state.adress} onChange = {this.onChange} placeholder="Digite o endereço aqui" />

            <legend><span className="number">3</span> Telefone</legend>
            <input id="titleID" type="text" title="phone" value={this.state.phone} onChange = {this.onChange} placeholder="Digite o telefone aqui" />

            <legend><span className="number">4</span> Senha</legend>
            <input classNameName="form-control" id="titleID" type="password" name="password" title="password" value={this.state.password} placeholder="Digite a senha aqui" onChange={this.onChange}/>
            {message_password_length}
            <legend><span className="number">5</span> Confirmar senha </legend>
            <input classNameName="form-control" id="titleID" type="password" name="password_confirm" title="password_confirm" value={this.state.password_confirm} placeholder="Digite a senha novamente" onChange={this.onChange}/>
            {message_password}

          <legend><span className="number">6</span> Chave de validação</legend>
            <input id="titleID" type="text" title="key" value={this.state.key} onChange = {this.onChange} placeholder="Digite a chave aqui" />
            {message_key}
            </fieldset>
            {submit}
          </form>
          </div>
      </div>
      <Footer ></Footer>
    </div>


  );

}

}

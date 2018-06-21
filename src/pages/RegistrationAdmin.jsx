import React, { Component } from "react";
import "../css/bootstrap.css";
import "../css/DoctorForm.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import {Popover} from "react-bootstrap";
import {OverlayTrigger} from "react-bootstrap"

export default class RegistrationAdmin extends Component{
  constructor(props){
    super(props);
    this.state = {
        username:"",
        adress: "",
        email: "",
        phone: "",
        password:"",
        password_confirm:"",
        key:"",
        keyword_valid:false,
        password_valid: false,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const title = e.target.title;
    const value = e.target.value;
    this.setState({[title] : value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {username,email,password} = this.state;
    const lead = {username,email,password};
    const temp = JSON.stringify(lead);
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch("https://gicsaude.herokuapp.com/user/api-user/create/", conf).then(response => (console.log(response)));
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
        <div className="top-space espaco espaco-acima background">
        <div className="form-style-5">
          <form>
            <h3>Cadastro de Administradores</h3>
            <fieldset>

            <legend><span className="number">1</span> Nome</legend>
            <input id="titleID" type="text" title="username" value={this.state.username} onChange = {this.onChange} placeholder="Digite o nome aqui" />

            <legend><span className="number">2</span> E-mail </legend>
            <input id="titleID" type="text" title="email" value={this.state.email} onChange = {this.onChange} placeholder="Digite seu e-mail aqui" />

            <legend><span className="number">5</span> Senha</legend>
            <input className="form-control" id="titleID" type="password" name="password" title="password" value={this.state.password} placeholder="Digite a senha aqui" onChange={this.onChange}/>
            {message_password_length}
            <legend><span className="number">6</span> Confirmar senha </legend>
            <input className="form-control" id="titleID" type="password" name="password_confirm" title="password_confirm" value={this.state.password_confirm} placeholder="Digite a senha novamente" onChange={this.onChange}/>
            {message_password}
          <legend><span className="number">7</span> Chave de validação</legend>
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

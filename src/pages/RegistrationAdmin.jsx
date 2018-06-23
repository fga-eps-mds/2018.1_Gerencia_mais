import React, {Component} from "react";
import "../css/bootstrap.css";
import "../css/DoctorForm.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import {Popover} from "react-bootstrap";
import {OverlayTrigger} from "react-bootstrap"

export default class RegistrationAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirm: "",
      key: "",
      user: [],
      list_user: [],
      list_email: [],
      keyword_valid: false,
      user_valid: true,
      password_valid: true,
      password_len: false,
      email_valid: true,
      form_valid:false,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const title = e.target.title;
    const value = e.target.value;
    this.setState({[title]: value});
  }

  createUserList(list) {
    var list_temp = [];
    var name;
    list.map(user => (name = user.username, list_temp.push(name)));
    return list_temp;
  }
  createEmailList(list) {
    var list_temp = [];
    var email;
    list.map(user => (email = user.email, list_temp.push(email)));
    return list_temp;
  }

  async componentDidMount() {
    try {
      const name = "https://gicsaude.herokuapp.com/user/api-user/";
      const res = await fetch(name);
      const user = await res.json();
      this.setState({user});
    } catch (e) {
      console.log(e);
    }
    this.setState({
      'list_user': this.createUserList(this.state.user)
    });
    this.setState({
      'list_email': this.createEmailList(this.state.user)
    });
    this.setState({'user': []});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {username, email, password} = this.state;
    const lead = {
      username,
      email,
      password
    };
    const temp = JSON.stringify(lead);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({"Content-Type": "application/json"})
    };
    fetch("https://gicsaude.herokuapp.com/user/api-user/create/", conf).then(response => (console.log(response)));
  }

  validateInformation() {
    // Validate to key
    if (this.state.key === "E50E99E54C369B23DD04") {
      this.setState({'keyword_valid': true});
    } else {
      this.setState({'keyword_valid': false});
    }
    // Validate to username
    var user = '';
    for (user in this.state.list_user) {
      if (this.state.list_user[user] === this.state.username) {
        this.setState({'user_valid': false});
        break;
      } else {
        this.setState({'user_valid': true});
      }
    }
    // Validate to email
    for (var email in this.state.list_email) {
      if (this.state.list_email[email] === this.state.email) {
        this.setState({'email_valid': false});
        break;
      } else {
        this.setState({'email_valid': true});
      }
    }
    // Validate len of password
    if (this.state.password.length < 8) {
      this.setState({'password_len': false});
    } else {
      this.setState({'password_len': true});
    }
    // Validate password and password_confirm
    if (this.state.password === this.state.password_confirm) {
      this.setState({'password_valid': true});
    } else {
      this.setState({'password_valid': false});
    }
    if(this.state.user_valid && this.state.email_valid && this.state.password_len && this.state.password_valid && this.state.keyword_valid){
      this.setState({'form_valid':true});
    }
    else{
      this.setState({'form_valid':false});
    }
  }

  messageError() {
    let message_password;
    let message_password_length;
    let message_key;
    let message_user;
    let message_email;
    let submit;
    let final_message;
    // Message key
    if (this.state.keyword_valid === false) {
      message_key = (<div className="alert alert-danger" role="alert">
        Chave de validação inválida.
      </div>);
    } else {
      message_key = (<div ></div>);
    }
    // Message password_len
    if (this.state.password_len === false) {
      message_password_length = (<div className="alert alert-danger" role="alert">
        Senha precisa ter 8 ou mais caracteres.
      </div>);
    } else {
      message_password_length = (<div></div>);
    }
    // Message password_confirm
    if (this.state.password_valid === false) {
      message_password = (<div className="alert alert-danger" role="alert">
        As senhas precisam coincidir.
      </div>);
    } else {
      message_password = (<div></div>);
    }
    // Message user
    if (this.state.user_valid === false) {
      message_user = (<div className="alert alert-danger" role="alert">
        Usuário já cadastrado.
      </div>);
    } else {
      message_user = (<div ></div>);
    }
    // Message email
    if (this.state.email_valid === false) {
      message_email = (<div className="alert alert-danger" role="alert">
        Email já cadastrado.
      </div>);
    } else {
      message_email = (<div ></div>);
    }

    const popoverLeft = (
    <Popover id="popover-positioned-left" title="">
    <h3>Cadastro efetuado com sucesso</h3>
    </Popover>
    );

    if (this.state.form_valid) {
      submit = (<div>
        <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
          <input type="submit" value="Concluído" onClick={this.handleSubmit}/>
        </OverlayTrigger>
      </div>);
    }
    else {
      submit = (
      <div>
        <a href='#' type="static" onClick={() => this.validateInformation()}> Concluido</a>
      </div>);
    }
    // Final Message
    final_message = (
    <div>
      {message_key}
      {message_password}
      {message_password_length}
      {message_email}
      {message_user}
      {submit}
    </div>
    );
    return final_message;
  }

  render() {
    let final_message = this.messageError();
    return (<div>
      <NavBar></NavBar>
      <div className="top-space espaco espaco-acima background">
        <div className="form-style-5">
          <form>
            <h3>Cadastro de Administradores</h3>
            <fieldset>

              <legend>
                <span className="number">1</span>
                Nome</legend>
              <input id="titleID" type="text" title="username" value={this.state.username} onChange={this.onChange} placeholder="Digite o nome aqui"/>

              <legend>
                <span className="number">2</span>
                E-mail
              </legend>
              <input id="titleID" type="text" title="email" value={this.state.email} onChange={this.onChange} placeholder="Digite seu e-mail aqui"/>

              <legend>
                <span className="number">5</span>
                Senha</legend>
              <input className="form-control" id="titleID" type="password" name="password" title="password" value={this.state.password} placeholder="Digite a senha aqui" onChange={this.onChange}/>

              <legend>
                <span className="number">6</span>
                Confirmar senha
              </legend>
              <input className="form-control" id="titleID" type="password" name="password_confirm" title="password_confirm" value={this.state.password_confirm} placeholder="Digite a senha novamente" onChange={this.onChange}/>

              <legend>
                <span className="number">7</span>
                Chave de validação</legend>
              <input id="titleID" type="text" title="key" value={this.state.key} onChange={this.onChange} placeholder="Digite a chave aqui"/>
              {final_message}
            </fieldset>
          </form>
        </div>
      </div>
      <Footer ></Footer>
    </div>);

  }

}

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {Popover} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap'




export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      todos:[],
      valid: false,
    }
  }

  async componentDidMount() {
      try {

        const res = await fetch('http://localhost:8000/administrator/api-admin/');
        const todos = await res.json();
        this.setState({todos});
        // console.log(todos);
      } catch (e) {
        console.log(e);
      }
    }
    setWindow(){
      console.log("foda-se");
      window.location.href = "http://localhost:3000/dashboard";
    }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  render(){
    var list_item = [];
    this.state.todos.map(item =>(
      list_item.push([item.name , item.password])
    ));
    let submit;
    let message_login;
    let valid;
    for(var i=0; i < list_item.length;i++){
      if(this.state.name === list_item[i][0] && this.state.password === list_item[i][1])
      {
        valid = true;
        message_login =(
          <div>
          </div>
        );
        break;
      }
      else{
        valid = false;
        message_login =(
          <div>
            <p>Nome ou senha incorretos.</p>
          </div>
        );
      }
    }
    const popoverLeft = (
    <Popover id="popover-positioned-left" title="">
      <h3>Login ou senha incorretos</h3>
    </Popover>
    );
    if(!valid){
      submit = (
        <div>
            <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
              <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => this.setWindow()}>Entrar</button>
            </OverlayTrigger>
        </div>
      );
    }

    else {
      submit = (
      <div>
        <button type="button" class="btn btn-success btn-lg btn-block" onClick={() => this.setWindow()}>Entrar</button>
      </div>
    );
    }
    return(
      <div>
      <NavBar></NavBar>
        <div className="top-space espaco espaco-acima">
          <div className="form-style-5">
            <form>
              <h3>Login</h3>
              <fieldset>
              <legend><span className="number">1</span> Username</legend>
              <input id="nameID" type="text" name="name" value={this.state.name} placeholder="Digite o username aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span className="number">2</span> Senha</legend>
              <input className="form-control" id="idID" type="password" name="password" value={this.state.password} placeholder="Digite a senha aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              {message_login}
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

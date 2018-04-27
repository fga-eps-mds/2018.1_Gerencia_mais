import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer'
import FormErrors from '../components/FormErrors'
import {Carousel} from 'react-bootstrap';




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

        const res = await fetch('http://localhost:8000/administrator/gp-admin-list/');
        const todos = await res.json();
        this.setState({todos});
        // console.log(todos);
      } catch (e) {
        console.log(e);
      }
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

    let message_login;
    for(var i=0; i < list_item.length;i++){
      if(this.state.name === list_item[i][0] && this.state.password === list_item[i][1])
      {
        message_login =(
          <div>
          </div>
        );
        break;
      }
      else{
        message_login =(
          <div>
            <p>Nome ou senha incorretos.</p>
          </div>
        );
      }
  }

    return(
      <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
        <div className="top-space espaco espaco-acima">
          <div class="form-style-5">
            <form>
              <h3>Login</h3>
              <fieldset>
              <legend><span class="number">1</span> Username</legend>
              <input id="nameID" type="text" name="name" value={this.state.name} placeholder="Digite o username aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              <legend><span class="number">2</span> Senha</legend>
              <input className="form-control" id="idID" type="password" name="password" value={this.state.password} placeholder="Digite a senha aqui"
                onChange={(event) => this.handleUserInput(event)}/>
              {message_login}
              </fieldset>
              <input type="submit" value="Entrar"
                onClick={this.sendInfo}/>
            </form>
            </div>
        </div>
        <Footer ></Footer>
      </div>


    );

  }
}

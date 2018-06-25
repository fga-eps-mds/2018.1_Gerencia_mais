import React, {Component} from "react";
import "../css/bootstrap.css";
import "../css/DoctorForm.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import isLogged from "../actions/actions"
import {store} from "../components/store"

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toDos: [],
      valid: true
    }
  }

  async componentDidMount() {
    try {

      const res = await fetch("https://gicsaude.herokuapp.com/user/api-user");
      const toDos = await res.json();
      this.setState({toDos});
    } catch (e) {
      console.log(e);
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {username, password} = this.state;
    const lead = {
      username,
      password,
    };
    const temp = JSON.stringify(lead)
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({"Content-Type": "application/json"})
    };
    fetch("https://gicsaude.herokuapp.com/user/obtain-auth-token/", conf).then(res => res.json()).then(res => {
      let token = res.token;
      if (res.non_field_errors == null && res.token != null) {
        store.dispatch(isLogged(true));
        this.props.history.push("/ScheduleTable");
      } else{
          store.dispatch(isLogged(false));
          this.setState({'valid':false});

        };
    });

  }
  messageError(){
    let message;
    if(this.state.valid === false){
      message = (
        <div className="alert alert-danger" role="alert">
            Login ou senha inválidos
          </div>
      );
    }
    else{
      message = (
        <div>
          </div>
      );
    }
    return message;
  }

  render() {
    let error_message;
    error_message = this.messageError();

    return (<div>
      <NavBar></NavBar>
      <div className="top-space espaco espaco-acima background">
        <div className="form-style-5">
          <form>
            <h3>Login</h3>
            <fieldset>
              <legend>
                <span className="number">1</span>
                Username</legend>
              <input id="nameID" type="text" name="username" value={this.state.username} placeholder="Digite o username aqui" onChange={(event) => this.handleUserInput(event)}/>
              <legend>
                <span className="number">2</span>
                Senha</legend>
                <input className="form-control" id="idID" type="password" name="password" value={this.state.password} placeholder="Digite a senha aqui" onChange={(event) => this.handleUserInput(event)}/>
            </fieldset>
            {error_message}
            <input type="submit" value="Entrar" onClick={this.handleSubmit}/>
          </form>
        </div>
      </div>
      <Footer ></Footer>
    </div>);

  }
}

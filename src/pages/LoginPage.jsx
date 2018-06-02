import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import isLogged from '../actions/actions'
import {store} from '../components/store'
console.log(store.getState())
export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      todos: [],
      valid: false
    }
  }

  async componentDidMount() {
    try {

      const res = await fetch('http://localhost:8000/user/api-user');
      const todos = await res.json();
      this.setState({todos});
      // console.log(todos);
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
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({"Content-Type": "application/json"})
    };
    fetch('http://localhost:8000/user/obtain-auth-token/', conf).then(res => res.json()).then(res => {
      let token = res.token;
      if (res.non_field_errors == null && res.token != null) {
        store.dispatch(isLogged(true));
        this.props.history.push("/ScheduleTable");
      } else
        store.dispatch(isLogged(false));
      console.log(store.getState())
      console.log(token);
    });

  }

  render() {
    return (<div>
      <NavBar></NavBar>
      <div className="top-space espaco espaco-acima">
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
            <input type="submit" value="Entrar" onClick={this.handleSubmit}/>
          </form>
        </div>
      </div>
      <Footer ></Footer>
    </div>);

  }
}

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/NavBar.css';
import isLogged from '../actions/actions';
import {store} from '../components/store';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  setNavBar(logged){
    if (store.getState().status) {
        return <a onClick={()=>store.dispatch(isLogged(false))} className="nav-link topicos title active" href="/">Sair</a>
    } else {
        return <a className="nav-link topicos title active" href="/LoginPage">Login</a>

    }
  }

  setRegistration(logged){
    if (!store.getState().status) {
      return <a className="nav-link topicos active title" href="/RegistrationAdmin">Cadastrar</a>
    }
  }
  setHome(logged){
    if (!store.getState().status) {
      return <a className="nav-link topicos active title" href="/">Home</a>
    }
  }
    render(){
	return(
      <nav className="navbar navbar-expand-sm navbar-dark new-bg-dark fixed-top topspace">
       <a className=" navbar-right" href="/">Gerencia Mais</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item active divider-vertical">
             {this.setHome(false)}
           </li>
           <li className="nav-item divider-vertical">
             {this.setNavBar(false)}
           </li>
           <li className="nav-item active divider-vertical">
             {this.setRegistration(false)}
           </li>
         </ul>
       </div>
      </nav>
	);
    }
}

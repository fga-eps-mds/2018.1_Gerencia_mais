import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/NavBar.css';


export default class NavBar extends Component {
    render(){
	return(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
      	      <div className="container-fluid">
      		<strong><a className='navbar-brand title' href="">GIC</a></strong>
      		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      		  <span className="navbar-toggler-icon"></span>
      		</button>
      		<div className="collapse navbar-collapse" id="navbarResponsive">
      		  <ul className="nav navbar-nav uls">
              <li className="nav-item">
      		      <a className="nav-link " href="">Home</a>
      		    </li>
      		    <li className="nav-item">
      		      <a className="nav-link " href="">Sobre</a>
      		    </li>
      		    <li className="nav-item">
      		      <a className="nav-link" href="#">Contato</a>
      		    </li>
      		  </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
      		      <a className="nav-link " href="">Entrar</a>
      		    </li>
      		    <li className="nav-item">
      		      <a className="nav-link " href="">Cadastrar</a>
      		    </li>
      		  </ul>
      		</div>
      	      </div>
      </nav>







	);
    }
}

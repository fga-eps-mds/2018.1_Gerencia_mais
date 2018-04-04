import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';


export default class NavBar extends Component {
    render(){
	return(
	    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
	      <div className="container">
		<h1 href="">GIC</h1>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarResponsive">
		  <ul className="navbar-nav ml-auto">
		    <li className="nav-item">
		      <a className="nav-link" href="">Sobre</a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" href="#">Login</a>
		    </li>
		  </ul>
		</div>
	      </div>
	    </nav>

	    
	);
    }
}

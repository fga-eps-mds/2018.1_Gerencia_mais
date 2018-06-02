import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

export default class HomePage extends Component {
  render() {
    return (<div className="title-space fundo">
      <NavBar></NavBar>
      <div className="container espaco">
        <div className='row'>
          <div className="column ">
            <div className='content'>
              <h3 className='text-center text-white'>Gerencia +</h3>
              <p className='text-justify text-white'>Aplicação web destinada a gerenciar médicos de hospitais públicos do Distrito Federal.</p>
            </div>
          </div>
          <div className='column'>
            <img src="http://images.clipartpanda.com/hospital-clipart-hospital-png-830x747.png" className='img-fluid' alt="Calendar-image"/>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </div>);
  }
}

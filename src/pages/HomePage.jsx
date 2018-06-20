import React, {Component} from 'react';
import '../css/bootstrap.css';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import isLogged from '../actions/actions';
import {store} from '../components/store';
import IMG from '../images/hospital1.png';

export default class HomePage extends Component {
  render() {
    let sidebar;
    if (store.getState().status) {
      sidebar=(
        <SideBar></SideBar>
      );
    }
    else{
      sidebar=(
        <div>
        </div>
      );
    }
    return (<div className="title-space background">
      <NavBar></NavBar>
      {sidebar}
      <div className="container espaco">
        <div className='row'>
          <div className="column ">
            <div className='content'>
              <h3 className='text-center text-white'>Gerencia +</h3>
              <p className='text-justify text-white'>Gerencia + é um webapp criado com o intuito de ajudar na gestão de médicos dos hospitais da rede pública de saúde do Distrito Federal.</p>
              <p className='text-justify text-white'>Com o gerencia + nunca ficou tão fácil resolver problemas de escalas médicas em um tempo tão curto.</p>
              <p className='text-justify text-white'>Com seu design inovador o gerencia + não apenas resolve o problema dos hospitais mas também fornece um ambiente agradável para tal feito. </p>
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

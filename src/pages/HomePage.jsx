import React, {Component} from "react";
import "../css/bootstrap.css";
import "../css/HomePage.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import IMG from "../images/hospital-clipart.png";

export default class HomePage extends Component {
  render() {
    return (<div className="title-space background">
      <NavBar></NavBar>
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
            <img src={IMG} className='img-fluid' alt="Calendar-image"/>
        </div>
        </div>
      </div>

      <Footer></Footer>

    </div>);
  }
}

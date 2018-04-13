import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'
import {Carousel} from 'react-bootstrap';

class HomeCarousel extends Component{
    render() {
	return (
	    <Carousel>
	      <Carousel.Item>
		<img width={900} height={700} alt="900x700" src={require('../images/hospital1.png')} />
		<Carousel.Caption>
		  <h3></h3>
		  <p></p>
		</Carousel.Caption>
	      </Carousel.Item>
	      <Carousel.Item>
		<img width={900} height={700} alt="900x700" src={require('../images/hospital1.png')} />
		<Carousel.Caption>
		  <h3></h3>
		  <p></p>
		</Carousel.Caption>
	      </Carousel.Item>
	      <Carousel.Item>
		<img  width={900} height={700} alt="900x700" src={require('../images/hospital1.png')} />
		<Carousel.Caption>
		  <h3></h3>
		  <p>
		  </p>
		</Carousel.Caption>
	      </Carousel.Item>
	    </Carousel>
	);
    }
}



export default class HomePage extends Component {
    render() {
	return (
	    <div className="top-space fundo">
	      <NavBar></NavBar>
          <div className="container">
         	<div className="row">
         		<div className="col-lg-12">
         			<div className="content espaco">
         				<h1>Gestão de Internações Cirúrgicas</h1>
         				<h3 className='whitewash'>Aplicação web destinada á gerenciar de servidores de hospitais publicos do distrito federal.</h3>
         			</div>
         		</div>
         	</div>
         </div>

         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <Footer></Footer>


	    </div>

	);
    }
}

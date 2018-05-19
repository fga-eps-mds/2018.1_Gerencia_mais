import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import NavBar from '../components/NavBar';
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
	    <div>
	      <NavBar></NavBar>
	      <HomeCarousel></HomeCarousel>


	      <section className="py-5 bg-light">
		<div className="container">
		  <h1>Gestão de Internações Cirúrgica</h1>
		  <p>Aplicação web destinada á gerencia de servidores de hospitais publicos do distrito federal.</p>
		</div>
	      </section>

	      <footer className="py-5 bg-dark">
		<div className="container">
		  <p className="m-0 text-center text-white">Copyright &copy; GIC 2018</p>
		</div>
	      </footer>
	    </div>
	    
	);
    }
}

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer'




export default class HomePage extends Component {
    render() {
	return (
	    <div className="top-space title-space fundo" >
	      <NavBar></NavBar>
        <SideBar></SideBar>
          <div className="container espaco">
         	<div className="row">
         		<div className="col-lg-12">
         			<div className="content ">
         				<h1 className='whitewash aumenta'>Gerencia +</h1>
         				<h3 className='whitewash aumentamenos'>Aplicação web destinada a gerenciar médicos de hospitais públicos do Distrito Federal.</h3>
         			</div>
         		</div>
         	</div>
         </div>



         <Footer></Footer>



	    </div>

	);
    }
}
// <div className="container espaco">
//   <div className="row">
//     <div className="col-lg-4"><img className="image" src ="http://www.guiabocasanta.com.br/wp-content/uploads/2015/03/HospitalUnimep.jpg" align="middle"/>
//      <h2 className='content aumentabemmenos whitewash'>Titulo Interessante</h2>
//      <h3 className=' aumentamenosainda whitewash'>Uma descrição bem interessante que não é um placeholder.</h3>
//     </div>
//     <div className="col-lg-4"><img className="image" src ="http://www.guiabocasanta.com.br/wp-content/uploads/2015/03/HospitalUnimep.jpg" align="middle"/>
//      <h2 className='content aumentabemmenos whitewash'>Titulo Interessante</h2>
//      <h3 className=' aumentamenosainda whitewash'>Uma descrição bem interessante que não é um placeholder.</h3>
//     </div>
//     <div className="col-lg-4"><img className="image" src ="http://www.guiabocasanta.com.br/wp-content/uploads/2015/03/HospitalUnimep.jpg" align="middle"/>
//      <h2 className='content aumentabemmenos whitewash'>Titulo Interessante</h2>
//      <h3 className=' aumentamenosainda whitewash'>Uma descrição bem interessante que não é um placeholder.</h3>
//     </div>
//   </div>
// </div>

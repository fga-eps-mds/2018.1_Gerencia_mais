import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Form from '../components/Form';
// import Select from 'react-select';
import SideBar from '../components/SideBar';


var date = new Date().toISOString();
// status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar
export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render(){
    return(
      <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Form></Form>
      <Footer ></Footer>
      </div>


    );

  }
}

import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Form from '../components/Form';
import SideBar from '../components/SideBar';

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

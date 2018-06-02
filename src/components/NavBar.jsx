import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonGroup, Button} from 'react-bootstrap';
import isLogged from '../actions/actions';
import {store} from '../components/store';
import '../css/NavBar.css'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  setNavBar(logged) {
    if (store.getState().status) {
      return <Button className='size_lg new-nav-font' onClick={() => store.dispatch(isLogged(false))}>Sair</Button>
    } else {
      return <Button className='size_lg new-nav-font' onClick={this.load} name='login'>Login</Button>

    }
  }

  setRegistration(logged) {
    if (!store.getState().status) {
      return <Button className='size_lg new-nav-font' onClick={this.load} name='signup'>Cadastrar</Button>
    }
  }
  setHome(logged) {
    if (!store.getState().status) {
      return <Button className='size_lg new-nav-font' onClick={this.load} name='home' >Home</Button>
    }
  }

  load(e){
  const local = e.target.name;
  if( local === 'home'){
    window.location.href='/';
  }
  if(local === 'login'){
    window.location.href='/LoginPage';
  }
  if(local === 'signup'){
    window.location.href='/RegistrationAdmin';
  }
  }

  render() {
    return (
      <Navbar fluid inverse collapseOnSelect fixedTop>
        <Navbar.Header>
            <a className='nav-link' href='/'>Gerencia +</a>
        </Navbar.Header>
        <NavItem>
        <ButtonGroup className='size_lg' >
            {this.setHome(false)}
            {this.setRegistration(false)}
            {this.setNavBar(false)}
          </ButtonGroup>
        </NavItem>
      </Navbar>

      );
  }
}

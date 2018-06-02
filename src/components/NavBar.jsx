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
      return <a onClick={() => store.dispatch(isLogged(false))} className="nav-link topicos title active" href="/">Sair</a>
    } else {
      return <a href="/LoginPage">Login</a>

    }
  }

  setRegistration(logged) {
    if (!store.getState().status) {
      return <a href="/RegistrationAdmin">Cadastrar</a>
    }
  }
  setHome(logged) {
    if (!store.getState().status) {
      return <a href="/">Home</a>
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
            <Button className='size_lg' href="#">Home</Button>
          </ButtonGroup>
        </NavItem>
        <NavItem>
        <ButtonGroup className='size_lg'>
            <Button className='size_lg' href="#">Login</Button>
          </ButtonGroup>
        </NavItem>
        <NavItem>
        <ButtonGroup className='size_lg' >
            <Button className='size_lg' href="#">Cadastrar</Button>
          </ButtonGroup>
        </NavItem>
      </Navbar>

      );
  }
}

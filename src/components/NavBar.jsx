import React, {Component} from 'react';
import '../css/bootstrap.css';
import {Navbar, NavItem, ButtonGroup, Button} from 'react-bootstrap';
import isLogged from '../actions/actions';
import {store} from '../components/store';
import "../css/NavBar.css";
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  async logOut(){
    await store.dispatch(isLogged(false));
    window.location.href="/";
  }

  setNavBar(logged) {
    if (store.getState().status) {
      return <Button className='size_lg new-nav-font pull-right change-exit newcolor' onClick={this.logOut} ><i className='glyphicon glyphicon-off'></i></Button>;
    } else {
      return <Button className='size_lg new-nav-font newcolor' onClick={this.load} name='login'><i className='glyphicon glyphicon-user'></i></Button>;

    }
  }

  setRegistration(logged) {
    if (!store.getState().status) {
      return <Button className='size_lg new-nav-font newcolor' onClick={this.load} name='signup'><i className='glyphicon glyphicon-plus'></i></Button>;
    }
    else{
      return <Button className='size_lg new-nav-font newcolor' onClick={this.load} name='table'><i className="glyphicon glyphicon-calendar"></i></Button>;
    }
  }

  load(e){
  const local = e.target.name;
  if( local === "home"){
    window.location.href='/';
  }
  if(local === "login"){
    window.location.href="/LoginPage";
  }
  if(local === "signup"){
    window.location.href="/RegistrationAdmin";
  }
  if(local === "table"){
    window.location.href="/ScheduleTable";
  }
}

  render() {
    return (
      <Navbar fluid inverse collapseOnSelect fixedTop>
        <Navbar.Header>
            <a className='nav-link' href='/'>Gerencia +</a>
        </Navbar.Header>
        <NavItem>
        <ButtonGroup className='size_lg'>
            <Button className='btn btn-default size_lg newcolor newborder' onClick={this.load} name='home' ><i class="glyphicon glyphicon-home"></i></Button>
            {this.setRegistration(false)}
            {this.setNavBar(false)}
          </ButtonGroup>
        </NavItem>
      </Navbar>

      );
  }
}

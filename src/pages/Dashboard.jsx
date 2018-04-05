import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import "../css/popup.css";
import "../css/bootstrap.min.css";

export default class Dashboard extends Component {
    constructor(){
      super();
    }
    render() {
	return (
	    <div>
	      <NavBar></NavBar>
        <SideBar></SideBar>
	      <h1 style={{marginTop:"70px"}}>Menu</h1>
          <ListGroup>
            <ListGroupItem href="/DoctorForm">
              <button className="btn btn-outline-secondary">Cadastrar horários</button>
            </ListGroupItem>
            <ListGroupItem href="/ScheduleTable">
              <button className="btn btn-outline-secondary">Visualizar tabela de horários</button>
            </ListGroupItem>
            <ListGroupItem href="/DoctorStatus">
              <button className="btn btn-outline-secondary">Alterar status de disponibilidade de médicos</button>
            </ListGroupItem>
            <ListGroupItem href="/UpdateSchedule">
              <button className="btn btn-outline-secondary">Atualizar horário</button>
            </ListGroupItem>
          </ListGroup>;

	    </div>
	);
    }
}

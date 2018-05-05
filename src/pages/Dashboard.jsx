import React, { Component } from 'react';
import NavBar from '../components/NavBar';
// import SideBar from '../components/SideBar';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
import "../css/bootstrap.min.css";

export default class Dashboard extends Component {
    render() {
	return (
	    <div>

	      <NavBar></NavBar>
	      <h1>Menu</h1>
          <ListGroup>
              <a href="/doctorform" className="btn btn-secondary">Cadastrar horários</a>
            <ListGroupItem href="/scheduletable">
              <button className="btn btn-outline-secondary">Visualizar tabela de horários</button>
            </ListGroupItem>
            <ListGroupItem href="/doctorstatus">
              <button className="btn btn-outline-secondary">Alterar status de disponibilidade de médicos</button>
            </ListGroupItem>
            <ListGroupItem href="/updateschedule">
              <button className="btn btn-outline-secondary">Atualizar horário</button>
            </ListGroupItem>
          </ListGroup>;

	    </div>
	);
    }
}

import { slide as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import '../css/SideBar.css'
export default class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a className="btn btn-secondary" href="/doctorform">Cadastrar horários</a>
        <a className="btn btn-secondary" href="/scheduletable">Visualizar tabela de horários</a>
        <a className="btn btn-secondary" href="/doctorstatus">Alterar status de disponibilidade de médicos</a>
        <a className="btn btn-secondary" href="/updateschedule">Atualizar horário</a>
      </Menu>
    );
  }
}

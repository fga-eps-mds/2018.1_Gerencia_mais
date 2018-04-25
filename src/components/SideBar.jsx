import { bubble as Menu } from 'react-burger-menu'
import React, { Component } from 'react';
import '../css/SideBar.css'
export default class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <img src ="https://cdn3.iconfinder.com/data/icons/medcare/512/Stethoscope-256.png" align="middle"/>
        <li><a href="/DoctorForm"><span class="sub_icon glyphicon glyphicon-plus"></span>  Cadastrar médico</a></li>
        <li><a href="/ScheduleTable"><span class="sub_icon glyphicon glyphicon-calendar "></span>  Visualizar tabela</a></li>
        <li><a  href="/DoctorStatus"><span class="sub_icon glyphicon glyphicon-sort "></span>  Alterar status</a></li>
        <li><a href="/updateschedule"><span class="sub_icon glyphicon glyphicon-time "></span>  Atualizar horário</a></li>
      </Menu>
    );
  }
}

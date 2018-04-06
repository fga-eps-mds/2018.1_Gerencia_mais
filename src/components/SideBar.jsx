import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/SideBar.css';

export default class SideNav extends Component {
    render(){
	return(

<div id="wrapper" class="active">
      <div id="sidebar-wrapper">
      <ul id="sidebar_menu" class="sidebar-nav">
           <li class="sidebar-brand"><a id="menu-toggle" href="#"><span id="main_icon" class="glyphicon glyphicon-align-justify"></span></a></li>
      </ul>
        <ul class="sidebar-nav" id="sidebar">
          <li><a href="/doctorform">Cadastrar horários</a></li>
          <li><a href="/scheduletable">Visualizar tabela de horários</a></li>
          <li><a href="/doctorstatus">Alterar disponibilidade</a></li>
          <li><a href="/updateschedule">Atualizar horário</a></li>
        </ul>
      </div>
    </div>
	);
    }
}

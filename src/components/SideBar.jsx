import { bubble as Menu } from 'react-burger-menu'
import React from 'react';
import '../css/SideBar.css'
export default class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu isOpen={true} noOverlay className="upperSpace">
        <img src ="https://cdn3.iconfinder.com/data/icons/medcare/512/Stethoscope-256.png" align="middle" alt="Icone"/>
        <li><a href="/DoctorForm"><span className="sub_icon glyphicon glyphicon-plus"></span>  Cadastrar médico</a></li>
        <li><a href="/ScheduleTable"><span className="sub_icon glyphicon glyphicon-calendar "></span>  Visualizar tabela</a></li>
        <li><a  href="/DoctorStatus"><span className="sub_icon glyphicon glyphicon-sort "></span>  Alterar status</a></li>
        <li><a href="/updateschedule"><span className="sub_icon glyphicon glyphicon-time "></span>  Atualizar horário</a></li>
      </Menu>
    );
  }
}

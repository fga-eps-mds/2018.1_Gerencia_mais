import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import {Table,Button} from 'react-bootstrap';
import Popup from "reactjs-popup";
import "../css/popup.css";
import "../css/bootstrap.min.css";

class GridCell extends Component {
  constructor(props){
    super();
    this.state = {"line":props.line,"column":props.column};
  }
  render(){
    return(
      <td>
      <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      closeOnDocumentClick
      >
      <div className="popupShape">
      <span> {this.props.resolveButton(this.state.line,this.state.column)} </span>
      </div>
      </Popup>
      </td>
    )
  }
}

export default class ScheduleTable extends Component {
    constructor(){
      super();
      this.state={"popup":0};
    }
    resolveButton(line,column){
      return ("servidor joao carlos da silva gomes pereira matricula xxxxxxx    servidor joao carlos da silva gomes pereira matricula xxxxxxx    servidor joao carlos da silva gomes pereira matricula xxxxxxx    servidor joao carlos da silva gomes pereira matricula xxxxxxx    servidor joao carlos da silva gomes pereira matricula xxxxxxx      servidor joao carlos da silva gomes pereira matricula xxxxxxx      servidor joao carlos da silva gomes pereira matricula xxxxxxx    servidor joao carlos dasilva gomes pereira matricula xxxxxxx    servidor joao carlos da silva gomes pereira matricula xxxxxxx  servidor joao carlos da silva gomes pereira matricula xxxxxxx");


    };

    TableList(number){
      var lists=[];
      for(var cont = 0;cont <= number; cont++){
        lists.push(
        <tr>
        <td></td>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={0}></GridCell>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={1}></GridCell>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={2}></GridCell>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={3}></GridCell>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={4}></GridCell>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={5}></GridCell>
        <GridCell resolveButton={this.resolveButton.bind(this)} line={cont} column={6}></GridCell>
        </tr>
        )
      }
    return lists;
    }

    render() {
	return (
	    <div>
	      <NavBar></NavBar>
	      <h1 style={{marginTop:"70px"}}>Quadro de Horários</h1>
        <Table striped bordered condensed hover>
         <thead>
     <tr>
      <th>Horário</th>
       <th>Domingo</th>
       <th>Segunda</th>
       <th>Terça</th>
       <th>Quarta</th>
       <th>Quinta</th>
       <th>Sexta</th>
       <th>Sábado</th>
     </tr>
         </thead>
         <tbody>
     {this.TableList(2)}

         </tbody>
       </Table>

	    </div>
	);
    }
}

import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import {Table,Button} from 'react-bootstrap';
import Popup from "reactjs-popup";
import "../css/popup.css";
import "../css/bootstrap.min.css";
import "../css/ScheduleTable.css";

class GridCell extends Component {
  constructor(props){
    super();
    this.state = {"line":props.line,"column":props.column};
  }

    resolveButton(line,column){
      /*
        change this url to project API's url.
        line == periods
        column == days of the week
      */
      fetch("https://randomuser.me/api/?results=50&nat=us,dk,fr,br")
      .then(response => response.json())
      .then(parsedJSON =>parsedJSON.results)
      .then(contacts => this.setState({
        contacts
      }))
      .catch(error => console.log("error to get data " + error));
    };

  render(){
    return(
      <td onClick = {()=> this.resolveButton(this.props.line,this.props.column)}>
      <Popup
      trigger={<button className="btn btn-success botaum">Servidores</button>}
      modal
      closeOnDocumentClick
      >
      <div className="popupShape">
        <div className="pre-scrollable">
          {
            this.state.contacts != null ? this.state.contacts.map(user =>
              <div><span>{user.name.first + " " + user.name.last}</span><br></br></div>
            )
            : null
          }
        </div>
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


    TableList(number){
      var lists=[];
      var periods = [
      "06:00-08:00",
      "08:00-10:00",
      "10:00-12:00",
      "12:00-14:00",
      "14:00-16:00",
      "16:00-18:00",
      "18:00-20:00",
      "20:00-22:00",
      "22:00-00:00",
      "00:00-02:00",
      "02:00-04:00",
      "04:00-06:00"
      ];
      for(var cont = 0;cont <= number; cont++){
        lists.push(
        <tr>
        <td><h3>{periods[cont]}</h3></td>
        <GridCell line={cont} column={0}></GridCell>
        <GridCell line={cont} column={1}></GridCell>
        <GridCell line={cont} column={2}></GridCell>
        <GridCell line={cont} column={3}></GridCell>
        <GridCell line={cont} column={4}></GridCell>
        <GridCell line={cont} column={5}></GridCell>
        <GridCell line={cont} column={6}></GridCell>
        </tr>
        )
      }
    return lists;
    }

    render() {
	return (
	    <div>
	      <NavBar></NavBar>
        <SideBar></SideBar>
	      <h1>Quadro de Horários</h1>
        <Table className="fspfb" striped bordered condensed hover>
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
     {this.TableList(11)}

         </tbody>
       </Table>
       <Footer></Footer>
	    </div>
	);
    }
}

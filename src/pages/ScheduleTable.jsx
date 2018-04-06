import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import {Table,Button,ButtonToolbar,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
import Popup from "reactjs-popup";
import "../css/popup.css";
import "../css/bootstrap.min.css";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

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
      trigger={<button className="btn btn-outline-secondary">Servidores</button>}
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
      this.state={"content":"Selecione uma opcao", "popup":""};
    }


    TableList(number){
      var lists=[];
      var periods = ["manhã","tarde","noite"];
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

    resolveButtonMonth(){
      var popup = (
        <Popup
        trigger={<button className="btn btn-outline-primary">Relatorio Diario</button>}
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
      )
      this.setState({"component":this.changeTable(true), "popup":popup})
    }

    changeTable(isMonth){
      if(isMonth){
          var content = (
            <div style={{marginTop:"25px", marginLeft:"220px"}}>
              <InfiniteCalendar displayOptions={{
                                  layout: 'landscape'
                                    }}
                                    width={600}
                                    height={350} onSelect={()=>this.resolveButtonMonth()}/>
            </div>
          )
    }
      else {
        var content = (
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
        )

      }
      this.setState({"content":content})
    }

    componentDidMount(){
      this.changeTable(false)
    }

    render() {

	return (
	  <div>
	      <NavBar></NavBar>
	      <h1 style={{marginTop:"70px"}}>Quadro de Horários</h1>

        <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1} onClick={()=>this.changeTable(false)}>Semanal</ToggleButton>
              <ToggleButton value={2} onClick={()=>this.changeTable(true)}>Mensal</ToggleButton>
              <div style={{marginLeft:"625px"}}>
              {this.state.popup}
              </div>
            </ToggleButtonGroup>
        </ButtonToolbar>
        <div className = "row">
          <div className = "col-sn-8">
            {this.state.content}
          </div>
        </div>
	    </div>
	);
    }
}

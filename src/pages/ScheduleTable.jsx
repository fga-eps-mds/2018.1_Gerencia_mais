import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Popup from "reactjs-popup";
import "../css/ScheduleTable.css";
import {Table,Button,ButtonToolbar,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
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
      this.state={"content":"Selecione uma opcao", "popup":"", "contacts":""};
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

    fetchData(){

      fetch("https://randomuser.me/api/?results=50&nat=us,dk,fr,br")
      .then(response => response.json())
      .then(parsedJSON =>parsedJSON.results)
      .then(contacts => this.setState({
        contacts
      }))
      .catch(error => console.log("error to get data " + error));
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
              <InfiniteCalendar onSelect={this.fetchData()} displayOptions={{
                                  layout: 'landscape'
                                    }}
                                    width={600}
                                height={350} onSelect={()=>this.resolveButtonMonth()}
		  theme={{
		      selectionColor: '#1abc9c',
		      textColor: {
			  default: '#333',
			  active: '#FFF'
		      },
		      weekdayColor: '#1abc9c',
		      headerColor: '#1abc9c',
		      floatingNav: {
			  background: 'rgba(81, 67, 138, 0.96)',
			  color: '#FFF',
			  chevron: '#FFA726'
		      }
   }}/>
            </div>
          )
    }
      else {
        var content = (

<Table className="wallpaper" striped bordered condensed hover>
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
            <SideBar></SideBar>
	    <h1>Quadro de Horários</h1>
        <div className="container" style={{marginTop:"70px", marginLeft:"120px"}}>
          <div className="jumbotron">
    	      <h1 style={{marginTop:"70px"}}>Quadro de Horários</h1>

            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                  <ToggleButton className="btn btn-outline-primary" value={1} onClick={()=>this.changeTable(false)}>Semanal</ToggleButton>
                  <ToggleButton className="btn btn-outline-primary" value={2} onClick={()=>this.changeTable(true)}>Mensal</ToggleButton>
                    <div style={{marginLeft:"625px"}}>
                      {this.state.popup}
                    </div>
                </ToggleButtonGroup>
            </ButtonToolbar>
	    
                {this.state.content}
          </div>
        </div>
       <Footer></Footer>
	    </div>
	);
    }
}

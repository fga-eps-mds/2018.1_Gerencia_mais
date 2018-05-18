import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Popup from "reactjs-popup";
import "../css/ScheduleTable.css";
import {Table,ButtonToolbar,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
import "../css/popup.css";
import "../css/bootstrap.min.css";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class GridCell extends Component {
  constructor(props){
    super(props);
    this.state = {"line":props.line,"column":props.column,"update":1,};
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

    resolveButton(line,column){
      fetch("http://localhost:8000/doctor/api-doctor/?format=json")
      .then(response => response.json())
      .then(contacts => this.setState({
        contacts
      }))
      .catch(error => console.log("error to get data " + error));
    };

    onClickUpdate(e){
      const title = e.target.title;
      const value = e.target.value;
      this.setState(
        {[title]:value,}
      );
    }


  render(){

    let update;
    if(this.state.update===1){
      this.state.update = 0;
      update = (
        <div>{this.resolveButton(this.props.line,this.props.column)}</div>
      )
    }else {
      update = (
        <div></div>
      )
    }
    return(
      <td>
      {update}
      <div className="">
        <div className="">
          {
            this.state.contacts != null ? this.state.contacts.map(user =>
              <div className ="doctorName"><span>{user.name}</span><br></br><br></br></div>
            )
            : null
          }
        </div>
      </div>

      </td>
    )
  }
}

export default class NewScheduleTable extends Component {
    constructor(){
      super();
      this.state={"content":"Selecione uma opcao", "popup":"", "contacts":""};
    }



    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }

    fetchData(){

      fetch("http://localhost:8000/doctor/api-doctor/?format=json")
      .then(response => response.json())
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

        <div className="popupShape ">
          <div className="pre-scrollable">
            <h4 className='modal-header whitename'>Médicos</h4>
            {
              this.state.contacts != null ? this.state.contacts.map(user =>
                  <div><strong>Nome: </strong> <span>{user.name}</span><br></br><strong>Função: </strong>Médico<br></br><br></br></div>
              )
              : null
            }
          </div>
        </div>
        </Popup>
      )
      this.setState({"component":this.changeTable(true), "popup":popup})
    }



    render() {

	return (
	  <div>
	    <NavBar></NavBar>
      <SideBar></SideBar>
        <div className="container mudah1">
            <h1 style={{marginTop:"70px"}}>Quadro de Horários</h1>

              <table className="wallpaper table-background" striped bordered rounded hover>
                <thead className="th-height">
                   <tr>
                    <th>.</th>
                    <th>.</th>
                    <th className="th-height">TESTEEDOMI 5 </th>
                    <th>TESTEEDOMI 5 </th>
                    <th>TESTEEDOMI</th>
                    <th>TESTEEDOMI 5</th>
                    <th>TESTEEDOMI</th>
                    <th>TESTEEDOMI</th>
                    <th>TESTEEDOMI</th>
                   </tr>
                </thead>
                       <tbody>


                       </tbody>
                     </table>
        </div>


       <Footer></Footer>
	    </div>
	);
    }
}

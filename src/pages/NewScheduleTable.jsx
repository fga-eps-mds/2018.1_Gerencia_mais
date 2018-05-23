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
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";


Calendar.setLocalizer(Calendar.momentLocalizer(moment));

export default class NewScheduleTable extends Component {
    constructor(){
      super();
      this.state={
        events: [
          {
            start: new Date(),
            end: new Date(moment().add(13, "hours")),
            title: "Marcos Paulin"
          },
          {
            start: new Date(2018,4,26,10),
            end: new Date(2018,4,26,12),
            title: "Paulin Sergio"
          }
        ]
      };
    }
    render() {
    	return (
    	  <div>
    	    <NavBar></NavBar>
          <SideBar></SideBar>
            <div  className="container">
                <div style={{marginTop:"70px",marginBottom:"100px"}} className="jumbotron">

                    <div className="App">
                      <header className="App-header">
                        <h1 >Quadro de Horários</h1>
                      </header>
                      <Calendar
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        style={{ height: "100vh" }}
                      />
                    </div>

                </div>
            </div>
            <Footer></Footer>
    	    </div>
    	);
    }
 }

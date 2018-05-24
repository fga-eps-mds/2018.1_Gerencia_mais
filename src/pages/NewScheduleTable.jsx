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
var ds = new Date(2018,4,22,8);
ds = ds.toISOString();
var de = new Date(2018,4,22,10);
de = de.toISOString();
export default class NewScheduleTable extends Component {
    constructor(props){
      super(props);
      this.state={
        doctor_events_list: [],
        all_events: [],
        all_doctors: [],
        events: [
          {
            start:ds ,
            end:de ,
            title: "Some title"
          }
        ]
      };
    }

    async componentDidMount() {
        try {
          const name = 'http://localhost:8000/doctor/api-doctor/';
          const res = await fetch(name);
          console.log(res);
          const all_doctors = await res.json();
          console.log(all_doctors);
          this.setState({all_doctors});
        } catch (e) {
          console.log(e);
        }
        await this.componentDidMount2();

      }

      async componentDidMount2() {
          try {
            const name = 'http://localhost:8000/schedule/api-event/';
            const res = await fetch(name);
            console.log(res);
            const all_events = await res.json();
            console.log(all_events);
            this.setState({all_events});
          } catch (e) {
            console.log(e);
          }
          await this.createEventDoctorList();
      }
      createEventDoctorList(){
        var title,start,end;
        this.state.all_events.map(each => (
          title = this.getDoctorId(each.doctor),
          start = new Date(each.start),
          end = new Date(each.end),
          this.state.doctor_events_list.push({'start':start,'end':end,'title':title})
        ));
        this.setState({
            doctor_events_list: this.state.doctor_events_list,
        })
      }

      getDoctorId(id){
        var name = "";
        this.state.all_doctors.map(each =>(
           name = this.compareId(each.id,id,each.name, name)
        ));
        return name;
      }

      compareId(id,id2,doctorName,realName){
        if(id === id2){
          var name = doctorName;
        }
        else{
          var name = realName;
        }
        return name;
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
                        events={this.state.doctor_events_list}
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

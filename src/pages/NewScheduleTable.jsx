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
var test;
var ds = new Date(Date.UTC(2018,4,1,7));
console.log(ds);
var de = new Date(Date.UTC(2018,4,1,13));
export default class NewScheduleTable extends Component {
    constructor(props){
      super(props);
      this.state={
        content: ("Selecione uma opcao"),
        doctor_events_list: [],
        all_events: [],
        all_doctors: [],
        category : '',
        events: [
          {
            start:ds,
            end:de ,
            title: "carregando"
          }
        ]
      };
    }

    async componentDidMount() {
      this.changeTable(1);
      await this.componentDidMount1();
    }
    async componentDidMount3() {
      this.changeTable(1);
    }

    async componentDidMount1() {
        try {
          const name = 'http://localhost:8000/doctor/api-doctor/list-doctor/1/?category='+this.state.category;
          const res = await fetch(name);
          console.log(res);
          const all_doctors = await res.json();
          console.log(all_doctors);
          this.setState({all_doctors});
        } catch (e) {
          console.log(e);
        }
        await this.componentDidMount2();
        await this.componentDidMount3();

      }

      async componentDidMount2() {
          try {
            const name = 'http://localhost:8000/schedule/api-event/';
            const res = await fetch(name);
            console.log(res);
            const all_events = await res.json();
            this.setState({all_events});
          } catch (e) {
            console.log(e);
          }
          await this.createEventDoctorList();
      }

      parseISOLocal(s) {
        var b = s.split(/\D/);
        return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
      }

      createEventDoctorList(){
        var s,e;
        var title,start,end;
        this.state.all_events.map(each => (
          title = this.getDoctorId(each.doctor),
          start = this.parseISOLocal(each.start),
          end = this.parseISOLocal(each.end),
          this.state.doctor_events_list.push({'start':start,'end':end,'title':title})
        ));
        this.setState({
             doctor_events_list: this.state.doctor_events_list,
        })
        console.log(this.state.doctor_events_list);
        console.log(this.state.events);
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

      changeTable(tableNumber){
        var content;
        switch(tableNumber){
          case 1:
             content = (
               <Calendar
                 views={['month', 'week', 'day']}
                 defaultDate={new Date()}
                 defaultView="month"
                 events={this.state.doctor_events_list}
                 style={{ height: "100vh" }}
               />
            )
          break;
        case 2:
          content = (
            <Calendar
              views={['month', 'week', 'day']}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "100vh" }}
            />
         )
         break;

       }

          this.setState({"content": content})
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

                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                              <ToggleButton className="btn btn-outline-primary" value={1} onClick={()=>this.changeTable(1)}>Geral</ToggleButton>
                              <ToggleButton className="btn btn-outline-primary" value={2} onClick={()=>this.changeTable(2)}>Outro</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <h1 >Quadro de Horários</h1>
                      </header>
                      {this.state.content}
                    </div>
                </div>
            </div>
            <Footer></Footer>
    	    </div>
    	);
    }
 }

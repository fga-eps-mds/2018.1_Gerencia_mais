import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import "../css/ScheduleTable.css";
import {Table,ButtonToolbar,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";




Calendar.setLocalizer(Calendar.momentLocalizer(moment));
var test;
var ds = new Date(Date.UTC(2018,4,1,7));
console.log(ds);
var de = new Date(Date.UTC(2018,4,1,13));
export default class ScheduleTable extends Component {
    constructor(props){
      super(props);
      this.state={
        smShow: false,
        current_doctor:"",
        current_start:"",
        current_end:"",
        doctor_events_list: [],
        all_events: [],
        all_doctors: [],
        all_category : [
          "geral", "outra","essa"
        ],
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
        this.setState({
          doctor_events_list : [],
        })
        this.state.all_events.map(each => (
          title = this.getDoctorId(each.doctor),
          start = this.parseISOLocal(each.start),
          end = this.parseISOLocal(each.end),
          this.state.doctor_events_list.push({'start':start,'end':end,'title':title})
        ));
        for(var i = this.state.doctor_events_list.length - 1; i >= 0; i--) {
          if(this.state.doctor_events_list[i].title === '') {
            this.state.doctor_events_list.splice(i, 1);
          }
        }

        this.setState({
             doctor_events_list: this.state.doctor_events_list,
        });
        console.log(this.state.all_doctors);
        console.log(this.state.all_events);
        console.log(this.state.doctor_events_list);
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
        if (tableNumber === 0) {
          this.setState({
          category : "",
          all_doctors: [],
          all_events: [],
          })
        }
        else {
          this.setState({
          category : this.state.all_category[tableNumber],
          all_doctors: [],
          all_events: [],
          })
        }

        this.componentDidMount()

    }

    


    render(){
        let smClose = () => this.setState({ smShow: false });
        let toolBar = []
        for(let i=0; i<this.state.all_category.length; i++){
          toolBar.push(
             <ToggleButton className="btn btn-outline-primary" value={i} onClick={()=>this.changeTable(i)}>{this.state.all_category[i]}</ToggleButton>
           )
        }
    	return (
    	  <div>
    	    <NavBar></NavBar>
          <SideBar></SideBar>
            <div  className="container change-color">
                <div style={{marginTop:"70px",marginBottom:"100px"}} className="jumbotron">
                    <div className="App">
                      <header className="App-header">

                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={0}>
                              {toolBar}
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <h1 >Quadro de Horários</h1>
                      </header>
                      <Calendar
                        views={['month', 'week', 'day']}
                        defaultDate={new Date()}
                        selectable
                        onSelectEvent={() => this.setState({ }),
                                       (event) =>this.setState({smShow: true,current_doctor: event.title,current_start:event.start.toString(),current_end:event.end.toString()})}
                        defaultView="month"
                        events={this.state.doctor_events_list}
                        style={{ height: "100vh" }}
                    />
                    </div>
                </div>
            </div>
            <Modal show={this.state.smShow} onHide={smClose} currentdoctor={this.state.current_doctor}
                          currentstart={this.state.current_start} currentend={this.state.current_end} />
            <Footer></Footer>
    	    </div>
    	);
    }
 }

import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ModalComponent from '../components/Modal';
import ModalForm from '../components/ModalForm';
import {Table,ButtonToolbar,ToggleButtonGroup,ToggleButton,Modal,Button} from 'react-bootstrap';
import "../css/bootstrap.min.css";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.updateLocale('en-gb', {
  week : {
      doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});

moment.locale('en-gb');

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class MySmallModal extends React.Component {

  render() {
    let doctors = [];
    let doctor;
    for (var count = 0; count < this.props.doctors.length; count++) {
      doctor = this.props.doctors[count];
      doctors.push(
        <div>
          <h4>Doutor: {doctor.name} | Carga Horária: {doctor.workload}</h4>
          <br></br>
        </div>
      )
    }

    return (
      <Modal
        className="modal-height modal"
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header className="" >
          <h1 className="modal-header-align ">Carga Horária</h1>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <div>
            <legend> Médicos </legend>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option defaultValue={0} value={0}>Escolha um médico...</option>
                {this.props.doctors.map(each =>(
                <option>Doutor: {each.name} | Carga Horária: {each.workload}</option>

            ))}
              </select>
            {doctors}
            <Button onClick={this.props.onHide} bsStyle="danger">Close</Button><br></br>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default class ScheduleTable extends Component {
    constructor(props){
      super(props);
      this.state={
        formShow:false,
        formDay:"",
        smShow: false,
        smLocalShow: false,
        current_doctor:"",
        current_start:"",
        current_end:"",
        startDate: '',
        endDate: '',
        doctor_events_list: [],
        all_events: [],
        all_doctors: [],
        doctors_workload: [],
        all_category : [
          "Geral"
        ],
        category : '',
        turns: [],
        turnStart: [
          ["manhã",6],
          ["tarde",12],
          ["noite",18]
        ],
        current_date: new Date(),
        current_view: 'month',
      };

      this.bindScopes([
        'onView',
        'onNavigate',
        'updateTimes',
      ]);

      this.updateTimes();
    }

    async componentDidMount() {
        try {
          const name = 'http://localhost:8000/doctor/api-doctor/';
          const res = await fetch(name);
          console.log(res);
          const all_doctors = await res.json();
          this.setState({all_doctors});
        } catch (e) {
          console.log(e);
        }
        await this.createCategoryList();
        await this.componentDidMount1();

      }

      createCategoryList() {
        var category;
        this.state.all_doctors.map(each => (
          category = this.categoryValidate(each.category),
          this.pushCategoryValid(category)

        ));
      }

    async componentDidMount1() {
        try {
          this.state.all_doctors = [];
          const name = 'http://localhost:8000/doctor/api-doctor/list-doctor/category/?category='+this.state.category;
          const res = await fetch(name);
          console.log(res);
          const all_doctors = await res.json();
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

      parseISOLocal(strDate) {
        var b = strDate.split(/\D/);
        var date = new Date(strDate);
        if (date <= this.state.startDate || date >= this.state.endDate) {
          return "";
        }
        return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
      }

      parseISOLocalEnd(strDate) {
        var b = strDate.split(/\D/);
        return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
      }

      createEventDoctorList(){
        this.updateTimes();
        var title,start,end,id;
        this.state.doctor_events_list = [],
        this.state.all_events.map(each => (
          title = this.getDoctorId(each.doctor),
          start = this.parseISOLocal(each.start),
          end = this.parseISOLocalEnd(each.end),
          id = each.doctor,
          this.pushEventValid(title,start,end,id)
        ));
        this.listDoctorsHour();
        this.calculateTurns();
      }

      pushEventValid(title,start,end,id){
        if (title !== "" && start !== "" && end !== "") {
          this.state.doctor_events_list.push({'start':start,'end':end,'title':title,'id':id})
        }
      }

      getDoctorId(id){
        var name = "";
        this.state.all_doctors.map(each =>(
           name = this.compareId(each.id,id,each.name, name)
        ));
        return name;
      }

      pushCategoryValid(category){
        if(category !== ""){
          this.state.all_category.push(category);
        }
      }

      categoryValidate(category){
        var aux = 0;
        this.state.all_category.map(each =>(
           aux += this.compareCategory(each,category)
        ));
        if (aux === this.state.all_category.length) {
          return category;
        } else {
          return "";
        }
      }

      compareCategory(categoryOfList,category){
        if(category === categoryOfList){
          return 0;
        }
        else {
          return 1;
        }
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
        this.setState({
          all_events: [],
        })
        if (tableNumber === 0) {
          this.setState({
          category : "",
          })
        }
        else {
          this.setState({
          category : this.state.all_category[tableNumber],
          })
        }
        this.componentDidMount1()


    }

    listDoctorsHour(){
      var name,workload;
      this.state.doctors_workload = [];
      this.state.all_doctors.map(each => (
        name = each.name,
        workload = this.calculateWorkload(each.id),
        this.state.doctors_workload.push({'name' :name,'workload':workload})
      ));
    }

    calculateWorkload(id){
      var timeStart,timeEnd;
      var timeTotal = 0;
      var idVoid = 0;
      this.state.doctor_events_list.map(each => (
        timeStart = each.start,
        timeEnd = each.end,
        idVoid = this.idValidate(each.id,id),
        timeTotal += this.allDoctorEvents(timeStart,timeEnd,idVoid)
      ));
      return timeTotal;
    }

    idValidate(listId,id){
      if (id === listId) {
        return id;
      }
      else{
        return -1;
      }
    }

    allDoctorEvents(timeStart,timeEnd,idValid){
      if (idValid >= 0) {
        var strStart = timeStart.toString().split(/\D/);
        var strEnd = timeEnd.toString().split(/\D/);
        if ((Number(strEnd[10]) - Number(strStart[10])) < 0) {
          return Number(strEnd[10]) - Number(strStart[10]) + 24;
        }
        return Number(strEnd[10]) - Number(strStart[10]);
      }
      return 0;
    }

    calculateTurns(){
      var turns = [];
      for (var count = 0; count < this.state.turnStart.length; count++) {
        turns.push(0);
      }
      this.state.doctor_events_list.map(each =>(
        this.verifyTurn(turns,each.start.toString().split(/\D/))
      ));
      this.setState({
        'turns' : turns
      })
    }

    verifyTurn(turns,eventStart){
      var startHour =Number(eventStart[10]);
      for (var count = 0; count < this.state.turnStart.length; count++) {
        if (count === this.state.turnStart.length - 1) {
          if ((startHour < this.state.turnStart[0][1]) || (startHour >= this.state.turnStart[count][1])) {
            turns[count] += 1;
          }
        }else{
          if ((startHour < this.state.turnStart[count+1][1]) && (startHour >= this.state.turnStart[count][1])) {
            turns[count] += 1;
          }
        }
      }
    }

    onView(view){
      this.state.current_view = view;
      this.createEventDoctorList();
    }

    updateTimes(){
      let start, end;
      if(this.state.current_view === 'day'){
        start = moment(this.state.current_date).startOf('day').format();
        end   = moment(this.state.current_date).endOf('day').format();
      }
      else if(this.state.current_view === 'week'){
        start = moment(this.state.current_date).startOf('isoWeek').subtract(1, 'days').format();
        end   = moment(this.state.current_date).endOf('isoWeek').subtract(1, 'days').format();
      }
      else if(this.state.current_view === 'month'){
        start = moment(this.state.current_date).startOf('month').subtract(7, 'days').format();
        end   = moment(this.state.current_date).endOf('month').add(7, 'days').format();
      }
        this.state.startDate = new Date(start);
        this.state.endDate = new Date(end);
    }

    bindScopes(keys){
      for(let key of keys){
        this[key] = this[key].bind(this);
      }
    }

    onNavigate(date, view){
    const new_date = moment(date);
    this.state.current_date = date
    this.state.current_view = view
    this.createEventDoctorList();
  }

    correctDate(d){
      var date = new Date(d);
      var newStart = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      var resultStart = newStart.toISOString();
      return resultStart;
    }

    render(){
        console.log(this.state.formDay);
        let smClose = () => this.setState({ smShow: false });
        let formClose = () => this.setState({ formShow: false });
        let smLocalClose = () => this.setState({ smLocalShow: false });
        let toolBar = [];
        let turnsInformation = [];
        let turnstitle = [];
        for(let count=0; count<this.state.all_category.length; count++){
          toolBar.push(
             <ToggleButton className="btn btn-outline-primary" value={count} onClick={()=>this.changeTable(count)}>{this.state.all_category[count]}</ToggleButton>
           );
        }
        for (let count = 0; count < this.state.turnStart.length; count++) {
          turnstitle.push(
            <th>{this.state.turnStart[count][0]}</th>
          );
          turnsInformation.push(
            <td>{this.state.turns[count]}</td>
          );
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
                        <br></br>
                        <MySmallModal show={this.state.smLocalShow} onHide={smLocalClose} doctors={this.state.doctors_workload}/>
                        <Button className="btn btn-outline-primary" onClick={() => this.setState({smLocalShow: true})}>Carga Horária</Button>
                        <br></br>
                        <h1 style={{marginLeft:"25%"}}>Quadro de Horários</h1>
                          <Table striped bordered condensed hover>
                            <thead>
                              <tr>
                                {turnstitle}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {turnsInformation}
                              </tr>
                            </tbody>
                          </Table>
                      </header>
                      <Calendar
                          views={['month', 'week', 'day']}
                          onNavigate={this.onNavigate}
                          onView={this.onView}
                          selectable
                          onSelectEvent={() => this.setState({ }),
                                       (event) =>this.setState({smShow: true,current_doctor: event.title,current_start:event.start.toString(),current_end:event.end.toString()})}
                          onSelectSlot={(event) => this.setState({formDay:this.correctDate(event.end), formShow:true})}
                          defaultDate={new Date()}
                          defaultView="month"
                          events={this.state.doctor_events_list}
                          style={{ height: "100vh" }}
                        />
                    </div>
                </div>
            </div>
            <ModalForm show={this.state.formShow} onHide={formClose} formday={this.state.formDay}></ModalForm>
            <ModalComponent show={this.state.smShow} onHide={smClose} currentdoctor={this.state.current_doctor}
                          currentstart={this.state.current_start} currentend={this.state.current_end} />
            <Footer></Footer>
    	    </div>
    	);
    }
 }

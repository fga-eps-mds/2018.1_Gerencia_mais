import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ModalComponent from "../components/Modal";
import ModalForm from "../components/ModalForm";
import {Table,ButtonToolbar,ToggleButtonGroup,ToggleButton,Modal,Button} from "react-bootstrap";
import "../css/bootstrap.min.css";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Workload from "../components/Workload";
import Loading from "../components/Loading";
import {store} from "../components/store"

moment.updateLocale("pt-gb", {
  week : {
      doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});

moment.locale("pt-gb");

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

export default class ScheduleTable extends Component {
    constructor(props){
      super(props);
      this.state={
        formShow:false,
        formDay:"",
        smShow: false,
        smEmailShow: false,
        smLocalShow: false,
        message:"",
        currentDoctor:"",
        currentStart:"",
        currentEnd:"",
        startDate: "",
        endDate: "",
        doctorEventsList: [],
        allEvents: [],
        allDoctors: [],
        doctorsWorkload: [],
        allCategory : [
          "Geral"
        ],
        submitDoctor:{
          "email":"",
          "segunda":"",
          "terca":"",
          "quarta":"",
          "quinta":"",
          "sexta":"",
          "sabado":"",
          "domingo":"",
        },
        week_emails:[],
        weekDoctors:[],
        category : "",
        turns: [],
        turnStart: [
          ["manhã",6],
          ["tarde",12],
          ["noite",18]
        ],
        currentDate: new Date(),
        currentView: "month",
      };

      this.bindScopes([
        "onView",
        "onNavigate",
        "updateTimes",
      ]);
      this.onClick = this.onClick.bind(this);
      this.updateTimes();
    }

    async componentDidMount() {
        try {
          const conf = {
            headers: new Headers({"Authorization": "Token " + store.getState().status})
          };
          const name = "https://gicsaude.herokuapp.com/doctor/api-doctor/";
          const res = await fetch(name, conf);
          const allDoctors = await res.json();
          this.setState({allDoctors});
        } catch (e) {
          console.log(e);
        }
        await this.createCategoryList();
        await this.componentDidMount1();

      }

      createCategoryList() {
        var category;
        this.state.allDoctors.map(each => (
          category = this.categoryValidate(each.category),
          this.pushCategoryValid(category)

        ));
      }

    async componentDidMount2() {
        try {
          const conf = {
            headers: new Headers({"Authorization": "Token " + store.getState().status})
          };
          this.state.allDoctors = [];
          const name = "https://gicsaude.herokuapp.com/doctor/api-doctor/list-doctor/category/?category="+this.state.category;
          const res = await fetch(name,conf);
          const allDoctors = await res.json();
          this.setState({allDoctors});
        } catch (e) {
          console.log(e);
        }
        await this.createEventDoctorList();
        var names = this.setNamesInDoctorEventList(this.state.doctorEventsList);
        this.setState({["weekDoctors"]:names});
      }

      async componentDidMount1() {
          try {
            const conf = {
              headers: new Headers({"Authorization": "Token " + store.getState().status})
            };
            const name = "https://gicsaude.herokuapp.com/schedule/api-event/";
            const res = await fetch(name,conf);
            const allEvents = await res.json();
            this.setState({allEvents});
          } catch (e) {
            console.log(e);
          }
          await this.componentDidMount2();
      }

      compareDoctors(id, actual_id, start, end){
        if(id === actual_id){
          var hour_start = start.toISOString().split(/\D/);
          var hour_end = end.toISOString().split(/\D/);
          var name = this.getDayName(start.getDay());
          var string_hour = " "+ hour_start[3] + ":" +hour_start[4] + " "+"~"+" "+hour_end[3]+":"+hour_end[4];
          this.state.submitDoctor[name] = string_hour;
        }
      }

      makeListEvents(id){
        this.state.doctorEventsList.map(each => (
          this.compareDoctors(id, each.id, each.start, each.end)
        ))
      }

      onClick(){
        this.setState({smEmailShow: true, message: "Carregando..."})
        this.state.allDoctors.map(each => (
          this.state.submitDoctor["email"] = each.email,
          this.makeListEvents(each.id),
          this.submitEmail()
        ));
      }

      async submitEmail(e){
        const {email ,segunda, terca, quarta, quinta, sexta, sabado, domingo} = this.state.submitDoctor;
        const lead = {email ,segunda, terca, quarta, quinta, sexta, sabado, domingo}
        const temp = JSON.stringify(lead);
        const conf = {
          method: "POST",
          body: temp,
          mode: "no-cors",
          headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded",
                                 "Access-Control-Allow-Origin": "*",})
        };
        var valid = false;
        await fetch("https://notificamais.herokuapp.com/notifyEvent/data_mensage", conf).then(function(response){
          console.log(response.status);
          if (response.status === 0) {
            valid = true;
          }else {
            valid = false;
          }
          console.log(response);
        });
        if (valid) {
          this.setState({message: "Enviado!"});
        }else {
          this.setState({message: "Erro ao enviar email!"});
        }
        this.state.submitDoctor ={
          "email":"",
          "segunda":"",
          "terca":"",
          "quarta":"",
          "quinta":"",
          "sexta":"",
          "sabado":"",
          "domingo":"",
        }
    }

      getDayName(date){
        var weekday = new Array(7);
        weekday[0] = "domingo";
        weekday[1] = "segunda";
        weekday[2] = "terca";
        weekday[3] = "quarta";
        weekday[4] = "quinta";
        weekday[5] = "sexta";
        weekday[6] = "sabado";
        var day = weekday[date]
        return day;
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
        var title,start,end,id,email;
        this.state.doctorEventsList = [],
        this.state.allEvents.map(each => (
          title = this.getDoctorId(each.doctor),
          start = this.parseISOLocal(each.start),
          end = this.parseISOLocalEnd(each.end),
          id = each.doctor,
          email = this.getDoctorEmail(each.id),
          this.pushEventValid(title,start,end,id,email)
        ));
        this.listDoctorsHour();
        this.calculateTurns();
      }

      pushEventValid(title,start,end,id, email){
        if (title !== "" && start !== "" && end !== "") {
          this.state.doctorEventsList.push({"start":start,"end":end,"title":title,"id":id,"email":email})
        }
      }

      getEmail(id, actual_id, email, actual_email){
        if(id === actual_id){
          return actual_email;
        }

        return email;
      }

      getDoctorEmail(id){
        var email = "";
        this.state.allDoctors.map(each =>(
          email = this.getEmail(id, each.id, email, each.email)
        ));
        return email;
      }

      getDoctorId(id){
        var name = "";
        this.state.allDoctors.map(each =>(
           name = this.compareId(each.id,id,each.name, name)
        ));
        return name;
      }

      pushCategoryValid(category){
        if(category !== ""){
          this.state.allCategory.push(category);
        }
      }

      categoryValidate(category){
        var aux = 0;
        this.state.allCategory.map(each =>(
           aux += this.compareCategory(each,category)
        ));
        if (aux === this.state.allCategory.length) {
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
        var name;
        if(id === id2){
          name = doctorName;
        }
        else{
          name = realName;
        }
        return name;
      }

      changeTable(tableNumber){
        this.setState({
          allEvents: [],
        });
        if (tableNumber === 0) {
          this.setState({
          category : "",
          })
        }
        else {
          this.setState({
          category : this.state.allCategory[tableNumber],
          })
        }
        this.componentDidMount2();


    }


    listDoctorsHour(){
      var name,workload;
      this.state.doctorsWorkload = [];
      this.state.allDoctors.map(each => (
        name = each.name,
        workload = this.calculateWorkload(each.id),
        this.state.doctorsWorkload.push({"name" :name,"workload":workload})
      ));
    }

    calculateWorkload(id){
      var timeStart,timeEnd;
      var timeTotal = 0;
      var idVoid = 0;
      this.state.doctorEventsList.map(each => (
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
      this.state.doctorEventsList.map(each =>(
        this.verifyTurn(turns,each.start.toString().split(/\D/))
      ));
      this.setState({
        "turns" : turns
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
      this.state.currentView = view;
      this.createEventDoctorList();
    }

    updateTimes(){
      let start, end;
      if(this.state.currentView === "day"){
        start = moment(this.state.currentDate).startOf("day").format();
        end   = moment(this.state.currentDate).endOf("day").format();
      }
      else if(this.state.currentView === "week"){
        start = moment(this.state.currentDate).startOf("isoWeek").subtract(1, "days").format();
        end   = moment(this.state.currentDate).endOf("isoWeek").subtract(1, "days").format();
      }
      else if(this.state.currentView === "month"){
        start = moment(this.state.currentDate).startOf("month").format();
        end   = moment(this.state.currentDate).endOf("month").format();
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
    this.state.currentDate = date
    this.state.currentView = view
    this.createEventDoctorList();
  }

    correctDate(d){
      var date = new Date(d);
      var newStart = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
      var resultStart = newStart.toISOString();
      return resultStart;
    }

    parseISOLocalTitle(s) {
      let b = s.split(/\D/);
      return b[1];
    }
    setNamesInDoctorEventList(doctorEventsList){
      const temp_list = []
      this.state.doctorEventsList.map(each => (
        temp_list.push(each.title)
      ));
      return new Set(temp_list)
    }

    render(){

        let smClose = () => this.setState({ smShow: false });
        let formClose = () => this.setState({ formShow: false });
        let smLocalClose = () => this.setState({ smLocalShow: false });
        let smEmailClose = () => this.setState({ smEmailShow: false });
        let toolBar = [];
        let turnsInformation = [];
        let turnstitle = [];
        for(let count=0; count<this.state.allCategory.length; count++){
          toolBar.push(
             <ToggleButton className="btn btn-outline-primary" value={count} onClick={()=>this.changeTable(count)}>{this.state.allCategory[count]}</ToggleButton>
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
        let button;
        if(this.state.currentView === "week"){
          button=(
              <Button className="btn btn-outline-primary" onClick={this.onClick}>Enviar horários</Button>
          );
        }
        else{
          button = (
            <div>
          </div>
          );
        }
        return (
          <div>
            <NavBar></NavBar>
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
                        <Workload show={this.state.smLocalShow} onHide={smLocalClose} doctors={this.state.doctorsWorkload}/>
                        <Loading show={this.state.smEmailShow} onHide={smEmailClose} message={this.state.message}/>
                        <Button className="btn btn-outline-primary" onClick={() => this.setState({smLocalShow: true})}>Carga Horária</Button>
                        <a href={"https://gicsaude.herokuapp.com/schedule/generate-pdf/" + (moment(this.state.currentDate).month()+1) } target="_blank_" className="btn btn-outline-primary">Gerar PDF Mensal</a>
                        <a href={"/schedule/generate-xlsx/" + (moment(this.state.currentDate).month()+1) } target="_blank_" className="btn btn-outline-primary">Gerar XLSX Mensal</a>
                        {button}
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
                          views={["month", "week", "day"]}
                          onNavigate={this.onNavigate}
                          onView={this.onView}
                          selectable
                          onSelectEvent={() => this.setState({ }),
                                       (event) =>this.setState({smShow: true,currentDoctor: event.title,currentStart:event.start.toString(),currentEnd:event.end.toString()})}
                          onSelectSlot={(event) => this.setState({formDay:this.correctDate(event.end), formShow:true})}
                          defaultDate={new Date()}
                          defaultView="month"
                          events={this.state.doctorEventsList}
                          style={{ height: "100vh" }}
                        />
                    </div>
                </div>
            </div>
            <ModalForm show={this.state.formShow} onHide={formClose} formday={this.state.formDay}></ModalForm>
            <ModalComponent show={this.state.smShow} onHide={smClose} currentdoctor={this.state.currentDoctor}
                          currentstart={this.state.currentStart} currentend={this.state.currentEnd} />
            <Footer></Footer>
    	    </div>
    	);
    }
 }

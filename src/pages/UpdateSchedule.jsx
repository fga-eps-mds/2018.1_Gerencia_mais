import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import FormErrors from '../components/FormErrors';
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import Popup from "reactjs-popup";

var date = new Date().toISOString();
export default class UpdateSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_valid : false,
      id:'',
      title: '',
      doctor:'0',
      start: date ,
      time_start:'',
      end: date,
      time_end:'',
      description:'',
      hospital:'',
      creator: '1',
      rule: null,
      calendar:'1',
      all_doctors: [],
      all_events: [],
      update_event:[],
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
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
    }

    async componentDidMount3() {
        try {
          const name = await 'http://localhost:8000/schedule/api-event/update/'+this.state.id+'/';
          const res = await fetch(name);
          console.log(res);
          const update_event = await res.json();
          console.log(update_event);
          this.setState({update_event});
        } catch (e) {
          console.log(e);
        }
      }

    async onClick(e){
      const value = e.target.value;
      await this.setState({['id'] : value });
      await this.componentDidMount3();
      await this.setState({['start']:this.state.update_event.start});
      await this.setState({['end']:this.state.update_event.end});
      await this.setState({['title']:this.state.update_event.title});
      await this.setState({['hospital']:this.state.update_event.hospital});



    }

    async componentDidMount2() {
        try {
          const name = await 'http://localhost:8000/schedule/api-event/list-doctor/?doctor='+this.state.doctor;
          const res = await fetch(name);
          console.log(res);
          const all_events = await res.json();
          console.log(all_events);
          this.setState({all_events});
        } catch (e) {
          console.log(e);
        }
      }

     handleSubmit = e => {
      this.state.start = this.state.start + "T" + this.state.time_start + "Z";
      this.state.end = this.state.end + "T" + this.state.time_end + "Z";
       const name ='http://localhost:8000/schedule/api-event/update/'+this.state.id+'/';
       this.state.doctor=this.state.doctor.toString();
       console.log(this.state.start + " " + this.state.end);
       e.preventDefault();
       const {start, end, title, hospital, description, creator, rule, calendar, doctor} = this.state;
       console.log({start, end, title, hospital, description,creator, rule, calendar, doctor} );
       const lead = {start, end, title, hospital, description, creator, rule, calendar,doctor} ;
       const temp = JSON.stringify(lead)
       console.log(temp);
       const conf = {
        method: "PUT",
        body: temp,
        headers: new Headers({ "Content-Type": "application/json" })
      };
      fetch(name, conf).then(response => console.log(response));
      this.setState({['is_valid']:true});
  }

  onChange(e) {
    const title = e.target.title;
    const value = e.target.value;
    console.log("entrei");
    this.setState({[title] : value});
}


 async  handleChange(e){
    await this.setState({doctor: e.target.value});
    await this.componentDidMount2();
  }

  render(){
    if (this.state.is_valid){
      window.location.reload();
    }
    let form_update;
    if(this.state.id > 0){
      form_update = (
        <div className="top-space space-bottom space-top change-color">
          <div className="form-style-5 ">
            <form>
              <h3>Atualização do horário do médico</h3>
              <fieldset>
          <div class="row">
            <div class="col-lg-6">
              <div class="input-group">
                <legend><span className="number">0</span> Médicos </legend>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.handleChange.bind(this)} value={this.state.doctor}>
                <option selected>Escolha um médico...</option>
                {this.state.all_doctors.map(item =>(
                <option value={item.id}> {item.name} - {item.registration}</option>

            ))}
              </select>

              <legend><span className="number">1</span> Titulo do evento </legend>
              <input id="titleID" type="text" title="title" value={this.state.title} onChange = {this.onChange} placeholder="Digite o nome aqui" />

              <legend><span className="number">4</span>Hospital</legend>
              <input id="hospitalID" type="text" title="hospital" value={this.state.hospital} onChange = {this.onChange} placeholder="Digite o Hospital"/>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="input-group">
                <legend><span className="number">6</span>Data e Hora de Entrada</legend>
                <input id="edID" type="date" title="start" value = {this.state.start} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                <input id="edID" type="time" title="time_start" value = {this.state.time_start} onChange = {this.onChange}/>

                <legend><span className="number">7</span>Data e Hora de Saída</legend>
                <input id="edID" type="date" title="end" value = {this.state.end} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
                <input id="edID" type="time" title="time_end" value = {this.state.time_end} onChange = {this.onChange}/>

              </div>
            </div>
            </div>
          </fieldset>
          <input type="submit" value="Apply" onClick={this.handleSubmit}/>
          </form>
            </div>
        </div>

      )
    }
    else{
      form_update =(
        <div>
        </div>
      );
    }

    return(
      <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="top-space space-top space-bottom change-color">
        <div className="form-style-5">
            <form>
              <h3>Atualização de horário de médicos</h3>
              <fieldset>
                <legend><span className="number">0</span> Médicos </legend>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.handleChange.bind(this)} value={this.state.doctor}>
                <option selected>Escolha um médico...</option>
                {this.state.all_doctors.map(item =>(
                <option value={item.id}> {item.name} - {item.registration}</option>

            ))}
              </select>

              {this.state.all_events.map(item =>(
                <div>
                <ListGroup>
                    <ListGroupItem onClick={this.onClick} value = {item.id}  bsStyle="success">
                      título: {item.title}      <br/>
                      começo: {item.start}      <br/>
                      fim: {item.end}           <br/>
                      hospital: {item.hospital} <br/>
                    </ListGroupItem>
                  </ListGroup>
                </div>

              ))}
                {form_update}
                  </fieldset>
                </form>
                </div>
            </div>
            <Footer ></Footer>
          </div>


        );

      }
    }

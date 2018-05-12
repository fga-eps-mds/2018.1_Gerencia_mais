import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
// import Select from 'react-select';

var date = new Date().toISOString();
console.log(date);
// status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar
export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_valid : false,
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
    }
     this.onChange = this.onChange.bind(this);
     this.onChange2 = this.onChange2.bind(this);
  }

  async componentDidMount() {
      try {

        const res = await fetch('http://localhost:8000/doctor/api-doctor/');
        const all_doctors = await res.json();
        console.log(all_doctors);
        this.setState({all_doctors});
      } catch (e) {
        console.log(e);
      }
    }

  onChange(e) {
    const title = e.target.title;
    const value = e.target.value === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[title] : value});
}

  onChange2(e){
    const title = e.target.title;
    this.setState(
      {[title]: e.target.checked}
    )
  }

  handleChange(e){
    this.setState({
      doctor: e.target.value
    })
  }

  handleSubmit = e => {
    this.state.start = this.state.start + "T" + this.state.time_start + "Z";
    this.state.end = this.state.end + "T" + this.state.time_end + "Z";
    this.state.is_valid = true;
    console.log(this.state.start + " " + this.state.end);
    e.preventDefault();
    const {start, end, title, hospital, description, creator, rule, calendar, doctor} = this.state;
    console.log({start, end, title, hospital, description,creator, rule, calendar, doctor} );
    const lead = {start, end, title, hospital, description, creator, rule, calendar,doctor} ;
    const temp = JSON.stringify(lead)
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('http://localhost:8000/schedule/api-event/', conf).then(response => console.log(response));
    this.setState({['is_valid']:true});
}
  render(){
    let reload;
    if(this.state.is_valid){
      reload = (
        <div>
          {window.location.href='http://localhost:3000/ScheduleTable'}
        </div>
      );
    }
    else{
      reload = (
        <div>
        </div>
      );
    }
    return(
      <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
        <div classtitle="top-space espaco espaco-acima">
          <div className="form-style-5">
            <form>
              <h3>Cadastro de horário de médicos</h3>
              <fieldset>

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

              <legend><span className="number">6</span>Data e Hora de Entrada</legend>
              <input id="edID" type="date" title="start" value = {this.state.start} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
              <input id="edID" type="time" title="time_start" value = {this.state.time_start} onChange = {this.onChange}/>

              <legend><span className="number">7</span>Data e Hora de Saída</legend>
              <input id="edID" type="date" title="end" value = {this.state.end} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
              <input id="edID" type="time" title="time_end" value = {this.state.time_end} onChange = {this.onChange}/>
              {reload}
              </fieldset>
            <input type="submit" value="Apply" onClick={this.handleSubmit}/>

          </form>
            </div>
        </div>
        <Footer ></Footer>
      </div>


    );

  }
}

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// import Select from 'react-select';

var date = new Date().toISOString();
// status = True, title= 'Mauricio', start='2018-04-17T17:25:32Z', end='2018-04-20T17:25:34Z', calendar = calendar
export default class DoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_valid : false,
      all_subtitle: [],
      doctor:'0',
      subtitle: '0',
      load_subtitle: [],
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

  async componentDidMount2() {
      try {

        const res = await fetch('http://localhost:8000/subtitle/api-subtitle/');
        const all_subtitle = await res.json();
        console.log(all_subtitle);
        this.setState({all_subtitle});
      } catch (e) {
        console.log(e);
      }
    }

    async componentDidMount3() {
        try {

          const res = await fetch('http://localhost:8000/subtitle/api-subtitle/'+this.state.subtitle+'/');
          const load_subtitle = await res.json();
          console.log(load_subtitle);
          this.setState({load_subtitle});
        } catch (e) {
          console.log(e);
        }
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
      await this.componentDidMount2();
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
  async handleChange2(e){
     await this.setState({
      subtitle: e.target.value
    });
    await this.componentDidMount3();
    await this.setState({
      time_start: this.state.load_subtitle.begin
    });
    await this.setState({
      time_end: this.state.load_subtitle.finish
    })
  }

  handleSubmit = e => {
    console.log("entrou");
    this.setState({"start":this.state.start + "T" + this.state.time_start + "Z"})
    // this.state.start = this.state.start + "T" + this.state.time_start + "Z";
    this.setState({"end":this.state.end + "T" + this.state.time_end + "Z"})
    // this.state.end = this.state.end + "T" + this.state.time_end + "Z";
    this.setState({"is_valid":true})
    // this.state.is_valid = true;
    console.log(this.state.start + " " + this.state.end);
    e.preventDefault();
    const {start, end, hospital, subtitle, creator, rule, calendar, doctor} = this.state;
    console.log({start, end, hospital, subtitle,creator, rule, calendar, doctor} );
    const lead = {start, end, hospital, subtitle,creator, rule, calendar,doctor} ;
    const temp = JSON.stringify(lead)
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('http://localhost:8000/schedule/api-event/', conf).then(response => console.log(response));
    this.setState({'is_valid':true});
}
  render(){
    return(
      <div>
      <NavBar></NavBar>
        <div className="espaco espaco-acima">
          <div className="form-style-5">
            <form>
              <h3>Cadastro de horário de médicos</h3>
              <fieldset>

                <legend><span className="number">1</span> Médicos </legend>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.handleChange.bind(this)} value={this.state.doctor} title="doctor">
                <option selected>Escolha um médico...</option>
                {this.state.all_doctors.map(item =>(
                <option value={item.id}> {item.name} - {item.registration}</option>


            ))}
              </select>
              <legend><span className="number">2</span> Legenda </legend>
              <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.handleChange2.bind(this)} value={this.state.subtitle}>
              <option selected>Escolha uma Legenda...</option>
              {this.state.all_subtitle.map(item =>(
              <option value={item.id}> {item.code} - {item.begin} - {item.finish} - {item.description} </option>



          ))}
            </select>

              <legend><span className="number">3</span>Hospital</legend>
              <input id="hospitalID" type="text" title="hospital" value={this.state.hospital} onChange = {this.onChange} placeholder="Digite o Hospital"/>

              <legend><span className="number">4</span>Data de Entrada</legend>
              <input id="edID" type="date" title="start" value = {this.state.start} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>

              <legend><span className="number">5</span>Data de Saída</legend>
              <input id="edID" type="date" title="end" value = {this.state.end} onChange={this.onChange} placeholder="" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
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

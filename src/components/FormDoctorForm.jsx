import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';

var date = new Date().toISOString();

export default class FormDoctorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor:'0',
      subtitle: '0',
      isValid : false,
      load_subtitle: [],
      start: date ,
      time_start:'',
      end: date,
      time_end:'',
      description:'',
      hospital:'',
      creator: '1',
      allSubtitle: [],
      calendar:'1',
      all_doctors: [],
    }
     this.onChange = this.onChange.bind(this);
     this.onChange2 = this.onChange2.bind(this);
  }

  async componentDidMount2() {
      try {

        const res = await fetch("https://gicsaude.herokuapp.com/subtitle/api-subtitle/");
        const allSubtitle = await res.json();
        console.log(allSubtitle);
        this.setState({allSubtitle});
      } catch (e) {
        console.log(e);
      }
    }

    async componentDidMount3() {
        try {

          const res = await fetch("https://gicsaude.herokuapp.com/subtitle/api-subtitle/"+this.state.subtitle+'/');
          const load_subtitle = await res.json();
          console.log(load_subtitle);
          this.setState({load_subtitle});
        } catch (e) {
          console.log(e);
        }
      }

  async componentDidMount() {
      try {

        const res = await fetch("https://gicsaude.herokuapp.com/doctor/api-doctor/");
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
    const valueu = e.target.value === "checkbox" ? e.target.checked : e.target.value;
    this.setState({[title] : valueu});
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
  redirectPage(){
    if(this.state.isValid === true){
      window.location.href = '/ScheduleTable';
      }
  }
   handleSubmit = e => {
    this.state.start = this.props.currentdate + this.state.time_start + "Z";
    this.state.end = this.props.currentdate + this.state.time_end + "Z";
    this.setState({"isValid":true});
    e.preventDefault();
    const {start, end, hospital, subtitle, creator, calendar, doctor} = this.state;
    const leade = {start, end, hospital, subtitle,creator, calendar,doctor} ;
    const temp = JSON.stringify(leade)
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch("https://gicsaude.herokuapp.com/schedule/api-event/", conf).then(response => (console.log(response)));
    this.setState({"isValid":true});
    this.redirectPage();
}
  render(){
    return(
      <div>
        <div className="top-space space-top">
          <div className="form-style-5">
            <form>
              <h3>Cadastro de horário de médicos</h3>
              <fieldset>

                <legend><span className="number">1</span> Médicos </legend>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.handleChange.bind(this)} value={this.state.doctor} title="doctor">
                <option defaultValue={0} value={0}>Escolha um médico...</option>
                {this.state.all_doctors.map(item =>(
                <option value={item.id}> {item.name} - {item.registration}</option>


            ))}
              </select>
              <legend><span className="number">2</span> Legenda </legend>
              <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={this.handleChange2.bind(this)} value={this.state.subtitle}>
              <option defaultValue={0} value={0}>Escolha uma Legenda...</option>
              {this.state.allSubtitle.map(item =>(
              <option value={item.id}> {item.code} - {item.begin} - {item.finish} - {item.description} </option>



          ))}
            </select>

              <legend><span className="number">3</span>Hospital</legend>
              <input id="hospitalID" type="text" title="hospital" value={this.state.hospital} onChange = {this.onChange} placeholder="Digite o Hospital"/>


              </fieldset>
            <input type="submit" value="Concluido" onClick={this.handleSubmit}/>

          </form>
            </div>
        </div>
      </div>


    );

  }
}

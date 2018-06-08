import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/DoctorForm.css';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap';




export default class DoctorStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor:[],
      name:'',
      temp_registration:'',
      status:null,
      registration:'',
      CPF:'',
    }
     this.onClick = this.onClick.bind(this);
     this.onChange = this.onChange.bind(this);
     this.onChange2 = this.onChange2.bind(this);
  }
  async componentDidMount() {
      try {
        const name = 'https://gicsaude.herokuapp.com/doctor/api-doctor/update/' + this.state.registration +'/';
        const res = await fetch(name);
        console.log(res);
        const doctor = await res.json();
        console.log(doctor);
        this.setState({doctor});
      } catch (e) {
        console.log(e);
      }
    }

    onChange2(e){
      const title = e.target.title;
      this.setState(
        {[title]: e.target.checked}
      )
    }

  onChange(e){
    const title = e.target.title;
    const value = e.target.value === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[title] : value});
  }

  async onClick(e) {
    await this.setState({"registration":this.state.temp_registration});
    await this.componentDidMount();
    await this.setState({"status":this.state.doctor.status});
    await this.setState({"name":this.state.doctor.name});
    await this.setState({"CPF":this.state.doctor.CPF});
}
  relaod(e){
    window.location.reload();
  }

   handleSubmit = e => {
    e.preventDefault();
    const {name, registration, CPF, status} = this.state;
    console.log({name, registration, CPF, status} );
    const lead = {name, registration, CPF, status} ;
    const temp = JSON.stringify(lead)
    console.log(temp);
    const conf = {
      method: "PUT",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('https://gicsaude.herokuapp.com/doctor/api-doctor/update/'+this.state.doctor.registration+'/', conf).then(response => console.log(response));
}

  render(){


    let information;
    let status;
    if(this.state.doctor.status){
    status = (
      <ListGroupItem  bsStyle="success">Status: True</ListGroupItem>
    );
    }
    else{
      status = (
      <ListGroupItem  bsStyle="success">Status: False</ListGroupItem>
  );
    }
    var list = this.state.doctor;
    console.log(this.state.status);
    if(Object.keys(list).length > 0){
      information=(
        <div>
        <ListGroup>
          <ListGroupItem  bsStyle="success">Nome: {this.state.doctor.name}</ListGroupItem>
          <ListGroupItem  bsStyle="success">Matrícula: {this.state.doctor.registration}</ListGroupItem>
          <ListGroupItem  bsStyle="success">CPF: {this.state.doctor.CPF}</ListGroupItem>
          {status}
        </ListGroup>
        <legend><span class="number">5</span>Status</legend>
        <input id="statusID" type="checkbox" title="status" value={this.state.status} onChange = {this.onChange2} placeholder="Disponível"/>
        </div>
    );
    }
    else{
      information=(
        <div>
          <p>Não encontrado</p>
        </div>
      );
    }
    return(
      <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="espaco espaco-acima top-space">
        <div className="form-style-5">
            <form>
              <h3>Alterar Status do Médico</h3>
              <fieldset>
                <legend><span className="number">1</span> Buscar médico </legend>
                <input id="titleID" type="text" title="temp_registration" value={this.state.temp_registration} onChange={this.onChange} placeholder="Digite o nome do médico aqui" />

                <Button title="registration" onClick={this.onClick}>Buscar</Button>
                {information}
            </fieldset>
              <input type="submit" value="Concluido"
                onClick={this.handleSubmit}/>
            </form>
            </div>
        </div>
        <Footer ></Footer>
      </div>
    );
  }
}

import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/HomePage.css';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer'
import {Carousel} from 'react-bootstrap';

export default class RegistrationAdmin extends Component{
  constructor(props){
    super(props);
    this.state = {
        name:'',
        adress: '',
        phone: '',
        password: '',
        key:'',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const title = e.target.title;
    const value = e.target.value;
    this.setState({[title] : value});
  }
  handleSubmit = e => {
    e.preventDefault();
    const {name,adress,phone,password,key} = this.state;
    const lead = {name,adress,phone,password,key};
    const temp = JSON.stringify(lead)
    console.log(temp);
    const conf = {
      method: "POST",
      body: temp,
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch('http://localhost:8000/administrator/gp-admin-list/', conf).then(response => console.log(response));
}

render(){
  return(
    <div>
    <NavBar></NavBar>
    <SideBar></SideBar>
      <div classtitle="top-space espaco espaco-acima">
        <div class="form-style-5">
          <form>
            <h3>Cadastro de Administradores</h3>
            <fieldset>

            <legend><span class="number">1</span> Nome</legend>
            <input id="titleID" type="text" title="name" value={this.state.name} onChange = {this.onChange} placeholder="Digite o nome aqui" />

            <legend><span class="number">2</span> Endereço</legend>
            <input id="titleID" type="text" title="adress" value={this.state.adress} onChange = {this.onChange} placeholder="Digite o endereço aqui" />

            <legend><span class="number">3</span> Telefone</legend>
            <input id="titleID" type="text" title="phone" value={this.state.phone} onChange = {this.onChange} placeholder="Digite o telefone aqui" />

            <legend><span class="number">4</span> Senha</legend>
            <input className="form-control" id="titleID" type="password" name="password" title="password" value={this.state.password} placeholder="Digite a senha aqui" onChange={this.onChange}/>

          <legend><span class="number">5</span> Chave de validação</legend>
            <input id="titleID" type="text" title="key" value={this.state.key} onChange = {this.onChange} placeholder="Digite a chave aqui" />

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

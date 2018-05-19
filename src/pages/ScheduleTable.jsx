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

class GridCell extends Component {
  constructor(props){
    super(props);
    this.state = {"line":props.line,"column":props.column,"update":1,};
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

    resolveButton(line,column){
      fetch("http://localhost:8000/doctor/api-doctor/?format=json")
      .then(response => response.json())
      .then(contacts => this.setState({
        contacts
      }))
      .catch(error => console.log("error to get data " + error));
    };

    onClickUpdate(e){
      const title = e.target.title;
      const value = e.target.value;
      this.setState(
        {[title]:value,}
      );
    }


  render(){

    let update;
    if(this.state.update===1){
      this.state.update = 0;
      update = (
        <div>{this.resolveButton(this.props.line,this.props.column)}</div>
      )
    }else {
      update = (
        <div></div>
      )
    }
    return(
      <td>
      {update}
      <div className="">
        <div className="">
          {
            this.state.contacts != null ? this.state.contacts.map(user =>
              <div className ="doctorName"><span>{user.name}</span><br></br><br></br></div>
            )
            : null
          }
        </div>
      </div>

      </td>
    )
  }
}

export default class ScheduleTable extends Component {
    constructor(){
      super();
      this.state={"content":"Selecione uma opcao", "popup":"", "contacts":""};
    }



    daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
    }

    TableList(number,type){
      var date = new Date();
      var month = date.getMonth() + 1;
      var year = date.getYear();
      var lists=[];
      var periods = [
      "MANHÃ",
      "",
      "",
      "TARDE",
      "NOITE",
      ];
      var leg = [
      "ENF",
      "P2",
      "PS",
      "PS",
      "PS",
      ];
      var rows = [];
      var contador = 0;

      if(type){
        for(var aux = 0; aux < this.daysInMonth(month,year); aux++){

          rows.push(<GridCell className="inc"  line={3} column={aux}></GridCell>)
        }
        for(var cont = 0;cont <= number; cont++){
          lists.push(

          <tr>
            <td><h3 className="toptobottom">{periods[cont]}</h3></td>
            <td><h3 className="toptobottom leg-styling">{leg[cont]}</h3></td>
            {rows}
            </tr>
          )
        }
      }else{
        for(var aux = 0; aux < 1; aux++){

          rows.push(<GridCell className="inc"  line={4} column={aux}></GridCell>)
          rows.push(<td>TERÇA FEIRA</td>)
          rows.push(<td>11,13,23</td>)
          rows.push(<td>7-12</td>)
        }
        for(var cont = 0;cont <= number; cont++){
          lists.push(
            <tr>
              {rows}
            </tr>
          )
        }
      }

    return lists;
    }

    TableHeader(type){
      var esp = new Date(2018,4,1);
      var semana = esp.getDay();
      var date = new Date();
      var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var rows = [];
      var escolhido;

      if(type){
        for(var aux = 0; aux < this.daysInMonth(month,year); aux++){
          esp = new Date(year,month-1,aux+1);
          escolhido = days[esp.getDay()];
          rows.push(<th>{escolhido}<br className="header-br"></br> {aux+1}</th>)
        }
      }else {
        rows.push(<th className="especialidade-td">Profissional</th>)
        rows.push(<th className="especialidade-td">Dia da Semana</th>)
        rows.push(<th className="especialidade-td">Data</th>)
        rows.push(<th className="especialidade-td">Horário</th>)
      }


      return rows;
    }
    TableCols(){
      var esp;
      var date = new Date();
      var days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var rows = [];
      var escolhido;
      var cont = 0;
      for(var aux = 0; aux < this.daysInMonth(month,year); aux++){
        esp = new Date(year,month-1,aux+1);
        escolhido = days[esp.getDay()];
        if(escolhido == "Sabado" || escolhido == "Domingo"){
          rows.push(<col className="blue"></col>);
        }else
          rows.push(<col></col>)
      }
      return rows;
    }

    getMonthYearName(){
      var date = new Date();
      var months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
      var month = date.getMonth();
      var year = date.getFullYear();
      var title = [];
      title.push(" - ");
      title.push(months[month]);
      title.push(" De ");
      title.push(year);
      return title;
    }

    fetchData(){

      fetch("http://localhost:8000/doctor/api-doctor/?format=json")
      .then(response => response.json())
      .then(contacts => this.setState({
        contacts
      }))
      .catch(error => console.log("error to get data " + error));
    }


    resolveButtonMonth(){
      var popup = (
        <Popup
        trigger={<button className="btn btn-outline-primary">Relatorio Diario</button>}
        modal
        closeOnDocumentClick
        >

        <div className="popupShape ">
          <div className="pre-scrollable">
            <h4 className='modal-header whitename'>Médicos</h4>
            {
              this.state.contacts != null ? this.state.contacts.map(user =>
                  <div><strong>Nome: </strong> <span>{user.name}</span><br></br><strong>Função: </strong>Médico<br></br><br></br></div>
              )
              : null
            }
          </div>
        </div>
        </Popup>
      )
      this.setState({"component":this.changeTable(true), "popup":popup})
    }

    changeTable(tableNumber){
      var content;
      switch(tableNumber){
        case 1:
           content = (
            <div style={{marginTop:"10px"}}>
              <table style={{display:"inline-block"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
               <thead>
                 <th colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - PSIQUIATRIA - CONSULTA</th>
                 <tr>
                  {this.TableHeader(false)}
                 </tr>
               </thead>
               <tbody>
                  {this.TableList(4,false)}
               </tbody>
                </table>
             <table style={{float:"right"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
              <thead className="parecer-th">
                <th className="parecer-th" colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - PSIQUIATRIA - PARECER</th>
                <tr>
                 {this.TableHeader(false)}
                </tr>
              </thead>
              <tbody>
                 {this.TableList(0,false)}
              </tbody>
            </table>
            </div>
          )
    break;
      case 2:
        content = (
          <div>
          <h1 style={{marginTop:"20px"}}>Escala {this.getMonthYearName()} - PS ADULTO</h1>
        <table className="wallpaper inc customiza bsClass" striped bordered condensed hover>
                 <colgroup>
                   <col></col>
                   <col></col>
                  {this.TableCols()}
                 </colgroup>
                 <thead>
                   <tr>
                    <th>Horário</th>
                    <th>Leg</th>
                    {this.TableHeader(true)}
                   </tr>
                 </thead>
                 <tbody>
                    {this.TableList(4,true)}
                 </tbody>
       </table>
</div>

       )
       break;

       case 3:
       content = (
         <div style={{marginTop:"10px"}}>
           <table style={{display:"inline-block"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
            <thead>
              <th colSpan="7">Unidade Médica Interna{this.getMonthYearName()} - ENDOCRINOLOGISTA - CONSULTA/PARECER</th>
              <tr>
               {this.TableHeader(false)}
              </tr>
            </thead>
            <tbody>
               {this.TableList(7,false)}
            </tbody>
          </table>
      </div>
       )
       break;

       case 4:
       content = (
         <div style={{marginTop:"10px"}}>
           <table style={{display:"inline-block", marginBottom:"10px"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
            <thead>
              <th colSpan="7">Unidade Médica Interna{this.getMonthYearName()} - GASTROENTEROLOGIA - CONSULTA/PARECER</th>
              <tr>
               {this.TableHeader(false)}
              </tr>
            </thead>
            <tbody>
               {this.TableList(7,false)}
            </tbody>
          </table>
          <table style={{display:"inline-block", float:"right"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
           <thead>
             <th colSpan="7">Unidade Médica Interna{this.getMonthYearName()} - GASTROENTEROLOGIA - ENDOSCOPIA</th>
             <tr>
              {this.TableHeader(false)}
             </tr>
           </thead>
           <tbody>
              {this.TableList(7,false)}
           </tbody>
         </table>
         <table style={{display:"inline-block"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
          <thead>
            <th colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - GASTROENTEROLOGIA - COLONOSCOPIA</th>
            <tr>
             {this.TableHeader(false)}
            </tr>
          </thead>
          <tbody>
             {this.TableList(4,false)}
          </tbody>
        </table>
      </div>
       )
       break;

       case 5:
         content = (
          <div style={{marginTop:"10px"}}>
            <table style={{display:"inline-block"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
             <thead>
               <th colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - NEUROLOGIA - CONSULTA</th>
               <tr>
                {this.TableHeader(false)}
               </tr>
             </thead>
             <tbody>
                {this.TableList(4,false)}
             </tbody>
              </table>
           <table style={{float:"right"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
            <thead className="parecer-th">
              <th className="parecer-th" colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - NEUROLOGIA - PARECER</th>
              <tr>
               {this.TableHeader(false)}
              </tr>
            </thead>
            <tbody>
               {this.TableList(4,false)}
            </tbody>
          </table>
          </div>
        )
      break;
      case 6:
        content = (
         <div style={{marginTop:"10px"}}>
           <table style={{display:"inline-block"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
            <thead>
              <th colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - REUMATOLOGIA - CONSULTA</th>
              <tr>
               {this.TableHeader(false)}
              </tr>
            </thead>
            <tbody>
               {this.TableList(4,false)}
            </tbody>
             </table>
             <table style={{float:"right"}} className="wallpaper customiza bsClass" striped bordered condensed hover>
              <thead className="parecer-th">
                <th className="parecer-th" colSpan="4">Unidade Médica Interna{this.getMonthYearName()} - REUMATOLOGIA - PARECER</th>
                <tr>
                 {this.TableHeader(false)}
                </tr>
              </thead>
              <tbody>
                 {this.TableList(4,false)}
              </tbody>
            </table>
         </div>
       )
       break;
     }

        this.setState({"content":content})
      }

      componentDidMount(){
        this.changeTable(2)
      }

      render() {

	return (
	  <div>
	    <NavBar></NavBar>
      <SideBar></SideBar>
	    <h1>Quadro de Horários</h1>
        <div className="container" style={{marginTop:"70px",marginRight:"35%",marginBottom:"70px",}}>
          <div className="jumbotron jumbosize ">


            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
                  <ToggleButton className="btn btn-outline-primary" value={2} onClick={()=>this.changeTable(2)}>Pronto Socorro</ToggleButton>
                  <ToggleButton className="btn btn-outline-primary" value={1} onClick={()=>this.changeTable(1)}>Psiquiatria</ToggleButton>
                  <ToggleButton className="btn btn-outline-primary" value={3} onClick={()=>this.changeTable(3)}>Endocrinologia</ToggleButton>
                  <ToggleButton className="btn btn-outline-primary" value={4} onClick={()=>this.changeTable(4)}>Gastroenterologia</ToggleButton>
                  <ToggleButton className="btn btn-outline-primary" value={5} onClick={()=>this.changeTable(5)}>Neurologia</ToggleButton>
                  <ToggleButton className="btn btn-outline-primary" value={6} onClick={()=>this.changeTable(6)}>Reumatologia</ToggleButton>

                </ToggleButtonGroup>
            </ButtonToolbar>
                {this.state.content}
          </div>
        </div>
       <Footer></Footer>
	    </div>
	);
    }
}

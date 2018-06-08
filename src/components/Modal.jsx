import React, {Component} from 'react';
import '../css/bootstrap.css';
import '../css/Modal.css';
import UpdateSchedule from '../pages/UpdateSchedule';
import FormUpdate from '../components/FormUpdate';
import {Table,ButtonToolbar,ToggleButtonGroup,ToggleButton,Modal,Button} from 'react-bootstrap';

export default class MySmallModal extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        status: true,
        doctor: [],
        doctor_events_list: [],
        current_doctor_id:'',
        is_visible:false,
      };
      this.changeSchedule = this.changeSchedule.bind(this);
    }


  toggleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  }

  parseISOLocal(s) {
    let b = s.split(/\D/);
    console.log(b);
    return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
  }

  async componentDidMount4() {
      try {
        const name = 'http://localhost:8000/doctor/api-doctor/list-doctor/1/?name=' + this.props.currentdoctor;
        console.log(name);
        const res = await fetch(name);
        console.log(res);
        const doctor = await res.json();
        console.log(doctor);
        this.setState({doctor});
      } catch (e) {
        console.log(e);
      }
    }

    async componentDidMount5() {
        var date = new Date(this.props.currentstart);
        var newStart = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        var resultStart = newStart.toISOString();
        var date = new Date(this.props.currentend);
        var newEnd = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        var resultEnd = newEnd.toISOString();
        try {
          const name = 'http://localhost:8000/schedule/api-event/list-doctor/?doctor=' + this.state.current_doctor_id + '&start=' + resultStart + '&end=' + resultEnd;
          console.log(name);
          const res = await fetch(name);
          console.log(res);
          const doctor_events_list = await res.json();
          console.log(doctor_events_list);
          this.setState({doctor_events_list});
        } catch (e) {
          console.log(e);
        }
      }

     async changeSchedule(e){
      await this.componentDidMount4();
      this.setState({current_doctor_id:this.state.doctor[0].id});
      await this.componentDidMount5();
      this.setState({is_visible:true});
    }

  render() {
    console.log(this.state.is_visible);
    let form;
    if(this.state.is_visible){
      form = (<FormUpdate eventid={this.state.doctor_events_list[0].id}></FormUpdate>);
    }else{
      form = (<div></div>);
    }
    return (
      <Modal
        className="height-modal modal"
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header className="modal-header-align" >
          <h2 className="modal-header-title">{this.props.currentdoctor}</h2>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <div>
            <Button onClick={this.changeSchedule} bsSize="large" bsStyle="primary">Alterar Horário</Button><br></br><br></br><br></br>
            {form}
            <h4>Inicio</h4>
            <p>{this.props.currentstart}</p>
            <h4>Fim</h4>
            <p>{this.props.currentend}</p><br></br><br></br><br></br>
            <Button bsSize="large" bsStyle="primary">Alterar Status</Button><br></br><br></br><br></br>
            <Button onClick={this.props.onHide} bsStyle="danger">Close</Button><br></br>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

import React, {Component} from 'react';
import '../css/bootstrap.css';
import '../css/Modal.css';
import UpdateSchedule from '../pages/UpdateSchedule';
import FormDoctorForm from '../components/FormDoctorForm';
import {
  Table,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Modal,
  Button
} from 'react-bootstrap';

export default class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    //
    // this.changeSchedule = this.changeSchedule.bind(this);
    // this.onSetVisible = this.onSetVisible.bind(this);
  }



  parseISOLocal(s) {
    let b = s.split(/\D/);
    return (b[0]+ "-" + b[1] + "-" + b[2] + "T");
  }


  onSetVisible(e){

    this.setState({is_visible: false});
  }

  render() {
    let form = (<FormDoctorForm currentdate={this.parseISOLocal(this.props.formday)}> </FormDoctorForm>);
    return (<Modal className="height-modal modal" {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header className="">
        <h2 className="modal-header-title">{this.props.formday}</h2>
      </Modal.Header>
      <Modal.Body className="modal-content">
        <div>
          {form}
        </div>
      </Modal.Body>
    </Modal>);
  }
}

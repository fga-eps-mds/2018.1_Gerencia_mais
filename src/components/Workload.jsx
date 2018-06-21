import {Modal,Button} from "react-bootstrap";
import React, { Component } from "react";

export default class Workload extends Component {

  render() {
    let doctors = [];
    let doctor;
    for (var count = 0; count < this.props.doctors.length; count++) {
      doctor = this.props.doctors[count];
      doctors.push(
        <div>
          <h4>Doutor: {doctor.name} | Carga Horária: {doctor.workload}</h4>
          <br></br>
        </div>
      )
    }

    return (
      <Modal
        className="modal-height modal"
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header className="" >
          <h1 className="modal-header-align ">Carga Horária</h1>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <div>
            <legend> Médicos </legend>
                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                <option defaultValue={0} value={0}>Escolha um médico...</option>
                {this.props.doctors.map(each => (
                <option>Doutor: {each.name} | Carga Horária: {each.workload}</option>

            ))}
              </select>
            {doctors}
            <Button onClick={this.props.onHide} bsStyle="danger">Close</Button><br></br>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

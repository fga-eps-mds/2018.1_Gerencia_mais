import React from "react";
import "../css/bootstrap.css";
import "../css/Modal.css";
import FormDoctorForm from "../components/FormDoctorForm";
import {
  Modal,
  Button
} from "react-bootstrap";

export default class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  parseISOLocal(s) {
    let b = s.split(/\D/);
    return (b[0]+ "-" + b[1] + "-" + b[2] + "T");
  }
  parseISOLocalTitle(s) {
    let b = s.split(/\D/);
    return (b[2]+ "/" + b[1] + "/" + b[0]);
  }

  render() {
    console.log(this.props.formday);
    let form = (<FormDoctorForm currentdate={this.parseISOLocal(this.props.formday)}> </FormDoctorForm>);
    return (<Modal className="height-modal modal" {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header className="">
        <h2 className="modal-header-title">{this.parseISOLocalTitle(this.props.formday)}</h2>
      </Modal.Header>
      <Modal.Body className="modal-content">
        <div>
          {form}
          <Button onClick={this.props.onHide} bsStyle="danger">Close</Button>
        </div>
      </Modal.Body>
    </Modal>);
  }
}

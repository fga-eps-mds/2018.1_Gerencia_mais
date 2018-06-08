import React, {Component} from 'react';
import '../css/bootstrap.css';
import '../css/Modal.css';
import {Table,ButtonToolbar,ToggleButtonGroup,ToggleButton,Modal,Button} from 'react-bootstrap';

export default class MySmallModal extends React.Component {
  state = {
    status: true,
  };

  toggleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  }
  render() {
    return (
      <Modal
        className="modal-height modal modal-head"
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header className="" >
          <h1 className="modal-header-align ">{this.props.currentdoctor}</h1>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <div>
            <Button onClick={this.toggleStatus} bsSize="large" bsStyle="primary">Alterar Horário</Button><br></br><br></br><br></br>
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

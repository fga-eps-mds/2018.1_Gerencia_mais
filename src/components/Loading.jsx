import {Modal,Button} from "react-bootstrap";
import React, { Component } from "react";

export default class Workload extends Component {

  render() {


    return (
      <Modal
        className="modal-height modal"
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header className="" >
          <h1 className="modal-header-align">{this.props.message}</h1>
        </Modal.Header>
      </Modal>
    );
  }
}

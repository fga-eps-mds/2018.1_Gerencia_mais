import {Modal, Button} from "react-bootstrap";
import React, { Component } from "react";

export default class Workload extends Component {

  render() {
  //   <Modal
  //     className="modal-height modal"
  //     {...this.props}
  //     bsSize="large"
  //     aria-labelledby="contained-modal-title-lg"
  //   >
  //   <Modal.Header className=" newcolo" >
  //     <h1 className="modal-header-align newcolor">{this.props.message}</h1>
  //   </Modal.Header>
  // </Modal>

    return (
      <Modal
       {...this.props}
       bsSize="small"
       aria-labelledby="contained-modal-title-sm"
     >
       <Modal.Header>
         <Modal.Title id="contained-modal-title-sm"><h1 className='beautiful_text_white margin-top-30 modal-header-title'>Gerencia +</h1></Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <p className='text-success'>
           {this.props.message}
         </p>
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={this.props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
    );
  }
}

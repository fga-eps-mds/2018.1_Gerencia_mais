import React, {Component} from 'react';
import '../css/bootstrap.css';
import {Modal} from 'react-bootstrap';

export default class Modal extends Component {
constructor(props) {
  super(props);
  this.state = {}
}
}
render() {
  return (
    <MySmallModal show={this.state.smShow} onHide={smClose} currentdoctor={this.state.current_doctor}
    currentstart={this.state.current_start} currentend={this.state.current_end}  />
      );
}
}

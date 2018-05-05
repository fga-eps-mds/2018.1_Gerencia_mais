import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
// import {Carousel} from 'react-bootstrap';

class Footer extends Component {
  render(){
    return (
      <footer style={{marginTop:"15%"}} className="py-5 bg-dark margin_top">
        <div className="container footerx">
          <p className="m-0 text-center text-white">Copyright &copy; GM 2018</p>
        </div>
      </footer>

    );
  }
}

export default Footer;

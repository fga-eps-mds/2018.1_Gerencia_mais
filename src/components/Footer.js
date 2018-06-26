import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../css/bootstrap.css';
import "../css/footer.css";
// import {Carousel} from 'react-bootstrap';

class Footer extends Component {
  render(){
    return (
      <footer style={{marginTop:"260px",marginHeight:"260px"}} className="py-5 bg-dark">
  <div className="container footerx">
    <p className="m-0 text-center text-white">Copyright &copy; GM 2018</p>
  </div>
      </footer>

    );
  }
}

export default Footer;

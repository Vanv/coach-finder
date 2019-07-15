// Header.js
import React, {Component} from 'react';
import logo from './images/logo.png';
class Header extends Component {


  render(){
    return (
    <div>
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1 text-left">
        <a className="text-muted" href="#">Subscribe</a>
      </div>
      <div className="col-4 text-center">
        <a className="blog-header-logo text-dark" href="#">
          <img src={logo} alt="Coach Finder" />
        </a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="text-muted" href="#">
      </a> <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
    </div>
    )
  }
}

export default Header;

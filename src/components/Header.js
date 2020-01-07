// Header.js
import React, {Component} from 'react';
import logo from '../images/logo.png';
class Header extends Component {


  render(){
    const {user} = this.props;

    return (
    <div>
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1 text-left">
        {/*<a className="text-muted" href="#">Subscribe</a>*/}
      </div>
      <div className="col-4 text-center">
        <a className="blog-header-logo text-dark" href="#">
          <img src={logo} alt="Coach Finder" />
        </a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
      {user && (
        <span>
          Welcome {user}
        </span>
      )}
      </div>
    </div>
    </div>
    )
  }
}

export default Header;

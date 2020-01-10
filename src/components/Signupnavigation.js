import React, {Component} from 'react';
import { FaUsers, FaSearch, FaRegRegistered } from 'react-icons/fa';
import { Link } from '@reach/router';
import logo from '../images/logo-new.png';


class Signupnavigation extends Component {
  render() {
    const {user} = this.props;

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav-bg">
        <div className="container">
        <div className="row align-items-center top-nav">
          <div className="col-6 pt-1 text-left">
          <a className="blog-header-logo text-dark" href="#">
            <img src={logo} alt="Coach Finder" />
          </a>
            {/*<a className="text-muted" href="#">Subscribe</a>*/}
          </div>
          <div className="col-2 text-center text-white">
            {user && (
              <span>
                Welcome {user}
              </span>
            )}
          </div>
          <div className="col-4 d-flex justify-content-end">
            <div className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link p-2" >
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link p-2" >
                About
              </Link>
              <Link to="/contactus" className="nav-item nav-link p-2">
                  Contact us
                </Link>
              {!user && (
                <span className="signup">
                <Link className="nav-item nav-link" to="/login">
                  Log in
                </Link>
                <Link className="nav-item nav-link" to="/register">
                  Register <FaRegRegistered className="ml-1"/>
                 </Link>
                </span>
              )}
              {user && (
                <Link className="nav-item nav-link " to="/logout">
                  Log out
                </Link>
              )}
            </div>

          {/*


          */}
          </div>
        </div>


        </div>
      </nav>

    );
  }
}

export default Signupnavigation;

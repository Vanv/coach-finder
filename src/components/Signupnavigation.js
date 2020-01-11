import React, {Component} from 'react';
import { FaUsers, FaSearch, FaRegRegistered } from 'react-icons/fa';
import { Link } from '@reach/router';
import logo from '../images/logo-new.png';


class Signupnavigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav-bg">
        <div className="container">
          <div className="row align-items-center top-nav">
              <div className="col-6 pt-1 text-left">
                {/*<a className="blog-header-logo text-dark" href="/">
                  <img src={logo} alt="Coach Finder" />
                </a>
                */}
                <Link to="/" className="navbar-brand">
                  <FaUsers className="mr-1" /> Meeting Log
                </Link>
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
                <Link to="/about" className="nav-item nav-link p-2" >
                  About
                </Link>
                <Link to="/contactus" className="nav-item nav-link p-2">
                    Contact us
                  </Link>
                  {user && (
                <Link className="nav-item nav-link" to="/meetings">
                  meetings
                </Link>
              )}
              {!user && (
                <Link className="nav-item nav-link" to="/login">
                  log in
                </Link>
              )}
              {!user && (
                <Link className="nav-item nav-link" to="/register">
                  register
                </Link>
              )}
              {user && (
                <Link
                  className="nav-item nav-link"
                  to="/login"
                  onClick={e => logOutUser(e)}
                >
                  log out
                </Link>
              )}


              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  }
}

export default Signupnavigation;

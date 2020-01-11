import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';
import logo from '../images/logo-new.png';

class Navigation extends Component {
  render() {
    const { user, userName, logOutUser } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav-bg">
        <div className="container">
          <a className="blog-header-logo text-dark" href="/">
            <img src={logo} alt="Coach Finder" />
          </a>
          <div className="navbar-nav ml-auto">
            {user && (
              <span className="text-white pl-1 pt-2 px-2">
                Welcome {userName},
              </span>
            )}
            <Link to="/about" className="nav-item nav-link p-2" >
              About
            </Link>
            <Link to="/contactus" className="nav-item nav-link p-2">
                Contact us
              </Link>
              {user && (
                <Link className="nav-item nav-link" to="/addCoach">
                  Add Coach
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
      </nav>
    );
  }
}

export default Navigation;

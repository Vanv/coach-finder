import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';
import logo from '../../images/logo-new.png';

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
            <NavLink to="/about" className="nav-item nav-link p-2" >
              About
            </NavLink>
            <NavLink to="/contactus" className="nav-item nav-link p-2">
                Contact us
              </NavLink>
              {user && (
                <NavLink className="nav-item nav-link" to="/addCoach">
                  Add Coach
                </NavLink>
              )}
              {!user && (
                <NavLink className="nav-item nav-link" to="/login">
                  Log in
                </NavLink>
              )}
              {!user && (
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
              )}
              {user && (
                <NavLink
                  className="nav-item nav-link"
                  to="/login"
                  onClick={e => logOutUser(e)}
                >
                  log out
                </NavLink>
              )}

          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

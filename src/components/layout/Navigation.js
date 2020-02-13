import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { Link } from '@reach/router'
import logo from '../../images/logo-new.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navigation = (props) => {

    const { auth } = props;
    // console.log(auth);

    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark top-nav-bg">
        <div className="container">
          <a className="blog-header-logo text-dark" href="/">
            <img src={logo} alt="Coach Finder" />
          </a>
          <div className="navbar-nav ml-auto">

            <NavLink to="/about" className="nav-item nav-link p-2" >
              About
            </NavLink>
            { links }

            <NavLink to="/contactus" className="nav-item nav-link p-2">
                Contact us
              </NavLink>
          </div>
        </div>
      </nav>
    );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navigation);

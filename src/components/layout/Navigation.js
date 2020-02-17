import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { Link } from '@reach/router'
import logo from '../../images/logo-new.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import CoachPersonalDetails from '../coaches/CoachPersonalDetails'
import { connect } from 'react-redux'


const Navigation = (props) => {

    const { auth, profile } = props;
    // console.log(auth);

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    const getInitials = auth. uid ? <NavLink to="/coachpersonaldetails" className="nav-item nav-link p-2">
      {profile.initials}
      </NavLink> : null

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
              {getInitials}



          </div>
        </div>
      </nav>
    );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navigation);

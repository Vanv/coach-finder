import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers } from 'react-icons/fa'
import { Link } from '@reach/router'
import logo from '../../images/logo-new.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import CoachPersonalDetails from '../coaches/CoachPersonalDetails'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Navigation = (props) => {

    const { auth, profile } = props;
    // console.log(auth);

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    const getInitials = auth. uid ? <NavLink to="/coachpersonaldetails" className="nav-item nav-link p-2">
      {profile.initials}
      </NavLink> : null

    return (
      <div className="top-nav-bg">
          <div className="container">
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/">
              <img src={logo} alt="Coach Finder" className="img-fluid" />
            </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="navbar-toggler navbar-toggler-right"/>

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink to="#features"></NavLink>


              </Nav>
              <Nav className="navbar-right mr-auto">
              <NavLink to="/about" className="nav-item nav-link p-2" >
                About
              </NavLink>
              { links }

              <NavLink to="/contactus" className="nav-item nav-link p-2">
                  Contact us
                </NavLink>
                {getInitials}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
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

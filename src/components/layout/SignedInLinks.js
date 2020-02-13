import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return(
    <div className="navbar-nav ml-auto">
        <NavLink className="nav-item nav-link" to="/addCoach">
          Add Coach
        </NavLink>
        <a onClick={props.signOut } className="nav-item nav-link">Log out</a>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () =>  dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

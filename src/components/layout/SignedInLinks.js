import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Nav } from 'react-bootstrap';

const SignedInLinks = (props) => {
  return(

<React.Fragment>
        <NavLink to="/addCoach" className="nav-item nav-link p-2" >
          Add Coach
        </NavLink>

        <a onClick={props.signOut } className="nav-item nav-link pl-2">Log out</a>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () =>  dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

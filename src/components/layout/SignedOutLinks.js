import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedOutLinks = (props) => {
  return(
    <div className="navbar-nav pl-2">

      <NavLink className="nav-item nav-link" to="/login">
        Log in
      </NavLink>
      <NavLink className="nav-item nav-link" to="/register">
        Register
      </NavLink>
    </div>
  )
}

export default SignedOutLinks

//navigation.js
import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';
import { Link } from '@reach/router';
import About from './About';
import Aboutacoach from './Aboutacoach';

import Contactus from './Contactus';
import Addacoach from './Addacoach';

class Navigation extends Component {

  render(){
    const { user, logOutUser } = this.props;
    return (
    <div>

           <div className="nav-scroller py-1 mb-2">
              <nav className="nav d-flex justify-content-between">
              <div className="navbar-nav ml-auto">

                <ul>
                  <li>
                    <Link to="/home" className="nav-item nav-link p-2 text-muted" >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-item nav-link p-2" >
                      About
                    </Link>
                  </li>
                  <li>
                      <Link to="/addacoach" className="nav-item nav-link p-2">
                        Add a Coach
                      </Link>
                  </li>
            
                  <li>
                      <Link to="/contactus" className="nav-item nav-link p-2">
                        Contact us
                      </Link>
                  </li>
                </ul>
              </div>
                {/*<ul>
                  <li>
                  <NavLink to="/" exact strict className="p-2 text-muted" activeStyle={{color: 'green'}} >Home</NavLink>
                  </li>
                  <li>
                  <NavLink to="/add-a-coach" className="p-2 text-muted" component={<Addacoach />} >Add a Coach</NavLink>
                  </li>
                  <li>
                  <NavLink to="/about" exact className="p-2 text-muted" activeStyle={{color: 'green'}} >About Us</NavLink>
                  </li>
                  <li>
                  <NavLink to="/Aboutacoach" className="p-2 text-muted" component={<Aboutacoach />} >About a Coach</NavLink>
                  </li>

                  <li>
                  <NavLink to="/contactus" className="p-2 text-muted" component={<Contactus />} >Contact us</NavLink>
                  </li>
                </ul>
                */}
              </nav>
        </div>
    </div>
    )
  }
}

export default Navigation;

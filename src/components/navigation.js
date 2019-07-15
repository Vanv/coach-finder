//navigation.js
import React, {Component} from 'react';
import {HashRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import About from './about';
import Aboutacoach from './about-a-coach';
import Route from 'react-router-dom/Route'; 
import Contactus from './contactus';
import Addacoach from './add-a-coach';

class Navigation extends Component {

  render(){
    return (
    <div>
      
           <div className="nav-scroller py-1 mb-2">
              <nav className="nav d-flex justify-content-between">
                <ul>
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
                  <NavLink to="/about-a-coach" className="p-2 text-muted" component={<Aboutacoach />} >About a Coach</NavLink>
                  </li>
                  
                  <li>
                  <NavLink to="/contactus" className="p-2 text-muted" component={<Contactus />} >Contact us</NavLink>
                  </li>
                </ul>
              </nav>
        </div>
    </div>
    )
  }
}

export default Navigation;

import React, {Component} from 'react';
import { FaUsers, FaSearch } from 'react-icons/fa';
import { Link } from '@reach/router';

class Signupnavigation extends Component {
  render() {
    const {user} = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav ml-auto">
            <Link to="/home" className="nav-item nav-link p-2" >
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link p-2" >
              About
            </Link>
              <Link to="/addacoach" className="nav-item nav-link p-2">
                Add a Coach
              </Link>

              <Link to="/contactus" className="nav-item nav-link p-2">
                Contact us
              </Link>

            {!user && (
              <span className="signup">
              <Link className="nav-item nav-link" to="/login">
                Log in
              </Link>
              <Link className="nav-item nav-link" to="/add-a-coach">
                Register <FaSearch className="ml-1"/>
               </Link>
              </span>
            )}
            {user && (
              <Link className="nav-item nav-link " to="/logout">
                Log out
              </Link>
            )}
          </div>

        </div>
      </nav>
    );
  }
}

export default Signupnavigation;

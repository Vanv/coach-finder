import React, {Component} from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

class Signupnavigation extends Component {
  render() {
    const {user} = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav ml-auto">

            {user == null && (
              <span className="signup">
              <Link className="nav-item nav-link active" to="/login">
                Log in
              </Link>
              <Link className="nav-item nav-link active" to="/add-a-coach">
                Register
              </Link>
              </span>
            )}
            {user && (
              <Link className="nav-item nav-link active" to="/logout">
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

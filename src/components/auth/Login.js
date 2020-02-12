import React, {Component} from 'react';
import firebase from '../../config/firebaseConfig';
import FormError from '../../components/FormError';
import {navigate} from '@reach/router';
import loginHeader from "../../images/login-header.jpg";

class Login extends Component {

  state = {
      email: '',
      password: '',
      errorMessage: null
    };

  handleChange = (e) => {
    // const itemName = e.target.name;
    // const itemValue = e.target.value;
    // this.setState({ [itemName]: itemValue});
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // var registrationInfo = {
    //   email: this.state.email,
    //   password: this.state.password
    // };
    e.preventDefault();
    console.log(this.state);
    {/*
    firebase
    .auth()
    .signInWithEmailAndPassword(
      registrationInfo.email,
      registrationInfo.password
    )
    .then(() => {
      navigate('/addCoach');
    })
    .catch(error => {
      if(error.message !== null ) {
        this.setState({ errorMessage: error.message });
      } else {
        this.setState ({ errorMessage: null});
      }
    })
    */}
  }

  render() {
    return (
      <div>
          <div>
            <img className="bannerImage" src={loginHeader} alt="Coach Finder" width="100%" />
          </div>
          <form className="mt-5" onSubmit={this.handleSubmit}>
            <div className="container">
            {/*}<div className="row justify-content-center">
              <div className="col-lg-12 bg-dark mt-4 mb-4">
                <h3 className="d-block p-2 bg-dark text-white">Log in</h3>
              </div>
            </div>*/}
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card text-white bg-dark">
                    <div className="card-body">
                      <h3 className="font-weight-light mb-3">Log in</h3>
                      <section className="form-group">
                        {this.state.errorMessage !== null ? (
                          <FormError
                            theMessage={this.state.errorMessage}
                          />
                        ) : null}
                        <label
                          className="form-control-label sr-only"
                          htmlFor="Email"
                        >
                          Email
                        </label>
                        <input
                          required
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </section>
                      <section className="form-group">
                        <input
                          required
                          className="form-control"
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </section>
                      <div className="form-group text-right mb-0">
                        <button className="btn btn-primary" type="submit">
                          Log in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default Login;

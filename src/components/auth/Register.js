import React, {Component} from 'react'
import firebase from '../../config/firebaseConfig'
import FormError from '../../components/FormError'
import {navigate} from '@reach/router'
import loginHeader from "../../images/login-header.jpg"
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Register extends Component {

  state = {
      email: '',
      password: '',
      errorMessage: null
    };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { auth } = this.props;

    if(auth.uid) return <Redirect to='/' />
    return (
      <div>
          <div>
            <img className="bannerImage" src={loginHeader} alt="Coach Finder" width="100%" />
          </div>
          <form className="mt-5" onSubmit={this.handleSubmit}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card text-white bg-dark">
                    <div className="card-body">
                    <div className="form-row">
                      <h3 className="font-weight-light mb-3">Register</h3>
                      <section className="col-sm-12 form-group">
                        <label
                          className="form-control-label sr-only"
                          htmlFor="displayName"
                        >
                          First Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="displayName"
                          placeholder="First Name"
                          name="displayName"
                          required
                          value={this.state.displayName}
                          onChange={this.handleChange}
                        />
                      </section>
                    </div>
                    <div className="form-row">

                      <section className="col-sm-12 form-group">
                        <label
                          className="form-control-label sr-only"
                          htmlFor="lastName"
                        >
                          Last Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="lastName"
                          placeholder="Last Name"
                          name="lastName"
                          required
                          value={this.state.lastName}
                          onChange={this.handleChange}

                        />
                      </section>
                    </div>
                    <div className="form-row">
                    <section className="col-sm-12 form-group">
                      <label
                        className="form-control-label sr-only"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        required
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </section>

                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <input
                          className="form-control"
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={this.state.confirmPassword}
                          onChange={this.handleChange}
                        />
                      </section>
                    </div>

                    <div className="form-group text-right mb-0 mt-4">
                      <button className="btn btn-light" type="submit">
                        Register
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Register)

import React, { Component } from 'react';
import FormError from './FormError';
import firebase from './Firebase';


class Register extends Component {

  constructor(){
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      sport1: '',
      sport2: '',
      sport3: '',
      hrlyRate: '',
      errorMessage: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({[itemName]: itemValue}, () => {
      if(this.state.password !== this.state.confirmPassword) {
        this.setState({errorMessage: 'Password do not match'});
      } else {
        this.setState({errorMessage: null});
      }
    })
  }

  handleSubmit(e) {
    let registrationInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      sport1: this.state.sport1,
      sport2: this.state.sport2,
      sport3: this.state.sport3,
      hrlyRate: this.state.hrlyRate,
    }
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(
      registrationInfo.email,
      registrationInfo.password
    ).catch(error => {
      if(error.message !== null ) {
        this.setState({errorMessage: error.message});
      } else {
        this.setState ({ errorMessage: null });
      }
    })
  }
  render() {


    return (
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row justify-content-center">

              <div className="col-lg-12 bg-dark mt-4 mb-4">
              <h3 className="d-block p-2 bg-dark text-white">Register as a Coach</h3>

                <h3 className="font-weight-light  text-white"></h3>
              </div>
            </div>
            { (this.state.errorMessage !== null) ? (
              <FormError theMessage={this.state.errorMessage}/>
            ) : null}
            <div className="row justify-content-center">

              <div className="col-lg-8">
                <div className="card text-white bg-dark mb-3">
                  <div className="card-body">

                    <div className="form-row">

                      <section className="col-sm-12 form-group">
                        <label
                          className="form-control-label sr-only"
                          htmlFor="firstName"
                        >
                          First Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="firstName"
                          placeholder="First Name"
                          name="firstName"
                          required
                          value={this.state.value}
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
                          value={this.state.value}
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
                          type="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={this.state.confirmPassword}
                          onChange={this.handleChange}
                        />
                      </section>

                    </div>
                    <div className="form-row">
                    <section className="col-sm-12 form-group">
                      <label className="form-control-label sr-only" htmlFor="sprot1">
                        Sport 1
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="sport1"
                        placeholder="Sport 1"
                        required
                        name="sport1"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                        </section>
                    </div>
                    <div className="form-row">
                    <section className="col-sm-12 form-group">
                      <label className="form-control-label sr-only" htmlFor="sprot2">
                        Sport 2
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="sport2"
                        placeholder="Sport 2"

                        name="sport2"
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label sr-only" htmlFor="sprot3">
                          Sport 3
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="sport3"
                          placeholder="Sport 3"
                          
                          name="sport3"
                          value={this.state.value}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label sr-only" htmlFor="hrlyRate">
                          Hourly Rate
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="hrlyRate"
                          placeholder="Hourly Rate"
                          required
                          name="hrlyRate"
                          value={this.state.value}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-group text-right mb-0 mt-4">
                      <button className="btn btn-primary" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="fields">

                <span className="inputLabel"> Name:</span> <input className="form-control" type="text" value="Name"/>
            </div>
            <div  className="fields">
                <span className="inputLabel">Sports 1:</span> <input className="form-control" type="text" value="Name of the sport1"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Sports 2:</span> <input className="form-control" type="text" value="Name of the sport2"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Sports 3:</span> <input className="form-control" type="text" value="Name of the sport3"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Email:</span> <input className="form-control" type="text" value="email"/>
            </div>
            <div className="fields">
                <span className="inputLabel">Mobile:</span> <input className="form-control" type="text" value=""/>
            </div>

             <div className="fields">
                <input type="submit" className="btn btn-primary btn-lg" value="Submit"/>
            </div>
            */}
        </div>
        </form>
    );
  }
}

export default Register;
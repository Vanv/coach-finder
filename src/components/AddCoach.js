import React, { Component } from 'react';
import FormError from './FormError';
import firebase from './Firebase';


class AddCoach extends Component {

  constructor(props){
    super(props);

    this.state = {
      sport1: '',
      sport1HrlyRate: '',
      sport2: '',
      sport2HrlyRate: '',
      location:'',
      otherAreas: '',
      shortDescription: '',
      errorMessage: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    this.setState({[itemName]: itemValue});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addCoach(
      this.state.sport1,
      this.state.sport1HrlyRate,
      this.state.sport2,
      this.state.sport2HrlyRate,
      this.state.location,
      this.state.otherAreas,
      this.state.shortDescription
    );
    this.setState({
      sport1: '',
      sport1HrlyRate: '',
      sport2: '',
      sport2HrlyRate: '',
      location: '',
      otherAreas:'',
      shortDescription: ''
    });
  }
  render() {


    return (
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12 bg-dark mt-4 mb-4">
                <h3 className="d-block p-2 bg-dark text-white">Add Coach</h3>
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
                        <label className="form-control-label" htmlFor="sport1">
                          Sport 1
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="sport1"
                          placeholder="Badminton, Tennis or Cricket"
                          required
                          name="sport1"
                          value={this.state.sport1}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="sport1HrlyRate">
                          Sport 1 Hourly Rate
                        </label><br />
                        <input
                          className="form-control"
                          type="text"
                          id="sport1HrlyRate"
                          placeholder="50, 60 or 70"
                          name="sport1HrlyRate"
                          value={this.state.sport1HrlyRate}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="sport2">
                          Sport 2
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="sport2"
                          placeholder="Squash, Netball or Rugby"
                          name="sport2"
                          value={this.state.sport2}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>

                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="sport2HrlyRate">
                          Sport 2 Hourly Rate
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="sport2HrlyRate"
                          placeholder="Sport 2 Hourly Rate"
                          name="sport2HrlyRate"
                          value={this.state.sport2HrlyRate}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="location">
                          Location of your Coaching Base
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="location"
                          placeholder="Location"
                          name="location"
                          value={this.state.location}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="otherAreas">
                          Location and other areas available for Coaching
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="otherAreas"
                          placeholder="Other Areas"
                          name="otherAreas"
                          value={this.state.otherAreas}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="shortDescription">
                          Brief Desctiption about yourself
                        </label>
                        <textarea
                          className="form-control"
                          type="text"
                          id="shortDescription"
                          placeholder="Breif desctiption about you"
                          required
                          name="shortDescription"
                          value={this.state.shortDescription}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-group text-right mb-0 mt-4">
                      <button className="btn btn-light" type="submit">
                        Add Coach
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </form>
    );
  }
}

export default AddCoach;

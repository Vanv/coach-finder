import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCoach } from '../../store/actions/coachActions'
import FormError from '../FormError'
import addCoachHeader from "../../images/add-coach.jpg"
import { Redirect } from 'react-router-dom'

class AddCoach extends Component {

  state = {
      sport1: '',
      sport1HrlyRate: '',
      sport2: '',
      sport2HrlyRate: '',
      location:'',
      otherAreas: '',
      shortDescription: '',
      errorMessage: null
  }

  handleChange = (e) => {
    // const itemName = e.target.name;
    // const itemValue = e.target.value;
    // this.setState({[itemName]: itemValue});
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createCoach(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;

    if(!auth.uid) return <Redirect to='/login' />

    return (
      <div>
        <div>
          <img className="bannerImage" src={addCoachHeader} alt="Coach Finder" width="100%" />
        </div>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <div className="container-fluid">
            { (this.state.errorMessage !== null) ? (
              <FormError theMessage={this.state.errorMessage}/>
            ) : null}
            <div className="row justify-content-center">

              <div className="col-lg-8">
                <div className="card text-white bg-dark mb-3">
                  <div className="card-body">
                    <h3 className="font-weight-light mb-3">Add Coach</h3>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="sport1">
                          Sport 1 (Eg: Badminton, Tennis or Cricket)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="sport1"
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
                          Sport 1 Hourly Rate (Eg: 50, 60 or 70)
                        </label><br />
                        <input
                          className="form-control"
                          type="text"
                          id="sport1HrlyRate"
                          name="sport1HrlyRate"
                          value={this.state.sport1HrlyRate}
                          onChange={this.handleChange}
                          />
                        </section>
                    </div>
                    <div className="form-row">
                      <section className="col-sm-12 form-group">
                        <label className="form-control-label" htmlFor="sport2">
                          Sport 2 (Eg: Squash, Netball or Rugby)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="sport2"
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
    </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createCoach: (coach) => dispatch(createCoach(coach))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCoach);

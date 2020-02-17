import React, { Component } from 'react'
import { connect } from 'react-redux'

class CoachPersonalDetails extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="container mt-5">
        <h4>Personal Details</h4>
        <b>First Name</b>: {profile.firstName} <br/>
        <b>Last Name</b>: {profile.lastName} <br/>
        <b>Email:</b> {profile.email}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(CoachPersonalDetails)

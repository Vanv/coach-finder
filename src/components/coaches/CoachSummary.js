import React, { Component } from 'react'
import { connect } from 'react-redux'

const CoachSummary = ({auth, coach}) => {
    return (
      <div className="dashboard mt-4">
        <div className="card w-100 mb-4">
          <div className="card-body">
            <h5 className="card-title">{coach.sport1} - ${coach.sport1HrlyRate}</h5>
            <p className="card-text">{coach.shortDescription}</p>
            <p><b>Posted by: </b>{coach.authorFirstName} {coach.authorLastName}</p>
            <p><b>Email: </b>{coach.email}</p>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(CoachSummary)

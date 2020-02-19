import React, { Component } from 'react'
import moment from 'moment'

const CoachSummary = ({ coach }) => {
    return (
      <div className="dashboard mt-4">
        <div className="card w-100 mb-4">
          <div className="card-body">
            <h5><b>Coach Name: </b>{coach.coachFirstName} {coach.coachLastName}</h5>

            <h6 className="card-title">{coach.sport1} - ${coach.sport1HrlyRate}</h6>
            <h6 className="card-title">{coach.sport2} - ${coach.sport2HrlyRate}</h6>
            <p className="card-text">{coach.shortDescription}</p>
            <p><b>Email: </b>{coach.email}</p>
            <p>{moment(coach.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    )
}


export default CoachSummary

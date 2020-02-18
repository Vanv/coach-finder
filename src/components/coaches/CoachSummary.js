import React, { Component } from 'react'
import moment from 'moment'

const CoachSummary = ({ coach }) => {
    return (
      <div className="dashboard mt-4">
        <div className="card w-100 mb-4">
          <div className="card-body">
            <h5 className="card-title">{coach.sport1} - ${coach.sport1HrlyRate}</h5>
            <p className="card-text">{coach.shortDescription}</p>
            <p><b>Posted by: </b>{coach.coachFirstName} {coach.coachLastName}</p>
            <p><b>Email: </b>{coach.email}</p>
            <p>{moment(coach.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    )
}


export default CoachSummary

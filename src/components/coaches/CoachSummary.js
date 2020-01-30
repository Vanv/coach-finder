import React, { Component } from 'react'


const CoachSummary = ({coach}) => {
    return (
      <div className="dashboard mt-4">
        <div className="card w-100 mb-4">
          <div className="card-body">
            <h5 className="card-title">{coach.sport1} - ${coach.sport1HrlyRate}</h5>
            <p className="card-text">{coach.shortDescription}</p>
          </div>
        </div>
      </div>
    )
}

export default CoachSummary

import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { IoIosMail } from 'react-icons/io'


const CoachSummary = ({ coach }) => {
    return (
      <div className="dashboard mt-4">
        <div className="card w-100 mb-4">
          <div className="card-body">
            <h5><b>Coach Name: </b>{coach.coachFirstName} {coach.coachLastName}</h5>

            <h6 className="card-title">{coach.sport1} - ${coach.sport1HrlyRate}</h6>
            <h6 className="card-title">{coach.sport2} - ${coach.sport2HrlyRate}</h6>
            <p className="card-text">{coach.shortDescription}</p>
            <p>{moment(coach.createdAt.toDate()).calendar()}</p>
            <div className="text-right">

              <a href={"mailto:" + coach.email} className="btn btn-dark btn-sm"><IoIosMail /></a>
              <Link to={'/coach/' + coach.id} key={coach.id}>
                <button type="button" className="btn btn-info btn-sm ml-2">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}


export default CoachSummary

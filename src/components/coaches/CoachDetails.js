import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const CoachDetails = (props) => {
  // const id = props.match.params.id;
  // console.log(props);
  const { coach } = props;

  if(coach) {
    return (
      <div className="dashboard container">
        <h2 className="mt-5 mb-5 pl-4">CoachDetails</h2>
          <div className="card w-100 mb-5">
            <div className="card-body">
              <h3 className="card-title">Sport 1:  {coach.sport1}</h3>
              <p>Hourly: ${coach.sport1HrlyRate}</p>
              <h4>Sport 2: {coach.sport2}</h4>
              <p>Hourly: ${coach.sport2HrlyRate}</p>
              <p>Coach Name: {coach.authorFirstName} {coach.authorLastName}</p>
              <p className="card-text">{coach.shortDescription}</p>
              <p><b>Email: </b>{coach.email}</p>
            </div>
          </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        Loading coaches...
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const coaches = state.firestore.data.coaches;
  const coach = coaches  ? coaches[id] : null
  return {
    coach: coach
  }
}

export default  compose(
   connect(mapStateToProps),
   firestoreConnect([
     { collection: 'coaches' }
   ])
)
(CoachDetails)

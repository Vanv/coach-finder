import React, { Component } from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const CoachEdit = (props) => {

    const { coach } = props;
    console.log(props);
    if(coach) {
      return (
        <div className="container mt-5">
          <h4>Edit or Update your details</h4>
          {coach.sport1}
        </div>
      )
    }
  }


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const coaches = state.firestore.data.coaches;
  const coach = coaches ? coaches[id]: null
  return {
    coach : coach
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'coaches' }
  ])
)(CoachEdit)

import React, { Component } from 'react'
import Banner from '../layout/Banner'
import Notifications from './Notifications'
import CoachList from '../coaches/CoachList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { coaches } = this.props;
    return (
      <div>
          <div className="container-fluid px-0">
            <Banner />
          </div>
          <div className="dashboard container mt-5">
            <div className="row">
              <div className="col-sm-8">
              <h2>Dashboard</h2>
              <CoachList coaches={coaches}/>
              </div>
              <div className="col-sm-4">
                <Notifications />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    coaches: state.firestore.ordered.coaches
  }
}


export default compose (
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'coaches' }
  ])

)(Dashboard)

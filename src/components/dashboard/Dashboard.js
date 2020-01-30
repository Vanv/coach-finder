import React, { Component } from 'react'
import Notifications from './Notifications'
import CoachList from '../coaches/CoachList'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col-8">
          <h2>Dashboard</h2>
          <CoachList />
          </div>
          <div className="col-4">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard

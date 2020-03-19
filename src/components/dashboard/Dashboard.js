import React, { Component } from 'react'
import Banner from '../layout/Banner'
import RecentActivities from './RecentActivities'
import CoachList from '../coaches/CoachList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { ThemeContext } from '../../contexts/ThemeContext'


class Dashboard extends Component {

  // static contextType = ThemeContext;
  render() {
    console.log(this.props);
    const { coaches, recentactivities } = this.props;
    console.log(this.context);
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
                        <RecentActivities recentactivities={recentactivities}/>
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
    coaches: state.firestore.ordered.coaches,
    recentactivities: state.firestore.ordered.recentactivities
  }
}


export default compose (
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'coaches', orderBy: ['createdAt', 'desc'] },
    {collection: 'recentactivities', limit: 3, orderBy: ['time', 'desc']}
  ])

)(Dashboard)

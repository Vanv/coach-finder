import React, { Component } from 'react'


const RecentActivities = (props) => {
    return (
      <div className="section">
        <div className="card w-100 mb-5">
          <div className="card-body">
            <h3 className="card-title">Recent Activities</h3>
              <ul className="recentActivities">
                <li>Activity 1</li>
                <li>Activity 2</li>
                <li>Activity 3</li>
              </ul>
            </div>
          </div>
      </div>
    )
}


export default RecentActivities

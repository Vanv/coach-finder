import React, { Component } from 'react'
import moment from 'moment'
import { MdLocalActivity } from 'react-icons/md'

const RecentActivities = (props) => {
  const { recentactivities } = props;
    return (
      <div className="section">
        <div className="card w-100 mb-5">
          <div className="card-body">
            <h3 className="card-title">Recent Activities</h3>
              <ul className="recentActivities list-unstyled">
                { recentactivities && recentactivities.map(item => {
                  return (
                    <li key={item.id} className="mb-2">
                      <span className="text-primary">
                        <span className="pr-1 newIcon"><MdLocalActivity /></span>
                        <span className="pt-1">{item.user}</span>
                      </span><br/>
                      <span className="text-secondary">{item.content}</span><br />
                      <span className="text-black-50">
                        {moment(item.time.toDate()).fromNow()}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
      </div>
    )
}


export default RecentActivities

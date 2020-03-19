import React, { Component } from 'react'
import moment from 'moment'
import { MdLocalActivity } from 'react-icons/md'
import { ThemeContext } from '../../contexts/ThemeContext'
import ThemeToggle from '../ThemeToggle'


const RecentActivities = (props) => {
  const { recentactivities } = props;
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return(
          <div className="section">
            <ThemeToggle />
            <div className="card w-100  mt-4 mb-5">
              <div className="card-body" style={{ background: theme.ui, color: theme.syntax}}>
                <h3 className="card-title">Recent Activities</h3>
                  <ul className="recentActivities list-unstyled">
                    { recentactivities && recentactivities.map(item => {
                      return (
                        <li key={item.id} className="mb-2">
                          <span className="text-primary">
                            <span className="pr-1 newIcon"><MdLocalActivity /></span>
                            <span className="pt-1">{item.user}</span>
                          </span><br/>
                          <span style={{ color: theme.color}}>{item.content}</span><br />
                          <span style={{ color: theme.color}} style={{background: theme.ui}}>
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
      }}
      </ThemeContext.Consumer>
    );
}


export default RecentActivities

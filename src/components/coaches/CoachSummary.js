import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { IoIosMail } from 'react-icons/io'
import { ThemeContext } from '../../contexts/ThemeContext'


const CoachSummary = ({ coach }) => {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark, darkThemeText } = context;
        const theme = isLightTheme ? light : dark ;

        return(
          <div className="dashboard mt-3">
            <div className="card w-100 mb-4">
              <div className="card-body" style={{ background: theme.ui, color: theme.syntax}}>
                <h5 style={{background: theme.ui}}><b>Coach Name: </b>{coach.coachFirstName} {coach.coachLastName}</h5>

                <h6 style={{background: theme.ui}} className="card-title">{coach.sport1} - ${coach.sport1HrlyRate}</h6>
                <h6 style={{background: theme.ui}} className="card-title">{coach.sport2} - ${coach.sport2HrlyRate}</h6>
                <p className="card-text">{coach.shortDescription}</p>
                <p style={{background: theme.ui}}>{moment(coach.createdAt.toDate()).calendar()}</p>
                <div className="text-right">

                  <a style={{ background: theme.emailBtn }} href={"mailto:" + coach.email} className="btn btn-dark btn-sm"><IoIosMail /></a>
                  <Link to={'/coach/' + coach.id} key={coach.id}>
                    <button type="button" className="btn btn-info btn-sm ml-2">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      }}
      </ThemeContext.Consumer>
    );
}


export default CoachSummary

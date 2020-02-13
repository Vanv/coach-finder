import React, { Component } from 'react'
import CoachSummary from './CoachSummary'
import { Link } from 'react-router-dom'

const CoachList = ({coaches}) => {
  return (
    <div className="section coachList">
      { coaches && coaches.map(coach => {
        return (
          <Link to={'/coach/' + coach.id} key={coach.id}>
            <CoachSummary coach={coach}  />
          </Link>
        )
      })}
    </div>
  )
}

export default CoachList

import React, { Component } from 'react'
import CoachSummary from './CoachSummary'
import { Link } from 'react-router-dom'

const CoachList = ({coaches}) => {
  return (
    <div className="section">
      { coaches && coaches.map(coach => {
        return (
          <Link to={'/coach/' + coach.id} key={coach.id}>
            <CoachSummary coach={coach} key={coach.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default CoachList

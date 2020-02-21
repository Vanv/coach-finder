import React, { Component } from 'react'
import CoachSummary from './CoachSummary'
import { Link } from 'react-router-dom'

const CoachList = ({coaches}) => {
  return (
    <div className="section coachList">
      { coaches && coaches.map(coach => {
        return (
            <CoachSummary coach={coach} key={coach.id} />

        )
      })}
    </div>
  )
}

export default CoachList

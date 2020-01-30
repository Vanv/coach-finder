import React, { Component } from 'react'
import CoachSummary from './CoachSummary'

const CoachList = ({coaches}) => {
  return (
    <div className="section">
      { coaches && coaches.map(coach => {
        return (
          <CoachSummary coach={coach} key={coach.id} />
        )
      })}
    </div>
  )
}

export default CoachList

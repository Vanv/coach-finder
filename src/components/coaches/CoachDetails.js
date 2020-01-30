import React, { Component } from 'react'


const CoachDetails = (props) => {
  // console.log(props);
  const id = props.match.params.id;
    return (
      <div className="dashboard container">
        <h2>CoachDetails</h2>
          <div className="card w-100 mb-5">
            <div className="card-body">
              <h5 className="card-title">Coach Name - test --- {id}</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
      </div>
    )

}

export default CoachDetails

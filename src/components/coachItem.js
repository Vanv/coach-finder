import React, {Component} from 'react';
// import profile from './profile.png';


class CoachItem extends Component {
  render() {
    //console.log(this.props);
    return(
      <div className="pb-5">
      <section>
        <div className="container">
          <div className="row">

            <div className="col-md-4 coachImage">
            </div>
            <div className="col-md-4 coachName">
              <li className="CoachItem">
                <b>{this.props.coach.name}</b>
              </li>
            </div>
            <div className="col-md-4 coachingField">
              <b>Coaching Sport: </b> <br/>
              {this.props.coach.sport}
              <div className="hourlyRate">
                <b>Horuly Rate: </b><br/>
                {this.props.coach.hrlyRate}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>


    )
  }
}

export default CoachItem;

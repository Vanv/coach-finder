import React, {Component} from 'react';
import CoachItem from './coachItem';


class Coaches extends Component {

  

  render() {

    let coachItems;

     if(this.props.coaches) {
       coachItems = this.props.coaches.map(coach => {
         return(
          <CoachItem key={coach.id} coach={coach} />

         );
       });
     }

    return (
        <div>
          {coachItems}
        </div>

    )
  }
}

export default Coaches;

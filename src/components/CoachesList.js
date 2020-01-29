import React, {Component} from 'react';
import firebase from './Firebase';



class CoachesList extends Component {
  render() {

    const  coaches = this.props.coaches;
    console.log("All coaches ", this.props)
    const allCoaches = coaches.map(item =>  {
      return(
        <div className="list-group-item d-flex" key={item.userID}>
          {item.userID} - {item.sport1} - {item.displayName}
          {this.props.user}
        </div>
      );
    })

    return(
      <div className="pb-5">
        {allCoaches}
      </div>


    )
  }
}

export default CoachesList;

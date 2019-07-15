import React, {Component} from 'react';



class Banner extends Component {
  render(){
    return(
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 ">
            COACH FINDER
          </h1>
          <p className="lead my-3">find your coach in your dream field, <br/><br/>in your area, <br/>in you city, in your country</p>

        </div>
      </div>
    )
  }

}

export default Banner;

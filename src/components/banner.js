import React, {Component} from 'react';
import BannerImg from '../images/hero_banner_new.jpg';


class Banner extends Component {
  render(){
    return(
      <div>
      {/*<div className="card bg-dark text-white">
        <img className="card-img" src={BannerImg} alt="Card image" />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>*/}
      <div className="bannerImage-text">
        <div className="bannerText text-white">

        <p className="my-3">find your coach in your dream field, in your area, in you city, in your country</p>

        </div>
        <img className="bannerImage" src={BannerImg} alt="Coach Finder" width="100%" />
      </div>

      </div>
    )
  }

}

export default Banner;

import React, {Component} from 'react';
import aboutus from "../images/about-us.png";
import {navigate} from '@reach/router'

class About extends Component {
  render() {
    return (
      <div>
          <div>
            <img className="bannerImage" src={aboutus} alt="Coach Finder" width="100%" />
          </div>
          <div className="container mt-5">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum scelerisque justo, ut pharetra magna faucibus a. Aenean nec lectus eu ex lacinia imperdiet. Quisque interdum magna elementum nulla auctor dapibus. Vivamus vitae tortor lectus. Sed congue urna quis ante rhoncus tristique vel eu erat. In viverra eros metus, sit amet dignissim neque congue non. Vestibulum mollis, orci ut consectetur venenatis, leo magna dictum nunc, vel euismod lectus est pellentesque  libero. Nam ante quam, ultrices ac enim molestie, vulputate sagittis dolor. Vivamus iaculis malesuada sollicitudin.
            </p>
            <p>
              Vivamus viverra elit purus. Vivamus tempus tellus viverra feugiat luctus. Duis bibendum nulla erat, et pretium magna dapibus nec. Suspendisse potenti. Mauris elementum nibh mi, vitae egestas nisl sollicitudin non. Quisque imperdiet fermentum tortor a imperdiet. Vivamus tincidunt egestas nibh eu tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas dictum malesuada tortor in euismod. In erat massa, varius malesuada fringilla vitae, vestibulum aliquam elit. Donec a hendrerit enim, eget aliquam arcu. Nunc commodo vitae odio sit amet laoreet. Proin sagittis arcu erat, ac varius tortor tempor nec. Aliquam a imperdiet dui, id condimentum ipsum.
            </p>
          </div>
      </div>
    );
  }
}

export default About;

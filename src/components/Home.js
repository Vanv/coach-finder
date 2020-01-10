import React, {Component} from 'react';
import Banner from './banner';
import Coaches from './coaches';


class Home extends Component {
  constructor(props) {
    super();
  }
  componentWillMount() {
    this.setState({
      coaches: [
        {
          id: 1,
          name: "Micheal Douglas",
          sport: "Badminton",
          hrlyRate: "$60"
        },
        {
          id: 2,
          name: "Mike Row",
          sport: "Soccer",
          hrlyRate: "$50"
        },
        {
          id: 3,
          name: "Edwin Loss",
          sport: "Soccer",
          hrlyRate: "$50"
        },
        {
          id: 4,
          name: "Peter Baker",
          sport: "Badminton",
          hrlyRate: "$55"
        }
      ]
    });
    this.setState({
      location: "Rotorua"
    });
  }
  render() {
    return (
      <div>
        <Banner />
        <Coaches coaches={this.state.coaches}  />
      </div>
    );
  }
}

export default Home;

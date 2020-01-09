import React, { Component } from "react";
//import { HashRouter as Router } from "react-router-dom";
//import Route from "react-router-dom/Route";
import {Router} from '@reach/router';
import firebase from "./components/Firebase";

import "./App.css";
import Home from "./components/Home";
import Signupnavigation from "./components/Signupnavigation";
import Navigation from "./components/Navigation";
import Banner from "./components/banner";
import Coaches from "./components/coaches";
import "bootstrap/dist/css/bootstrap.min.css";
// import { dbConfig } from "./Config";
import About from "./components/About";
import Aboutacoach from "./components/Aboutacoach";
import Addacoach from "./components/Addacoach";
import Contactus from "./components/Contactus";
import Header from "./components/Header";
import Login from "./components/Login";

class App extends Component {
  constructor() {
    super();
    //this.app = firebase.initializeApp(dbConfig);
    // this.database = this.app
    //   .database()
    //   .ref()
    //   .child("coaches")
    //   .child("id");

    this.state = {

      coaches: [],
      location: "Tauranga"
    };
  }

  componentDidMount() {

    const ref = firebase.database().ref('user');
    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({ user: FBUser });
    });
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

//  componentDidMount() {
    // this.database.on("value", snap => {
    //   const coachuser = snap.val();
    //   this.setState({
    //     name: coachuser.name,
    //     sport: coachuser.sport,
    //     location: coachuser.location,
    //     hrlyRate: coachuser.hrlyRate
    //   });
    // });
    // firebasePlaces.child(this.props.placeId).on("value", snap => {
    //     this.setState({
    //         Place: snap.val()
    //     })
    // })

    // const RootRef = firebase.database().ref().child('location');
    // const locationRef = RootRef.child('location');
    // console.log("Location tef", locationRef);
    // locationRef.on('value', snap => {
    //   this.setState({
    //     location: snap.val()
    //   })
    // })
//  }

  render() {
    return (

        <div className="App">
            <Signupnavigation user={this.state.user}/>
              <div className="container">
              <header className="blog-header py-3">
                  <Header user={this.state.user}/>
              </header>
              {/*<Navigation user={this.state.user} /> */}
              <Banner />
              {this.state.user}

              <Router>
                <Home path="/home" />
                <About path="/about" />
                <Addacoach path="/addacoach" />
                <Login path="login" />
                <Contactus path="/contactus" />
              </Router>
            </div>

                  </div>

    );
  }
}

export default App;

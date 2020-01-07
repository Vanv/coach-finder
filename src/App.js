import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./App.css";
import firebase from "firebase";
import Signupnavigation from "./components/Signupnavigation";
import Navigation from "./components/navigation";
import Banner from "./components/banner";
import Coaches from "./components/coaches";
import "bootstrap/dist/css/bootstrap.min.css";
import { dbConfig } from "./Config";
import About from "./components/about";
import Aboutacoach from "./components/about-a-coach";
import Addacoach from "./components/add-a-coach";
import Contactus from "./components/contactus";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.app = firebase.initializeApp(dbConfig);
    this.database = this.app
      .database()
      .ref()
      .child("coaches")
      .child("id");

    this.state = {
      user: null,
      coaches: [],
      location: "Tauranga"
    };
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

  componentDidMount() {
    this.database.on("value", snap => {
      const coachuser = snap.val();
      this.setState({
        name: coachuser.name,
        sport: coachuser.sport,
        location: coachuser.location,
        hrlyRate: coachuser.hrlyRate
      });
    });
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
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Signupnavigation user={this.state.user}/>
              <div className="container">
              <header className="blog-header py-3">
                  <Header user={this.state.user}/>
              </header>
              <Navigation />
              <Banner />

              <Route
                        path="/"
                        exact
                        strict
                        render={() => (
                          <div>
                          {/*{this.state.name} - {this.state.sport} - {this.state.hrlyRate} - {this.state.location}*/}
                           <Coaches coaches={this.state.coaches}  />
                      </div>

                        )}
            />

            <Route path="/about" exact strict render={() => <About />} />

            <Route
                        path="/about-a-coach"
                        exact
                        strict
                        render={() => (<Aboutacoach/>)}
            />

            <Route
                        path="/add-a-coach"
                        exact
                        strict
                        render={() => (<Addacoach/>)}
            />
            <Route
                          path="/contactus"
                        exact
                        strict
              render={() => (<Contactus />)}
        />
        </div>

                  </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
//import { HashRouter as Router } from "react-router-dom";
//import Route from "react-router-dom/Route";
import {Router, navigate} from '@reach/router';
import firebase from "./components/Firebase";

import "./App.css";
import Home from "./components/Home";
import Signupnavigation from "./components/Signupnavigation";
import Navigation from "./components/Navigation";
import Coaches from "./components/coaches";
import "bootstrap/dist/css/bootstrap.min.css";
import { dbConfig } from "./Config";
import About from "./components/About";
import Aboutacoach from "./components/Aboutacoach";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Header from "./components/Header";
import Login from "./components/Login";
import Banner from "./components/banner";
import Welcome from './components/Welcome';
import Meetings from './components/Meetings';
import AddCoach from './components/AddCoach';
import Footer from './components/Footer';


class App extends Component {
  constructor() {
    super();


    this.state = {
      user: null,
      displayName: null,
      userID: null,
      coachesList: [],
      displayCoaches: [],
      sport1: ''
    };
  }


  componentDidMount() {
      const ref = firebase.database().ref('addcoach')

      ref.orderByChild('sport1').on('child_added', snapshot => {
        this.state.coachesList.push({
          id: snapshot.key,
          sport1: snapshot.val().sport1,

        });
      });
    }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate('/addCoach');
      });
    });
  };
  logOutUser = e => {
    e.preventDefault();
    this.setState({
      displayName: null,
      userID: null,
      user: null
    });

    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/login');
      });
  };

  addCoach = (sport1,sport1HrlyRate, sport2, sport2HrlyRate, location, otherAreas, shortDescription) => {
    const ref = firebase
    .database()
    .ref(`addcoach/${this.state.user.uid}`);
    ref.push({
      sport1: sport1,
      sport1HrlyRate: sport1HrlyRate,
      sport2: sport2,
      sport2HrlyRate: sport2HrlyRate,
      location: location,
      otherAreas: otherAreas,
      shortDescription: shortDescription
    });
  }

  render() {
    return (


          <div className="container-fluid px-0">
              <Navigation
                user={this.state.user}
                userName={this.state.displayName}
                logOutUser={this.logOutUser}
              />
              {/*
              {this.state.user && (
                <Welcome
                  userName={this.state.displayName}
                  logOutUser={this.logOutUser}
                />
              )}
              */}
              {this.sport1 }

                    <Router>
                      <Home path="/"

                        user={this.state.user}
                      />

                    </Router>
                    <div className="container-fluid home-container">

                      <Router>
                        <About path="/about" />
                        <AddCoach path="/addCoach"
                            addCoach={this.addCoach}
                            coaches={this.state.coaches}
                            userID={this.state.userID}

                        />
                        <Register
                          path="/register"
                          registerUser={this.registerUser} />
                        <Login path="login" />
                        <Contactus path="/contactus" />
                      </Router>
                    </div>
                    <Footer />

            </div>

    );
  }
}

export default App;

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
// import { dbConfig } from "./Config";
import About from "./components/About";
import Aboutacoach from "./components/Aboutacoach";
import Register from "./components/Register";
import Contactus from "./components/Contactus";
import Header from "./components/Header";
import Login from "./components/Login";
import Banner from "./components/banner";
import Welcome from './components/Welcome';
import Meetings from './components/Meetings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged( FBUser => {
      if(FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })
      }
    })

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
        navigate('/meetings');
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


  render() {
    return (

        <div className="App">
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
              <Router>
                <Home path="/"  user={this.state.user}/>
              </Router>
              <div className="container">

                <Router>
                  <About path="/about" />
                  <Meetings path="/meetings" />
                  <Register
                    path="/register"
                    registerUser={this.registerUser} />
                  <Login path="login" />
                  <Contactus path="/contactus" />
                </Router>
              </div>

                  </div>

    );
  }
}

export default App;

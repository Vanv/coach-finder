import React, { Component } from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

//import Route from "react-router-dom/Route";
import {navigate} from '@reach/router';
import firebase from "./config/firebaseConfig";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/dashboard/Dashboard';
import CaoachDetails from './components/coaches/CoachDetails';
import CoachPersonalDetails from './components/coaches/CoachPersonalDetails';
import CoachEdit from './components/coaches/CoachEdit';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navigation from "./components/layout/Navigation";
import AddCoach from './components/coaches/AddCoach';
import { dbConfig } from "./Config";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Footer from './components/Footer';
import ThemeContextProvider from './contexts/ThemeContext';

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

  <BrowserRouter>
          <div className="container-fluid px-0">

          <Navigation />

              {/*
              {this.state.user && (
                <Welcome
                  userName={this.state.displayName}
                  logOutUser={this.logOutUser}
                />
              )}
              */}

                    <div className="container-fluid home-container">
                    {/*
                      <Router>
                        <AddCoach path="/addCoach"
                            addCoach={this.addCoach}
                            coaches={this.state.coaches}
                            userID={this.state.userID}

                        />
                        <Register
                          path="/register"
                          registerUser={this.registerUser} />
                      </Router>
                      */}
                      <ThemeContextProvider>
                        <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contactus' component={Contactus} />
                          <Route exact path='/' component={Dashboard} />
                          <Route path='/coach/:id' component={CaoachDetails} />
                          <Route path='/login' component={Login} />
                          <Route path='/register' component={Register} />
                          <Route path='/addCoach' component={AddCoach} />
                          <Route path='/coachedit' component={CoachEdit} />
                          <Route path='/coachpersonaldetails' component={CoachPersonalDetails} />
                        </Switch>
                      </ThemeContextProvider>


                    </div>

                    <Footer />
            </div>
            </BrowserRouter>


    );
  }
}

export default App;

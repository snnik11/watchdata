import "./App.css";
import React, { Component } from "react";
//import Dashboard from "./others/Dashboard";
import Dashboard from "./components/Dashboard";
import Psychologist from "./components/Psychologist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideNav from "./components/Sidebar";

import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <SideNav />
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/psychologist">
            <Psychologist />
          </Route>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

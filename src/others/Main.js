import React, { Component } from "react";
import Navbar from "./Navbar";
//import Footer from "./Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import Dash from "./Dash";
//import UserProfile from "./UserProfile";
//import UserTable from "./UserTable";
import Psychologist from "./Psychologist";
class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dash} />
          <Route path="/psychologist" component={Psychologist} />
          {/* <Route path="/userprofile" component={Psychologist} /> */}
          {/* <Redirect from="*" to="/dashboard" /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;

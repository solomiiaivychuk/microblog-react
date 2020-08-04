import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContext from '../UserContext'
import firebase, { auth, provider } from "../firebase";

const Body = () => {
  
  return (
    <Router>
      <div className="">
        <div className="header">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/Profile" className="link">
            Profile
          </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <PostsList></PostsList>
          </Route>
          <Route path="/Profile">
            <UserProfile></UserProfile>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Body;

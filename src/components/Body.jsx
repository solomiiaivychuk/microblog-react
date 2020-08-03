import React, { useState, useEffect, useContext } from "react";
import PostsList from "./PostsList";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserNameContext from '../UserNameContext'

const Body = () => {
  return (
    <Router>
      <div className="">
        <div className="header">
          <Link to="/Tweets" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            Profile
          </Link>
        </div>
        <Switch>
          <Route exact path="/Tweets">
            <PostsList></PostsList>
          </Route>
          <Route path="/">
              <UserProfile></UserProfile>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Body;

import React from "react";
import PostsList from "./PostsList";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Body = () => {
  return (
    <Router>
      <div className="">
        <div className="header">
          <Link to="/Home" className="link">
            Home
          </Link>
          <Link to="/" className="link">
            Profile
          </Link>
        </div>
        <Switch>
          <Route exact path="/Home">
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

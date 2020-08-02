import React, { useState, useEffect } from "react";
import firebase, { auth, provider } from "../firebase";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
      name: '',
      image: '',
    })
  }

  logout = () => {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  };

  login = () => {
    auth.signInWithPopup(provider).then((result) => {
      const loggedUser = result.user;
      this.setState({
        user: loggedUser,
      })
      this.setState({
        name: this.state.user.displayName,
        image: this.state.user.photoURL,
      });
    });  
  };

  componentDidMount() {
    auth.onAuthStateChanged((userIsLogged) => {
      if (userIsLogged) {
        this.setState({
          user: userIsLogged,
          name: userIsLogged.displayName,
          image: userIsLogged.photoURL,
        });
      }
    })
  }
render() {
  return (
    <div className="form-wrapper">
      <div
        className="user-form card rounded shadow"
      >
        <div className="user-name-input">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control username-input"
                placeholder="Enter email"
                //onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control username-input"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        {this.state.user ? (
          <button className="btn btn-primary user-button" onClick={this.logout}>
            Log out
          </button>
        ) : (
          <div>
          <button className="btn btn-primary user-button" onClick={this.login}>
            Log in
          </button>
          <button className="btn btn-primary user-button" >
          Sign up
        </button>
        </div>
        )}
      </div>
      { this.state.user ? (
      <div className="card rounded shadow user-profile">
        <div className="user-name">{this.state.name}</div>
        <img className="user-avatar" src={this.state.image} />
      </div> ) : (<div className="card rounded shadow user-profile">User is not logged in</div>)
      }
    </div>
  );
}
};

export default UserProfile;

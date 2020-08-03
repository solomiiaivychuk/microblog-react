import React, { useState, useEffect, useContext } from "react";
import firebase, { auth, provider } from "../firebase";
import UserNameContext from "../UserNameContext";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const userNameContx = useContext(UserNameContext);
  const [errorMessage, setErrorMessage] = useState('');

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
    localStorage.clear();
  };

  const loginWithGoogle = () => {
    try {

    
    auth.signInWithPopup(provider).then((result) => {
      const loggedUser = result.user;
      setUser(loggedUser);
      setName(loggedUser.displayName);
      setImage(loggedUser.photoURL);
    });
    localStorage.clear();
    localStorage.setItem("name", JSON.stringify(name));
    }
    catch(error) {
      setErrorMessage(` ${error.message}`);
    }
    
  };

  const loginWithPassword = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
      localStorage.clear();
      localStorage.setItem("name", JSON.stringify(name));
    }
    catch(error) {
      setErrorMessage(` ${error.message}`);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signUp = () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    catch(error) {
      setErrorMessage(` ${error.message}`);
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        setUser(loggedUser);
        setName(loggedUser.displayName);
        setImage(loggedUser.photoURL);
      }
    });
  });

  return (
    <div>
      {user && (
        <div className="card rounded shadow user-profile">
          <div className="user-name">{name}</div>
          <img className="user-avatar" src={image} />
          <button className="btn btn-primary d-flex logout-button p-2" onClick={logout}>
            Log out
          </button>
        </div>
      )}
      {!user && (
      <div className="form-wrapper">
        <div className="user-form card rounded shadow" onSubmit={(email, password) => signUp(email, password)}>
          <div className="user-name-input">
            <div className="row">
              <div className="col">
                <input
                  type="email"
                  className="form-control username-input"
                  placeholder="Enter email"
                  onChange={(event) => handleEmailChange(event)}
                />
              </div>
              <div className="col">
                <input
                  type="password"
                  className="form-control username-input"
                  placeholder="Password"
                  onChange={(event) => handlePasswordChange(event)}
                />
              </div>
            </div>
            <div className="row d-inline">
              <div className="buttons-row">
                <button
                  className="btn btn-primary user-button"
                  onClick={(email, password) =>
                    loginWithPassword(email, password)
                  }
                >
                  Log in
                </button>
                <button
                  className="btn btn-primary user-button"
                  onClick={loginWithGoogle}
                >
                  Log in with Google
                </button>
                <button className="btn btn-primary user-button" onClick={signUp}>Sign up</button>
              </div>
            </div>
            <div className="row di-inline error-info">{errorMessage}</div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default UserProfile;

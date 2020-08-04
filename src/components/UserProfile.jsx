import React, { useState, useEffect, useContext } from "react";
import firebase, { auth, provider } from "../firebase";
import UserContext from "../UserContext";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState(false);

  const usersRef = firebase.database().ref('users');

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
      //localStorage.clear();
    });
  };

  const loginWithGoogle = () => {
    try {
      auth.signInWithPopup(provider).then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        setName(loggedUser.displayName);
        setImage(loggedUser.photoURL);
        setEmail(loggedUser.email);
        localStorage.clear();
        localStorage.setItem("name", loggedUser.displayName);
      });
    }
    catch(error) {
      setErrorMessage(` ${error.message}`);
    }
    
  };

  const loginWithPassword = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(`Error : ${errorMessage}`);
    });
    localStorage.clear();
    localStorage.setItem("name", email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(`Error : ${errorMessage}`);
    });
    localStorage.clear();
    localStorage.setItem("name", email);
    const newUser = {
      userEmail: email,
      userName: '',
      userImage: '',
    }
    !errorMessage && usersRef.push(newUser);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const changeUserName = (newName) => {
    setName(newName);
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
    <UserContext.Provider value={{ userId }}>
      {user && (
        <div className="card rounded shadow user-profile">
          <div className="user-name">{name || email}</div>
          <img className="user-avatar" src={image} />
          <button className="btn btn-primary d-flex logout-button p-2" onClick={logout}>
            Log out
          </button>

          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Change username" 
              aria-label="Recipient's username" 
              aria-describedby="button-addon2"
              onChange={(event) => handleNameChange(event)} />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
                onClick={(newName) => changeUserName(newName)}
              >
                Change
              </button>
            </div>
          </div>
          
          <div className="input-group mb-3 mt-3">
            <div className="custom-file">
              <input 
                type="file" 
                className="custom-file-input" 
                id="inputGroupFile03" 
                aria-describedby="inputGroupFileAddon03" />
              <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
            </div>
          </div>

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
                  onClick={loginWithPassword}
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
            <div className="row d-inline error-info">{errorMessage}</div>
          </div>
        </div>
      </div>
      )}
    </UserContext.Provider>
  );
};

export default UserProfile;

import React from "react";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

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

  const loginWithPassword = () => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password);
    }
    catch(error) {
      setErrorMessage(` ${error.message}`);
    }
    localStorage.clear();
    localStorage.setItem("name", JSON.stringify(email));
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

  return (
    <div className="form-wrapper">
      <div
        className="user-form card rounded shadow"
        onSubmit={(email, password) => signUp(email, password)}
      >
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
              <button className="btn btn-primary user-button" onClick={signUp}>
                Sign up
              </button>
            </div>
          </div>
          <div className="row d-inline error-info">{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

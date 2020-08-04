import React, { useState, useEffect, useContext } from "react";
import TweetsContext from "../TweetsContext";
import { auth } from "../firebase";

const InputForm = () => {
  const [text, setText] = useState("");
  const tweetsContext = useContext(TweetsContext);
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((loggedUser) => {
      if (loggedUser) {
        loggedUser.displayName
          ? setName(loggedUser.displayName)
          : setName(loggedUser.email);
      }
    });
  });

  const handleSubmit = (event) => {
    const date = new Date();
    event.preventDefault();
    tweetsContext.addPost({
      id: Date.now(),
      content: text,
      userName: name,
      date: date.toISOString(),
    });
    event.target.reset();
  };

  const handleChange = (event) => {
    setText(event.target.value);
    if (text.length >= 140) {
      setErrorMessage("140 characters maximum");
      setError(true);
    }
    if (text.length < 140) {
      setErrorMessage("");
      setError(false);
    }
  };

  return (
    <form className="form-wrapper" onSubmit={(event) => handleSubmit(event)}>
      <div name="form-group">
        <label htmlFor="exampleFormControlTextarea1"></label>
        <textarea
          className="form-control post-input"
          id="exampleFormControlTextarea1"
          rows="4"
          placeholder="What's on your mind?"
          maxLength="141"
          onChange={(event) => handleChange(event)}
        ></textarea>
        {error && <small id="passwordHelpBlock" className="form-text text-muted">
          <span className="input-error-message">{errorMessage}</span>
        </small>}
        {!error && <small id="passwordHelpBlock" className="form-text">
          140 characters maximum
        </small>}
      </div>
      {error && (
        <button type="submit" className="btn btn-primary post-button" disabled>
          Post
        </button>
      )}
      {!error && (
        <button type="submit" className="btn btn-primary post-button">
          Post
        </button>
      )}
    </form>
  );
};

export default InputForm;

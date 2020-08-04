import React, { useState, useEffect, useContext } from "react";
import TweetsContext from "../TweetsContext";
import UserContext from "../UserContext";
import * as firebase from 'firebase'

const InputForm = () => {
  const [text, setText] = useState("");
  const tweetsContext = useContext(TweetsContext);
  const userContext = useContext(UserContext);

  const handleSubmit = (event) => {
    const date = new Date();
    event.preventDefault();
      tweetsContext.addPost({
      id: Date.now(),
      content: text,
      userName: localStorage.getItem("name"),
      date: date.toISOString(),
    });
    event.target.reset();
  };

  const handleChange = (event) => {
    setText(event.target.value);
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
          maxLength="140"
          onChange={(event) => handleChange(event)}
        ></textarea>
        <small id="passwordHelpBlock" className="form-text text-muted">
          140 characters maximum
        </small>
      </div>
      <button type="submit" className="btn btn-primary post-button">
        Post
      </button>
    </form>
  );
};

export default InputForm;

import React from "react";
import firebase, { auth, provider } from "../firebase";

const UserPage = () => {
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const changeUserName = (newName) => {
    setName(newName);
  }

  const logout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
    localStorage.clear();
  };

  return (
    <div className="card rounded shadow user-profile">
      <div className="user-name">{name}</div>
      <img className="user-avatar" src={image} />
      <button
        className="btn btn-primary d-flex logout-button p-2"
        onClick={logout}
      >
        Log out
      </button>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Change username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(event) => handleNameChange(event)}
        />
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
            aria-describedby="inputGroupFileAddon03"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile03">
            Choose file
          </label>
        </div>
      </div>
    </div>
  );
};

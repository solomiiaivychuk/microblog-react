import React, { useState, useEffect } from "react";


const UserProfile = () => {
  const [name, setName] = useState("");
  const [signed, setSigned] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem("001", JSON.stringify(name));
    event.target.reset();
    if (name != "") {
      setSigned(true);
    }
  };

  return (
    <div className="form-wrapper">
      {signed && (
        <div className="name-change-confirmation card rounded shadow">
          Changed user name to "{name}" successfully!
        </div>
      )}
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="user-form card rounded shadow"
      >
        <div className="user-name-input">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control username-input"
                placeholder="Enter email"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="col">
              <input type="text" className="form-control username-input" placeholder="Password" />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary user-button">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default UserProfile;

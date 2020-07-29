import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

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
    setSigned(true);
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
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="User name"
                onChange={(event) => handleChange(event)}
              />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="contained"
          color="primary"
          className="user-button"
          type="submit"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;

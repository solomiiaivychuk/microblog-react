import React, { useState, useEffect } from "react";
import { withRoute, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

const UserProfile = (props) => {
  const [name, setName] = useState("");

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const InputWithIcon = () => {
    const classes = useStyles();
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.clear();
    localStorage.setItem("001", JSON.stringify(name));
    event.target.reset();
  };

  return (
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
  );
};

export default UserProfile;

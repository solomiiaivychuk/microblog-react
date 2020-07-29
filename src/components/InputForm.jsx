import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const InputForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    const date = new Date();
    event.preventDefault();
    props.onSubmit({
      id: Date.now(),
      content: text,
      userName: JSON.parse(localStorage.getItem("001")),
      date: date.toISOString(),
    });
    event.target.reset();
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className="form-wrapper" onSubmit={(event) => handleSubmit(event)}>
      <TextField
        id="outlined-multiline-static"
        label="what's on your mind?"
        multiline
        rows={4}
        placeholder="type something..."
        variant="outlined"
        required={true}
        fullWidth={true}
        helperText="140 symbols maximum"
        onChange={(event) => handleChange(event)}
        inputProps={{ maxLength: 140 }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className="post-button"
      >
        Post
      </Button>
    </form>
  );
};

export default InputForm;

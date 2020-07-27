import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      id: Date.now(),
      text: this.state.text,
      author : 'John Doe',
      date : new Date(Date.now()).toLocaleString(),
    })
    event.target.reset();
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <form 
        className="form-wrapper"
        onSubmit={(event) => this.handleSubmit(event)}>
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
          onChange={(event) => this.handleChange(event)}
          inputProps= {{maxLength: 140}}
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
  }
}

export default InputForm;

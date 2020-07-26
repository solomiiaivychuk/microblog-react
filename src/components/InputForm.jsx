import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
     }
  }

  // useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& .MuiTextField-root': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //     },
  //   },
  // }));
  
  // MultilineTextFields() {
  //   const classes = useStyles();
  //   const [value, setValue] = React.useState('Controlled');
  
  //   handleChange = (event) => {
  //     setValue(event.target.value);
  //   };
  // }

  render() { 
    return ( 
      <form className="form" noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-static"
          label="Type something..."
          multiline
          rows={4}
          placeholder="Type something..."
          variant="outlined"
        />
      </form>
    );
  }
}
 
export default InputForm;
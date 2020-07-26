import React from 'react';
import './App.css';
import Container from '@material-ui/core/Button';
import Body from './components/Body'

function App() {
  return (
    <Container className="main-wrapper" maxWidth="sm">
      <Body></Body>
    </Container>
  );
}

export default App;

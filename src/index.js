import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'


const config = {
  apiKey: "AIzaSyAFhjPl41js4qTSFjJr_AXQitzjkqzFhY4",
  authDomain: "solomiia-iv-microblog-3be3a.firebaseapp.com",
  databaseURL: "https://solomiia-iv-microblog-3be3a.firebaseio.com",
  projectId: "solomiia-iv-microblog-3be3a",
  storageBucket: "solomiia-iv-microblog-3be3a.appspot.com",
  messagingSenderId: "327068351440",
  appId: "1:327068351440:web:dc4a1bee43b6924a9097d5",
  measurementId: "G-MQRQTSBW0Z"
};

firebase.initializeApp(config);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

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

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
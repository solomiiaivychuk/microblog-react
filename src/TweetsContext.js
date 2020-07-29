import React from 'react';

const TweetsContext = React.createContext({
  posts: [],
  addPost: () => {},
})

export default TweetsContext
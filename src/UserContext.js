import React from 'react';

const UserNameContext = React.createContext({
  user: {},
  name: '',
  email: '',
  image: '',
  setUser: () => {},
});

export default UserNameContext;
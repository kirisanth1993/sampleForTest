import React, { useState } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const attemptAuth = async (type, credentials) => {
    let route = (type === 'login') ? '/login' : '';
    try {
      const res = await axios.post(`/users${route}`, { user: credentials });
      setCurrentUser(res.data.user);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  // other methods...

  return (
    <UserContext.Provider value={{ currentUser, attemptAuth }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

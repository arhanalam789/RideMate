// src/context/UserContext.jsx
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: ''
    },
    // add other user properties if needed
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

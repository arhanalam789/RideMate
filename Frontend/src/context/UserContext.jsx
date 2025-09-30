import React, { createContext, useState } from 'react';

// 1. Create the context
export const UserContext = createContext();

// 2. Create the provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email:'',
    fullname:{
      firstname:'',
      lastname:''
    }
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

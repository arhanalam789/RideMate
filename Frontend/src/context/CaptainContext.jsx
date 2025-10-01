// src/context/CaptainContext.jsx
import React, { createContext, useState } from 'react';

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: '',
    fullname: {
      firstname: '',
      lastname: ''
    },
    vehicleDetails: {
      color: '',
      licensePlate: '',
      capacity: '',
      vehicleType: ''
    }
  });

  return (
    <CaptainContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainContext.Provider>
  );
};

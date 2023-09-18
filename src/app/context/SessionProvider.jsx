"use client";

import React, { createContext, useContext, useState } from 'react';

const SessionContext = createContext();

export const useSessionContext = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {

  if (typeof window === 'undefined') return null;
  
  const [hasSession, setHasSession] = useState(localStorage.getItem('HASSESSION') === 'TRUE');

  const setSession = () => {
    localStorage.setItem('HASSESSION', 'TRUE');
    setHasSession(true);
  };

  const clearSession = () => {
    localStorage.setItem('HASSESSION', 'FALSE');
    setHasSession(false);
  };

  const value = {
    hasSession,
    setSession,
    clearSession,
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};

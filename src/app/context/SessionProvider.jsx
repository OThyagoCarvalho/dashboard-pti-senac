'use client'

import React, { createContext, useContext, useEffect, useState } from 'react';

const SessionContext = createContext();

export const useSessionContext = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    // Check if localStorage is available (only on the client-side)
    if (typeof window !== 'undefined') {
      const storedHasSession = localStorage.getItem('HASSESSION');
      setHasSession(storedHasSession === 'TRUE');
    }
  }, []);

  const setSession = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('HASSESSION', 'TRUE');
      setHasSession(true);
    }
  };

  const clearSession = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('HASSESSION', 'FALSE');
      setHasSession(false);
    }
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

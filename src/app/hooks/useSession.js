"use client"

import { useState } from 'react';

const useSession = () => {
  const [hasSession, setHasSession] = useState(localStorage.getItem('HASSESSION') === 'TRUE');

  const setSession = () => {
    localStorage.setItem('HASSESSION', 'TRUE');
    setHasSession(true);
  };

  const clearSession = () => {
    localStorage.setItem('HASSESSION', 'FALSE');
    setHasSession(false);
  };

  return {
    hasSession,
    setSession,
    clearSession,
  };
};

export default useSession;

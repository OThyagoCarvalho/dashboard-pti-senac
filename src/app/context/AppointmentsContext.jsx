import React, { createContext, useContext, useState } from 'react';

const AppointmentsContext = createContext();

export function AppointmentsProvider({ children }) {
  
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (formData) => {
    setAppointments([...appointments, formData]);
  };

  return (
    <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </AppointmentsContext.Provider>
  );
}

// custom hook to access the AppointmentsContext
export function useAppointments() {
  return useContext(AppointmentsContext);
}

'use client'

import React, { useState } from 'react';
import styles from './BookingForm.module.css';
import { useAppointments } from '@/app/context/AppointmentsContext';

function BookingForm() {

    const { addAppointment } = useAppointments();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
    });
    
    if(typeof window === 'undefined') return null;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };


  const handleSubmit = (e) => {

    addAppointment(formData);

    setFormData({
      name: '',
      email: '',
      date: '',
    });

    console.log('Appointment saved:', formData);

  };
  return (
    <div className={styles.searchDiv}> 
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Data:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className={styles.buttonDiv}>
            {
                Object.values(formData).every((value) => value) ? (
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Agendar Agora</button>
                ) : (
                    <button type="button" disabled>Agendar Agora</button>
                )
            }

        </div>
      </form>
    </div>
  );
}

export default BookingForm;

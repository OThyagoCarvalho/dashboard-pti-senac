"use client";

import React from 'react';
import { redirect } from 'next/navigation'
import { useState } from 'react';
import { useSessionContext } from '@/app/context/SessionProvider';

const AuthForm = () => {

    const {hasSession, setSession} = useSessionContext()
    const [inputValues, setInputValues] = useState( {
        emailValue:'',
        passValue: ''
    })

    const hasValidInputs = inputValues.emailValue && inputValues.passValue

    const handleSession = () => {
        setSession();
    }

    if (hasSession) {
        redirect('/pages/dashboard')
    }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="text-neutral-950 mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              value={inputValues.emailValue}
              onChange={(e) => setInputValues({...inputValues, emailValue: e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="text-neutral-950 mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              value={inputValues.passValue}
              onChange={(e) => setInputValues({...inputValues, passValue: e.target.value})}
            />
          </div>
          {
            hasValidInputs ? 
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => hasValidInputs && handleSession()}
         >
            Login
          </button> :
          <button
          type="submit"
          className="disabled:opacity-75 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => hasValidInputs && handleSession()}
          disabled
       >
          Login
        </button>
          }
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

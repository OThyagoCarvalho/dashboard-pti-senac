"use client";

import React from 'react';
import { useSessionContext } from '@/app/context/SessionProvider';
import Link from 'next/link';

const Navbar = () => {

    const { hasSession, clearSession } = useSessionContext()

  return (
    <nav className="navbar h-20 bg-gray-800">
      <div className="navbar-content max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="btn-login text-white">
          {hasSession && (
            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="User Avatar" className="avatar w-10 h-10 rounded-full" />
          )}
          </button>
          
        </div>
        <ul className="nav-links flex space-x-4">
          <li><Link href="/" className="text-white">Home</Link></li>
          <li><Link href="/pages/dashboard" className="text-white">Dashboard</Link></li>
          <li>
          {hasSession ? (
           <button className='text-neutral-50' onClick={() => clearSession()}> Logout </button>
          ): <Link className='text-neutral-50' href={'/pages/auth'}> Login </Link>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

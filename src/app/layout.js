'use client'

import { SessionProvider } from './context/SessionProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppointmentsProvider } from './context/AppointmentsContext.jsx'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR" title='PI Dashboard' description='Dashboard SENAC'>
      <body className={inter.className}>
      <AppointmentsProvider>
        <SessionProvider>
         {children}
        </SessionProvider>
      </AppointmentsProvider>
      </body>
    </html>
  )
}

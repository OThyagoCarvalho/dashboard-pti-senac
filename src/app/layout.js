import { SessionProvider } from './context/SessionProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PI Dashboard',
  description: 'Dashboard SENAC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>
        <SessionProvider>
         {children}
        </SessionProvider>
      </body>
    </html>
  )
}

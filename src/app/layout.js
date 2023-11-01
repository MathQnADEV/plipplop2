import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Utilities/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AnimeListGacor',
  description: 'Indonesian Anime Website Gacor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

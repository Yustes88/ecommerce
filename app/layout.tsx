import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Waste your money here',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(`${inter.className}, bg-white`)}>
        <NavBar/>
        <main className='p-4 m-auto max-w-3xl '>
          {children}
        </main>
        </body>
    </html>
  )
}

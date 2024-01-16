import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const nunito = Nunito({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"] })


export const metadata: Metadata = {
  title: 'ABJA Dashboard',
  description: 'ABJA project management dashboard ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

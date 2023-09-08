import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-test',
  description: 'YT Tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>Test: div is shared across layouts</div>
        {children}</body>
    </html>
  )
}

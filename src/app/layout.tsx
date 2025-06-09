import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multi-speciality Hospital - Best Multi Super Speciality Hospital in Varanasi',
  description: 'Multi-speciality Hospital is a leading multi-specialty hospital in Varanasi, providing world-class healthcare services with state-of-the-art facilities and expert medical professionals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white pt-20">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
} 
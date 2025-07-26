import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eric Wong - Data Scientist & Software Developer',
  description: 'Portfolio showcasing data science projects, software development work, and technical expertise',
  keywords: 'data science, software development, machine learning, web development, portfolio',
  authors: [{ name: 'Eric Wong' }],
  openGraph: {
    title: 'Eric Wong - Data Scientist & Software Developer',
    description: 'Portfolio showcasing data science projects and software development work',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
}

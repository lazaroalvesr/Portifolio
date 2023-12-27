import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lázaro Alves R',
  description: 'Lázaro Alves R Desenvolvedor Front-End ReactJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="faviIcon.png" type="image/x-icon" />
      </head>
      <body className={`inter.className dark:bg-gray-900 bg-gray-300`}>
        <Header />
        {children}
      </body>

    </html>
  )
}

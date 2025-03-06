import '../tailwind.css'
import { Inter } from 'next/font/google'
import colors from 'tailwindcss/colors'
import { clsx } from '../lib/clsx'
import styles from './layout.module.css'
import type React from 'react'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nicholas DeVries',
  description: 'Personal site of Nicholas DeVries',
}

export const viewport: Viewport = {
  themeColor: [
    { color: colors.gray['50'], media: '(prefers-color-scheme: light)' },
    { color: colors.gray['900'], media: '(prefers-color-scheme: dark)' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          'bg-white text-black antialiased dark:bg-gray-800 dark:text-white',
        )}
      >
        <div className="absolute inset-0">
          <div className={clsx(styles.glow, 'absolute inset-0')} />
          <div className={clsx(styles.pattern, 'absolute inset-0')} />
        </div>
        <main className="relative flex min-h-screen items-center justify-center">{children}</main>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false;

const mulish = Mulish({ subsets: ['latin'], weight: 'variable' })

export const metadata: Metadata = {
  title: 'ptchtrns',
  description: 'a personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  )
}

import { Roboto, Mulish } from 'next/font/google'
import './globals.css'
import NavLink from '@/app/components/nevLink'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
})

const mulish = Mulish({
  subsets: ['latin'],
  weight: ["variable"]
})

export const metadata = {
  title: 'SAS Education Foundation',
  description: 'A service organization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <NavLink />
        {children}
      </body>
    </html>
  )
}

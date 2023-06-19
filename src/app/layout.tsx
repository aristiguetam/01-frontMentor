import './globals.css'
import { Navbar, SideMenu } from '@/components'
import Providers from './providers'


export const metadata = {
  title: 'Frontend Mentor | 01',
  description: 'Frontend Mentor | 01 Challenge',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body >
        <Providers>

          <SideMenu />

          <header>
            <Navbar />
          </header>

          <main>
            {children}
          </main>

        </Providers>
      </body>
    </html>
  )
}

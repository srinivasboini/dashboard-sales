import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { SWRProvider } from '@/components/providers/swr-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fiksa Dashboard',
  description: 'Admin dashboard for Fiksa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SWRProvider>
            <div className="flex min-h-screen">
              <div className="w-64 border-r bg-background">
                <Sidebar />
              </div>
              <main className="flex-1">
                {children}
              </main>
            </div>
          </SWRProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

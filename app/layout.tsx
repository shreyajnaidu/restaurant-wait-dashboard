import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spice Garden | Dashboard',
  description: 'Restaurant Table Wait-Time Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">

        {/* Fine Dining Background Image */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <img
            src="/finedining.jpg"
            className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 opacity-40"
          />
        </div>

        {/* Background decoration container */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-900/30 rounded-full blur-3xl"></div>
        </div>

        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  )
}
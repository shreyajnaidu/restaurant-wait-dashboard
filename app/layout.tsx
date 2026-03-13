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
        {/* Background decoration container */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-3xl"></div>
        </div>
        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
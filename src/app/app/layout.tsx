'use client'

import { ReactNode } from 'react'
import Navbar from '@/components/partials/Navbar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

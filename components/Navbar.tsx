'use client'

import Link from 'next/link'
import UserMenu from './UserMenu'

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl">🎨</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Preschool Worksheets
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors font-semibold"
            >
              Home
            </Link>
            <Link
              href="/generator"
              className="px-4 py-2 bg-primary-400 text-white rounded-lg hover:bg-primary-500 transition-colors font-semibold"
            >
              Create Worksheets
            </Link>
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

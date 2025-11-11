'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomButton from '../custom/button'
import MobileHeader from './MobileHeader'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-colors duration-700 ease-in-out ${
        scrolled
          ? 'bg-gradient-to-br from-[#E6F1F0] via-[#F3F7F5] to-[#E6F1F0] shadow-xl border-b border-green-300'
          : 'bg-transparent'
      }`}
    >
      <Link
        href="#home"
        tabIndex={0}
        role="link"
        aria-label="Homepage - BrainWell"
        className="flex items-center text-2xl font-extrabold text-green-800 tracking-wide cursor-pointer select-none hover:text-green-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 rounded"
      >
        BrainWell
      </Link>
      <CustomButton value="Login" link="/sign-in" />
      <MobileHeader />
    </header>
  )
}

export default Header

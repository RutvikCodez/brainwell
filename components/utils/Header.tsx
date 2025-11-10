'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import CustomButton from '../custom/button'
import MobileHeader from './MobileHeader'
import { Button } from '../ui/button'
import { signIn } from 'next-auth/react'
// import { signIn } from '@/auth'


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
      {/* <CustomButton value="Login" link="/sign-in" /> */}
      <Button
        // style={{ backgroundColor: backgoundColor || "#FDF2E9" }}
        className="text-green-800 font-semibold px-12 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:bg-green-100 transition-all duration-300 max-md:hidden focus:outline-none focus:ring-2 focus:ring-green-600 w-fit"
        aria-label="Login"
        onClick={async () => {
          // 'use server'
          await signIn('google')
        }}
      >
        {/* <Link href={link}>{value}</Link> */}
        Login
      </Button>
      <MobileHeader />
    </header>
  )
}

export default Header

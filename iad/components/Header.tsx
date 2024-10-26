"use client"
import React from 'react'
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="relative flex items-center justify-center text-center w-full min-h-[290px] bg-cover bg-center">
    <div className="absolute inset-0 bg-[url('/office.jpg')] bg-cover bg-center opacity-50"></div>
    <div className="relative z-10  text-5xl font-bold ">
      {title}
    </div>
  </header>
  )
}

export default Header
'use client'
import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Cards = () => {
    const pathname = usePathname()

    return (
        <div className='flex mt-10 flex-wrap justify-center'>
            {sidebarLinks.slice(1).map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                
                return (
                    <div key={item.route} className={`bg-white shadow-lg rounded-lg overflow-hidden w-64 m-4 transition-transform transform hover:scale-105 ${isActive ? 'border-2 border-blue-500' : ''}`}>
                        <Link href={item.route} key={item.label}>
                            <div className="relative">
                                <Image src={item.img} alt={item.label} width={256} height={128} className="object-cover w-full h-32" />
                            </div>
                            <div className="p-4">
                                <p className="text-center text-gray-700 font-semibold">
                                    {item.label}
                                </p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards

'use client'
import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
const Cards = () => {
    const pathname = usePathname()
  return (
    <div className='flex mt-20'>
          {sidebarLinks.slice(1).map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
          
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.route}>
                        
    <div className="p-5">
        
        <Link href={item.route} key={item.label} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     
                        <p>
                            {item.label}
                        </p>
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
                )
            })}

    </div>
  )
}

export default Cards
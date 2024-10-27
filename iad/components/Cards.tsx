'use client'
import React from 'react'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
const Cards = () => {
    const pathname = usePathname()
  return (
    <div className='flex mt-10 flex-wrap'>
          {sidebarLinks.slice(1).map((item)=>{
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
          
                    <div key={item.route} className='bg-white h-30 mb-5'>
                        
    <div className="">
        
        <Link href={item.route} key={item.label} className="">
                        <Image src='/office.jpg' alt='img' width={200} height={100}/>
                        <p className='text-center'>
                            {item.label}
                        </p>
        </Link>
    </div>  
</div>
                )
            })}

    </div>
  )
}

export default Cards
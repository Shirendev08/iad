'use client'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Cards from '@/components/Cards'
const page = () => {
  const pathname = usePathname()
  return (
    <div className='flex flex-col gap-4'>
        <div>
          <p>  ДАГ-ын үйл ажиллагаатай холбоотой мэдээллүүд</p>
        </div>
          <Cards/>


            <button>Live Chat(Тун удахгүЙ)</button>
            <div className='flex flex-col'>
            Дотоод аудитын газар 2024 <br/>

[ Bogd-audit@bogdbank.com ]  <br/>

+976 7577 1199 (1007) 
      </div>
    </div>
  )
}

export default page
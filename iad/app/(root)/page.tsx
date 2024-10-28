'use client'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Cards from '@/components/Cards'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const page = () => {
  const pathname = usePathname()
  return (
    <>
      <Header title="Дотоод аудитын газартай холбоотой мэдээлэл" />
        <div className='w-full h-[80px] text-xl font-bold text-white bg-green-700 text-center items-center justify-center flex'>
          <p>  ДАГ-ын үйл ажиллагаатай холбоотой мэдээллүүд</p>
        </div>
        <div className='flex justify-center sm:px-16 px-4'>
        <div className='max-w-5xl w-full'>
          <Cards/>
            <Footer/>
          </div>
          </div>

            
    </>
  )
}

export default page
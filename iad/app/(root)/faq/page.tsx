import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <div>
      <Header title="Түгээмэл асуулт хариултууд" />
      <div className='w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex'>
        </div>
      <div className='flex justify-center sm:px-16 px-4'>
      <div className='max-w-5xl w-full'>
    <Footer/>
        </div>
        </div>

    </div>
  )
}

export default page
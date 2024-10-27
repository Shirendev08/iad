import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Image from 'next/image'
const page = () => {
    return (
        <div className='sm:left-1/4 sm:right-1/4 left-5 right-5'>
            <Header title="Мэдээлэл" />
            <div className='w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex'>
            </div>
            <div className='flex justify-center sm:px-16 px-4'>
                <div className='max-w-5xl w-full'>
                    <div className="flex">

                    <div className='flex mt-10 flex-wrap'>
                        <div key='' className='bg-white h-30 mb-5'>

                            <div className="">
                                <Link href='' key='' className="">
                                    <Image src='/office.jpg' alt='img' width={200} height={100} />
                                    <p className='text-center'>
                                        asdjhgsk
                                    </p>
                                </Link>
                            </div>
                        </div>


                    </div>
                      <div className='flex mt-10 flex-wrap'>
                        <div key='' className='bg-white h-30 mb-5'>

                            <div className="">
                                <Link href='' key='' className="">
                                    <Image src='/office.jpg' alt='img' width={200} height={100} />
                                    <p className='text-center'>
                                        asdjhgsk
                                    </p>
                                </Link>
                            </div>
                        </div>


                    </div>
                    </div>

                    <Button />
                    <Footer />
                </div>
            </div>


        </div>
    )
}

export default page
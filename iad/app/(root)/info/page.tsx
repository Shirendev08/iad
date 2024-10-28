import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const Page = () => {
    return (
        <div className='sm:left-1/4 sm:right-1/4 left-5 right-5'>
            <Header title="Мэдээлэл" />
            <div className='w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex'></div>
            <div className='flex justify-center sm:px-16 px-4'>
                <div className='max-w-5xl w-full'>
                    <div className="flex flex-wrap"> {/* Make sure this is a flex container that wraps */}

                    <div  className='bg-white shadow-lg rounded-lg overflow-hidden w-64 m-4 transition-transform transform hover:scale-105}'>
                        <Link href='info/ttc' >
                            <div className="relative">
                                <Image src='/tic.png' alt='things to consider'width={256} height={128} className="object-cover w-full h-32" />
                            </div>
                            <div className="p-4">
                                <p className="text-center text-gray-700 font-semibold underline">
                                Салбаруудын үйл ажиллагаатай холбоотой анхаарах зүйлс
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div  className='bg-white shadow-lg rounded-lg overflow-hidden w-64 m-4 transition-transform transform hover:scale-105}'>
                        <Link href='info/rp' >
                            <div className="relative">
                                <Image src='/rp.png' alt='things to consider'width={256} height={128} className="object-cover w-full h-32" />
                            </div>
                            <div className="p-4">
                                <p className="text-center text-gray-700 font-semibold underline">
                                Зарим эрсдэлээс урьдчилан сэргийлэх
                                </p>
                            </div>
                        </Link>
                    </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Page;
    
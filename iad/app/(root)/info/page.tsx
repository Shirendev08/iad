import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Button from '@/components/Button';
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

                        <div className='flex mt-10 flex-wrap'>
                            <div key='' className='bg-white h-30 mb-5 w-1/2 p-2'> {/* Adjust width and padding for wrapping */}
                                <div className="">
                                    <Link href='' key='' className="block text-wrap"> {/* Added block for better text wrapping */}
                                        <Image src='/office.jpg' alt='img' width={200} height={100} />
                                        <p className='text-center'>
                                            Салбаруудын үйл ажиллагаатай холбоотой анхаарах зүйлс
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-10 flex-wrap'>
                            <div key='' className='bg-white h-30 mb-5 w-1/2 p-2'> {/* Same adjustments here */}
                                <div className="">
                                    <Link href='' key='' className="block">
                                        <Image src='/office.jpg' alt='img' width={200} height={100} />
                                        <p className='text-center'>
                                            Зарим эрсдэлээс урьдчилан сэргийлэх
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
    );
};

export default Page;

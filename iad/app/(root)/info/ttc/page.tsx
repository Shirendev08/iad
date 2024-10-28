import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
const page = () => {
  return (
    <div className='sm:left-1/4 sm:right-1/4 left-5 right-5'>
    <Header title="Салбаруудын үйл ажиллагаатай холбоотой анхаарах зүйлс" />
    <div className='w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex'></div>
    <div className='flex justify-center sm:px-16 px-4'>
        <div className='max-w-5xl w-full'>
            <div className="flex flex-wrap"> {/* Make sure this is a flex container that wraps */}
                    <p className='bg-white mb-10 h-10 w-full flex justify-center text-center'>
                    Дотоод аудитын газраас хийгдэж буй ажлуудын хүрээнд дараах асуудлууд илэрч байна. Үүнд:
                    </p>
                   <div className='flex flex-row mb-10'>
                        <div className='bg-white p-10'>
                            <p className='font-bold'>Зээлийн үйл ажиллагаанд гарсан нийтлэг зөрчлүүд:</p>
                            <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                                <li>Зээлийн судалгаа, баримтжуулалт хангалтгүй,</li>
                                <li>Орлого тодорхойлох баримт хангалтгүй,</li>
                                <li>Хамтран зээлдэгчийг программд бүртгээгүй,</li>
                                <li>Эргэн хяналт хийгээгүй, эргэн хяналтын тайлан хийгдээгүй,</li>
                                <li>Даатгалын хугацаа дууссан,</li>
                                <li>Зээлийн хорооны шийдвэрийн нэмэлт нөхцөл хэрэгжээгүй,</li>
                                <li>Зээлийн шинжилгээний тайланд зээлдэгчийн орлогыг буруу тооцсон,</li>    
                                <li>Зээлийн хувийн хэрэг эмх цэгцгүй.</li>    
                            </ul>
                        </div>
                        <div className='bg-white p-10'>
                            <p className='font-bold'>Теллерийн үйл ажиллагаанд гарсан нийтлэг зөрчлүүд:</p>
                            <ul className='list-disc list-inside dark:text-gray-400 bg-white mb-5 p-10'>
                                <li>Зээлийн судалгаа, баримтжуулалт хангалтгүй,</li>
                                <li>Орлого тодорхойлох баримт хангалтгүй,</li>
                                <li>Хамтран зээлдэгчийг программд бүртгээгүй,</li>
                                <li>Эргэн хяналт хийгээгүй, эргэн хяналтын тайлан хийгдээгүй,</li>
                                <li>Даатгалын хугацаа дууссан,</li>
                                <li>Зээлийн хорооны шийдвэрийн нэмэлт нөхцөл хэрэгжээгүй,</li>
                                <li>Зээлийн шинжилгээний тайланд зээлдэгчийн орлогыг буруу тооцсон,</li>    
                                <li>Зээлийн хувийн хэрэг эмх цэгцгүй.</li>    
                            </ul>
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
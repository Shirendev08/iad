import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const page = () => {
    return (
        <div className='sm:left-1/4 sm:right-1/4 left-5 right-5'>
            <Header title="Зарим эрсдэлээс урьдчилан сэргийлэх" />
            <div className='w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex'></div>
            <div className='flex justify-center sm:px-16 px-4'>
                <div className='max-w-5xl w-full'>
                    <div className='bg-white p-7'>
                        Богд банкны салбаруудад тохиолдсон анхаарал татсан эрсдэлүүд тэдгээрээс хэрхэн урьдчилан сэргийлэх талаар дараах хэсэг тусгав. Үүнд:
                        <p className='font-bold'>
                            Эрсдэл 1:
                        </p>

                        Бусад арилжааны банкны депозит дансны хуулгыг хуурамчаар үйлдсэн.
                        <p className='font-bold'>

                            Урьдчилан сэргийлэх арга зам:
                        </p>
                        <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                            <li>Орлого зарлагын дүн, үлдэгдлийг тулган харах,</li>
                            <li>Банкны ажилтны тамга, тэмдгийг нягтлах,</li>
                            <li>Гүйлгээний бүтэц, фонтыг нэгэн хэвийн эсэхийг харах,</li>
                            <li>Дансны дугаарууд, нэр таарч байгаа эсэхийг харах,</li>
                            <li>QR кодтой хуулгын хөл дүн таарч буй эсэхийг, QR уншуулаад гарч буй мэдээлэл таарч байгаа эсэхийг харах,</li>
                        </ul>



                        <p className='font-bold'>
                            Эрсдэл 2:
                        </p>

                        Зээлдэгч нарын хамаарлыг баталгаажуулах зорилгоор авсан хүүхдийн төрсний гэрчилгээ хуурамч.
                        <p className='font-bold'>

                        Урьдчилан сэргийлэх арга зам:
                        </p>
                        <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                            <li>ТҮЦ машины лавлагаа авах,</li>
                            <li>Зээлдэгчийн бичиг баримтыг заавал эх хувиас нь хуулбарлаж авах.</li>
                        </ul>
                        

                        


                        <p className='font-bold'>
                            Эрсдэл 3:
                        </p>

                        Зээл бүрэн төлөгдөж дуусаагүй байхад зээлийн барьцааг чөлөөлөх албан бичгийг үйлдэж, харилцагчид өгсөн, улмаар зээл барьцаа хөрөнгөгүй болсон.
                        <p className='font-bold'>

                        Урьдчилан сэргийлэх арга зам:
                        </p>
                        
                        <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                            <li>Зээл хаагдаагүй тохиолдолд барьцаа хөрөнгийг чөлөөлөх албан бичиг үйлдэхгүй байх,
                            </li>
                            <li>Салбарын захирал хяналт тавих.</li>
                        </ul>
                        


                        <p className='font-bold'>
                            Эрсдэл 4:
                        </p>

                        Автомашины гэрчилгээг хуурамчаар үйлдсэн.

                        <p className='font-bold'>Урьдчилан сэргийлэх арга зам:</p>
                        
                        <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                            <li>Зээл олголтоос өмнө autobox.mn сайтаар банкны эзэмшилд шилжсэн эсэхийг баталгаажуулах.</li>
                        </ul>
                        


                        <p className='font-bold'>
                            Эрсдэл 5:
                        </p>

                        Төрсөн дүүгийнхээ байрыг худалдаж авсан. Урьдчилгаа төлбөр байршуулаагүй. Байр мөнгөжүүлсэн. Зээл хаахад худалдагч тал нь ... сая төгрөгийн шилжүүлэг хийж хаасан.
                        <p className='font-bold'>

                        Урьдчилан сэргийлэх арга зам:
                        </p>
                        <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                            <li>Худалдагч талын хамаарлыг судлах,</li>
                            <li>Урьдчилгаа төлбөрийн баримтыг заавал авах.</li>
                            
                        </ul>
                      

                        <p className='font-bold'>
                            Эрсдэл 6:
                        </p>

                        Зээлийн зарцуулалт баримтаар нотлогдохгүй, зориулалт бусаар ашигласан.
                        <p className='font-bold'>

                        Урьдчилан сэргийлэх арга зам:
                        </p>
                        <ul className='list-disc list-inside dark:text-gray-400 mb-5'>
                            <li>Зээлийн зарцуулалтыг баримтаар хянах.</li>
                        </ul>
                        
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default page
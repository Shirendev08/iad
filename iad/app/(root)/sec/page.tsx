import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const page = () => {
  return (
    <>
      <Header title="Зайны хяналт" />
      <div className='w-full mb-8 h-[15px] bg-green-700 text-center items-center justify-center flex'>
      </div>
    <div className='flex justify-center sm:px-16 px-4'>
    <div className='max-w-5xl w-full bg-white '>
    <p className='mt-3 mr-2 ml-2'>  Дотоод аудитын газраас Богд банкны үйл ажиллагаанд хийгдэх тасралтгүй аудит буюу зайны хяналтыг 2024.04.01-ний өдрөөс эхлэн үйл ажиллагаанд МТГ-тай хамтран нэвтрүүлсэн. Уг үйл ажиллагааны дараагийн шат болгон ЭУГ, Комплайнсын хэлтэс,СУГ, БХГ-уудтай хамтран нэмэлт шалгуурыг 2024.11.01-ний өдрөөс нэвтрүүлсэн.</p>
        <p className='mt-3 mr-2 ml-2'>Уг үйл ажиллагаатай холбогдуулан салбар, нэгжүүдийн зүгээс дараах зүйлсийг анхаарах нь зүйтэй. Үүнд:</p>
        <ol className='ml-10'>
          <li>1. Гарсан алдаа, зөрчлийг тухай бүрт нь залруулах,</li>
          <li>2. Холбоотой ажилтнууд, газар нэгжүүдэд гарсан алдаатай холбоотой мэдээллийг заасан хугацаанд ирүүлэх,</li>
          <li>3. Алдаа зөрчлийг залруулахад хүндрэл тохиолдвол шийдвэр гаргах эрх бүхий ажилтнаас чиглэл авах, шийдвэр гаргуулах.</li>
        </ol>
       <Footer/>
      </div>
     
    </div>
    </>
  )
}

export default page
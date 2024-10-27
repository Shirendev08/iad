import Footer from '@/components/Footer'
import LiveChatButton from '@/components/LiveChatButton'
import React from 'react'
import Header from '@/components/Header'
const page = () => {
  return (
<>
    <Header title="ДАГ-ын талаар" />
    <div className='w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex'>
    </div>
    <div className='flex justify-center sm:px-16 px-4'>
      <div className='max-w-5xl w-full'>
      <div className="flex justify-center sm:px-16 px-4 bg-white">
        <div className='max-w-5xl w-full'>
            <p className='mb-4 mt-5'>
                Банкны дотоод аудитын үйл ажиллагааг Төлөөлөн удирдах зөвлөлийн харъяанд байх Дотоод аудитын газар хариуцан ажилладаг. <br />
                Дотоод аудит гэдэг нь байгууллагын үйл ажиллагааг сайжруулах, үнэ цэнийг нэмэгдүүлэхийн тулд баталгаажуулах болон зөвлөх үйлчилгээг бие даасан, бодитойгоор үзүүлэх үйл ажиллагаа юм. Дотоод аудитын газар нь Эрсдэлийн удирдлага, Хяналт болон Засаглалын үйл явцын үр өгөөжийг системтэй, дэг журамтай аргаар үнэлэх, сайжруулах замаар байгууллагыг зорилгодоо хүрэхэд тусалдаг. Богд банкны дотоод аудитын үйл ажиллагаатай холбоотой мэдээллийг дараах танилцуулгаас харах боломжтой.
            </p>
            <iframe
                src="https://drive.google.com/file/d/1fuGJ9iEui0Drg1YdzGag2YYye68hBXCM/preview"
                width="100%"
                height="480"
                allow="autoplay"
                className="rounded shadow-lg mb-4 mt-10"
            ></iframe>
            <LiveChatButton />
            <Footer />
        </div>
    </div>
      </div>
      </div>
  
</>

  )
}

export default page
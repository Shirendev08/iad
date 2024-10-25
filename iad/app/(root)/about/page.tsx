import Footer from '@/components/Footer'
import LiveChatButton from '@/components/LiveChatButton'
import React from 'react'

const page = () => {
  return (
    <div className=' absolute flex flex-col sm:left-1/4 sm:right-1/4 left-5 right-5 '>
      
    <p className=''>
    Банкны дотоод аудитын үйл ажиллагааг Төлөөлөн удирдах зөвлөлийн харъяанд байх Дотоод аудитын газар хариуцан ажилладаг. <br/>
Дотоод аудит гэдэг нь байгууллагын үйл ажиллагааг сайжруулах, үнэ цэнийг нэмэгдүүлэхийн тулд баталгаажуулах болон зөвлөх үйлчилгээг бие даасан, бодитойгоор үзүүлэх үйл ажиллагаа юм.  Дотоод аудитын газар нь Эрсдэлийн удирдлага, Хяналт болон Засаглалын үйл явцын үр өгөөжийг системтэй, дэг журамтай аргаар үнэлэх, сайжруулах замаар байгууллагыг зорилгодоо хүрэхэд тусалдаг. Богд банкны дотоод аудитын үйл ажиллагаатай холбоотой мэдээллийг дараах танилцуулгаас харах боломжтой.
    </p>
    <iframe
        src="https://drive.google.com/file/d/1fuGJ9iEui0Drg1YdzGag2YYye68hBXCM/preview"
        width="640"
        height="480"
        allow="autoplay"
        className="rounded shadow-lg"
      ></iframe>
      <LiveChatButton/>
      <Footer/>
  </div>
  )
}

export default page
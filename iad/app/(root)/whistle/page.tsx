"use client"
import React,{useState} from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import sendEmail from '@/lib/server/server'
const page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    information: '',
  });
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log the form data to verify it's captured correctly
    console.log('Form Data:', formData);

    // Serialize form data
    const data = JSON.parse(JSON.stringify(formData));

    try {
      console.log('Sending email...');

      // Invoke the server-side email function
      await sendEmail(data);

      console.log('Email sent successfully!');
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
    <Header title="Шүгэл үлээх суваг" />

      <div className='flex justify-center sm:px-16 px-4'>
        <div className='max-w-5xl w-full'>
        <ul className=" list-disc list-inside dark:text-gray-400">
    <li>
    Та нэр болон и-мэйл бичихгүйгээр мэдээлэл илгээх боломжтой.
    </li>
    <li>
    Таны илгээсэн мэдээлэл зөвхөн ТУЗ-ийн харъяа Ерөнхий аудиторт хүргэгдэнэ.
    </li>
    <li>
    Шүгэл үлээгч нь шүгэл үлээхээс өмнө тухайн асуудлын талаар эргэлзэж байгаа бол Ерөнхий аудитороос зөвлөгөө авах боломжтой.
    </li>
    <li>
    Банк нь шүгэл үлээгчийн аюулгүй байдлыг хангах, мэдүүлэгт дурдсан этгээд болон түүний үйлдэл, эс үйлдэхүйг зохих ёсоор шалгаж, шийдвэрлэх зорилгоор үр дүнтэй, боломжит бүхий л арга хэмжээг авна.
    </li>
    <li>
    Шүгэл үлээгч нь шүгэл үлээсний улмаас түүний эрх ашиг зөрчигдөж, аливаа этгээдээс дарамт шахалт, сүрдүүлэг, хариу үйлдэл үзүүлж байна гэж үзвэл энэ талаар Ерөнхий аудиторт нэн даруй мэдэгдэх бөгөөд хэрэв тухайн мэдээлэл үндэслэлтэй бол Үйл ажиллагаа, хүний нөөцийн газар шалгах ажиллагааг гүйцэтгэж, холбогдох арга хэмжээг авна.
    </li>
    <li>
    Ирүүлсэн мэдээлэл нь бүрэн бус бол банк мэдээллийг баталгаажуулахаас татгалзах эрхтэй
    </li>
</ul>
      
<form onSubmit={handleFormSubmit}>
 
    <div className="mb-6">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Нэр</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Нэр" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Мэйл</label>
        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="information" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Мэдээлэл</label>
        <input type="text" onChange={handleChange} id="information" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Мэдээллээ оруулна уу" required />
    </div> 
    <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">File илгээхийг хүсвэл</span> энэ хэсэгт оруулна уу</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
   
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
      <Footer/>
          </div>
          </div>
  

    </>
  )
}

export default page
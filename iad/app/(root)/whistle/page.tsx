import React from 'react'

const page = () => {
  return (
    <>
      <div>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
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
      </div>
<form>
 
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
        <input type="text" id="information" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Мэдээллээ оруулна уу" required />
    </div> 
   
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </>
  )
}

export default page
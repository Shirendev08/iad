"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sendEmail from "@/lib/server/server";
import Button from "@/components/Button";
const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    information: "",
    file: null, // File state
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false)


   
    const data = {
      name: formData.name,
      email: formData.email,
      information: formData.information,
      file: formData.file
    };

    try {
      await sendEmail(data);
      setLoading(false);
      setSuccess(true)
    } catch (error: unknown) { // Specify the type here
      setLoading(false);
  
      // Type guard to handle different types of errors
      if (error instanceof Error) {
      } else {
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" && files ? files[0] : value, // Check if files is not null
    }));
  };

  return (
    <>
      <Header title="Шүгэл үлээх суваг" />
      <div className="w-full h-[15px] mb-8 bg-green-700 text-center items-center justify-center flex"></div>

      <div className="flex justify-center sm:px-16 px-4">
        <div className="max-w-5xl w-full">
          <ul className="list-disc list-inside dark:text-gray-400 bg-white mb-5">
            {/* Your list items here */}
          </ul>
          {success && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Амжилттай!</strong>
              <span className="block sm:inline">Таны маягт амжилттай илгээгдлээ.</span>
            </div>
          )}
          <form onSubmit={handleFormSubmit} className="mr-1 mb-10">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Нэр
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Нэр"
                
                onChange={handleChange} // Add onChange here
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Мэйл
              </label>
              <input
                type="email" // Use type="email" for better validation
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                
                onChange={handleChange} // Add onChange here
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="information"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Мэдээлэл
              </label>
              <input
                type="text"
                id="information"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Мэдээллээ оруулна уу"
                required
                onChange={handleChange} // Add onChange here
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">File илгээхийг хүсвэл</span>{" "}
                    энэ хэсэгт оруулна уу
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleChange}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`text-white mt-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? "Илгээж байна..." : "Илгээх"}
            </button>
          </form>
          <Button/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Page;

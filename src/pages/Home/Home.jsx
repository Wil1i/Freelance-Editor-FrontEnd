import React, { useEffect } from 'react'
import { QuestionItem } from "../../components/QuestionItem/QuestionItem"
import { Link } from "react-router-dom"

export default function Home() {
  useEffect(() => {
    document.title = "سرویس تعمیر گوشی در محل - اپل سرویس"
  }, [])

  return (
    <>
      <div className="bg-blue-500 w-screen flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl text-white sansbold text-center mt-10 px-3 sm:px-0 sm:text-5xl sm:mt-16 lg:text-7xl lg:mt-20">ادیتو!</h1>
        <p className="text-gray-300 w-full text-center mt-10 px-7 lg:px-24">
          به راحتی ادیتور خودتو پیدا کن
        </p>
        <div className="w-full mt-10"></div>
        <Link className="btn btn-out-white" to='/register'>
          شروع
        </Link>

      </div>

      <div className="container flex flex-col justify-center items-center gap-6 mx-auto my-16 px-5
        sm:px-0">
        <div className="w-full hidden justify-center items-center gap-5 lg:flex">
          <QuestionItem title="چطور ادیتور پیدا کنم ؟" description="فقط کافیه داخل سایت ثبت نام کنی، نمونه کار هارو ببینی و با ادیتور مد نظرت، به صورت ماهیانه و یا پروژه ای کار کنی و کامل با ادیتور مد نظرت ارتباط بگیری." svg={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          )} />

          <QuestionItem title="چطور ادیتور بشم ؟" description="فقط باید به عنوان ادیتور ثبت نام کنی، و از بخش آموزش، ویدیو هارو ببینی و یکم تمرین کنی، اون موقع هست که میتونی شروع به کسب درآمد کنی." svg={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          )} />

          <QuestionItem title="چطور پروژه قبول بکنم ؟" description="بهترین نمونه کار هاتو داخل پروفایلت قرار بده و منتظر بمون تا بهت درخواست بدن، یا اینکه برای پروژه هایی که قرار دادن درخواست کار ارسال کنی." svg={(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-500 w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          )} />
        </div>
      </div>
    </>
  )
}
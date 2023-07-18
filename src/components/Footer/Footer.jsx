import React from 'react'
import { Link } from 'react-router-dom'

function FooterIcon(props) {
  return <Link to='/' className={`${props.color} flex justify-center items-center hover:scale-105`}>{props.svg}</Link>
}

export default function Footer() {
  return (
    <>
      <div className='container mt-16 px-3 mx-auto
        sm:p-0'>
        <div className="bg-slate-200 shadow-sm shadow-slate-400 flex flex-col justify-center mx-auto rounded-xl
          sm:flex-row">
          <div className="w-full flex flex-col items-center gap-3 p-9
          sm:w-1/3 lg:w-1/4">
            <span className='text-blue-500 text-3xl sansbold mb-3'>ادیتو !</span>
            <span className='text-slate-700 text-justify text-sm'>دیگه پیدا کردن ادیتور خوب، سخت نیست! به راحتی ویدیو هات رو بسپر به بهترین ادیتور ها.</span>
          </div>
          <div className="w-full flex flex-col items-center gap-3 p-9
          sm:w-1/3 lg:w-1/4">
            <span className='text-blue-500 text-3xl sansbold mb-3'>راه های ارتباطی</span>
            <span className='text-slate-700 text-sm'>contact@edito.ir</span>
            <a href="https://discord.gg/asldkasdk" className='underline text-slate-700 text-sm'>چنل دیسکورد</a>
          </div>
          <div className="w-full hidden flex-col items-center gap-3 p-9 lg:flex
          sm:w-1/3 lg:w-1/4">
            <span className='text-blue-500 text-3xl sansbold mb-3'>لینک ها</span>
            <Link to='/' className='text-slate-700 hover:text-blue-500 underline text-sm'>توسعه برنامه‌نویسان</Link>
            <Link to='/' className='text-slate-700 hover:text-blue-500 underline text-sm'>همکاری با ما</Link>
            <Link to='/' className='text-slate-700 hover:text-blue-500 underline text-sm'>ارتباط با ما</Link>
          </div>
          <div className="w-full flex flex-col items-center gap-3 p-9
          sm:w-1/3 lg:w-1/4">
            <span className='text-blue-500 text-3xl sansbold mb-3'>دنبال کنید</span>
            <div className="w-full flex justify-center items-center gap-6">
              <FooterIcon
                color='text-rose-600'
                svg={(
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                )}
              />
              <FooterIcon
                color='text-green-600'
                svg={(
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                )}
              />
              <FooterIcon
                color='text-sky-600'
                svg={(
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 flex flex-col justify-center items-center gap-5 mx-auto
        sm:flex-row">
        <span className='border-none border-slate-400 pl-5 text-sm sm:border-l'>تمام حقوق این سایت محفوظ می باشد ©</span>
        <div className='flex justify-center items-center gap-3'>
          <span className='text-sm'>زیر مجموعه</span>
          <a href='https://apple-service.ir/' className='hover:text-blue-500 underline text-sm'>wil1i.ir</a>
        </div>
      </div>
    </>
  )
}
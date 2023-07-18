import React from 'react'
import { NavLink } from 'react-router-dom'

import { useState } from 'react'

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  function closeMobileMenu() {
    setShowMobileMenu(false)
  }

  window.addEventListener('click', event => {
    event.target.dataset.close === 'mobile-menu' && setShowMobileMenu(false)
  })

  return (
    <div className='fixed top-0 flex justify-center items-center w-full'>
      <div className={`bg-blue-500 bg-opacity-80 w-full flex justify-between items-center p-3 pl-2.5 px-7 z-50 m-2 rounded-xl shadow-xl border-cyan-100 ${location.pathname == "/" && 'border-[1px]'}`}>
        <div
          className="btn btn-ghost text-xl flex items-center relative lg:hidden"
          onClick={() => {
            showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true)
          }}
        >
          {
            showMobileMenu ? (
              <svg
                className="stroke-white w-9 h-9 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="stroke-white w-9 h-9 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )
          }
        </div>
        <ul className='hidden justify-center items-center gap-9 lg:flex'>
          <li>
            <NavLink to='/'
              className={link => link.isActive ? 'header__navlink-active' : 'header__navlink'}>
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-us'
              className={link => link.isActive ? 'header__navlink-active' : 'header__navlink'}>
              ارتباط با ما
            </NavLink>
          </li>
        </ul>
        {
          <NavLink className='btn btn-white' to='/register'>ثبت نام / ورورد</NavLink>
        }
      </div>

      <div
        className={`w-screen h-screen fixed top-0 left-0 z-50
          ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}
          lg:hidden
        `}
        data-close={'mobile-menu'}
      >
        <div
          className={`bg-white h-full w-4/6 flex flex-col items-center
          shadow-2xl absolute top-0 left-0`}
        >
          <ul className='w-full flex flex-col justify-center items-center gap-3 p-3'>
            <li className='w-full'>
              <NavLink to='/'
                className={link => link.isActive ? 'btn btn-blue w-full' : 'btn btn-out-blue w-full'}
                onClick={closeMobileMenu}>
                صفحه اصلی
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink to='/order'
                className={link => link.isActive ? 'btn btn-blue w-full' : 'btn btn-out-blue w-full'}
                onClick={closeMobileMenu}>
                ثبت سفارش
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink to='/contact-us'
                className={link => link.isActive ? 'btn btn-blue w-full' : 'btn btn-out-blue w-full'}
                onClick={closeMobileMenu}>
                ارتباط با ما
              </NavLink>
            </li>
            <li className='w-full'>
              <NavLink to='/report'
                className={link => link.isActive ? 'btn btn-blue w-full' : 'btn btn-out-blue w-full'}
                onClick={closeMobileMenu}>
                ثبت شکایات
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
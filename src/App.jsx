import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useRoutes } from "react-router-dom"

import { routes } from "./routes"
import Loader from "./components/Loader/Loader"
import { Header } from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  const [screenLoading, setScreenLoading] = useState(true)

  const router = useRoutes(routes)

  const hideHFFrom = [
    '/register'
  ]

  useEffect(() => {
    setScreenLoading(false)
  }, [])

  return (
    <>
      {!hideHFFrom.includes(location.pathname) && <Header />}
      {router}
      {!hideHFFrom.includes(location.pathname) && <Footer />}

      {
        screenLoading && createPortal(
          <div className="bg-black bg-opacity-25 backdrop-blur-xl
          w-screen h-screen flex justify-center items-center p-3 overflow-hidden
          fixed top-0 left-0 z-50">
            <Loader size={'w-16 h-16'} before={'before:bg-white'} />
          </div>,
          document.body
        )
      }
    </>
  )
}

export default App
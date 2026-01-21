import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

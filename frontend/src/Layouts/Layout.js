import React from 'react'
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header></Header>
      <main className='h-full w-full'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout

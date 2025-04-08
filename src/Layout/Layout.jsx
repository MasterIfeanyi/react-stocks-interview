import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer/Footer'
// import Navigation from './Navigation'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
    <main className='App'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export const Template = () => {  
  return (
    <main className='container-xxl'>
        <Header />

          {<Outlet />}

        <Footer />
    </main>
  )
}

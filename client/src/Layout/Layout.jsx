import React from 'react'
import Header from '../init/Header'
import Loginpage from '../components/Loginpage'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='p-4 flex-col min-h-screen'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout
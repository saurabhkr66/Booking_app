import React from 'react'
import Header from '../init/Header'
import Loginpage from '../components/Loginpage'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout
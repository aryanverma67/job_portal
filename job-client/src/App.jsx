import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const App = () => {
  return (
    <div className=''>
   <Navbar/>
   <Outlet/>
    </div>
  )
}

export default App
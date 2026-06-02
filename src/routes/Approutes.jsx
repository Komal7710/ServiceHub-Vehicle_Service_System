import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from '../pages/Home'
import Workshop from '../pages/Workshop'
import Booking from '../pages/Booking'
import Dashboard from '../pages/Dashboard'
import Services from '../pages/Services'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Approutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/workshop' element={<Workshop/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Approutes

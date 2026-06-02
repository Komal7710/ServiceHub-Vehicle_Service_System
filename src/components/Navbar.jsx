import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
                  <nav className="bg-white shadow-md sticky top-0 z-50 px-9 py-4 flex justify-between ">
                      <h1 className="text-2xl font-bold text-blue-600">ServiceHub</h1>
      
                      <div className="flex gap-6  text-gray-900 ">
                          <Link className="hover:decoration-orange-500 hover:text-xl hover:bg-orange-400 rounded-lg items-center px-2 hover:h-8" to="/">Home</Link>
                          <Link className="hover:decoration-orange-500 hover:text-xl hover:bg-orange-400 rounded-lg items-center px-2 hover:h-8" to="/services">Services</Link>
                          <Link className="hover:decoration-orange-500 hover:text-xl hover:bg-orange-400 rounded-lg items-center px-2 hover:h-8" to="workshop">Workshop</Link>
                          <Link className="hover:decoration-orange-500 hover:text-xl hover:bg-orange-400 rounded-lg items-center px-2 hover:h-8" to="booking">Booking</Link>
                          <Link className="hover:decoration-orange-500 hover:text-xl hover:bg-orange-400 rounded-lg items-center px-2 hover:h-8" to="dashboard">Dashboard</Link>
                      </div>
      
                      <button className=" bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg w-27">Login</button>
                  </nav>
    </div>
  )
}

export default Navbar

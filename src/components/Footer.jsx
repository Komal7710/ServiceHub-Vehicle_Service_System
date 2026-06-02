import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div>
       <footer className="bg-black text-white pt-12 pb-6">
                      <div className="max-w-7xl mx-auto px-8">
      
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
      
                              {/* Logo Section */}
                              <div>
                                  <h1 className="text-3xl font-bold text-yellow-400">
                                      AutoCare
                                  </h1>
      
                                  <p className="text-gray-300 mt-4">
                                      AutoCare is India's most trusted vehicle service booking
                                      platform. Book car services online at the best price.
                                  </p>
      
                                  <div className="flex gap-4 mt-6">
                                      <div className="bg-gray-700 p-3 rounded-full">
                                          <FaFacebookF />
                                      </div>
      
                                      <div className="bg-gray-700 p-3 rounded-full">
                                          <FaInstagram />
                                      </div>
      
                                      <div className="bg-gray-700 p-3 rounded-full">
                                          <FaTwitter />
                                      </div>
      
                                      <div className="bg-gray-700 p-3 rounded-full">
                                          <FaLinkedinIn />
                                      </div>
                                  </div>
                              </div>
      
                              {/* Quick Links */}
                              <div>
                                  <h2 className="font-bold text-xl mb-4">
                                      Quick Links
                                  </h2>
      
                                  <ul className="space-y-2 text-gray-300">
                                      <li>Home</li>
                                      <li>Services</li>
                                      <li>Packages</li>
                                      <li>Workshops</li>
                                      <li>About Us</li>
                                      <li>Contact Us</li>
                                  </ul>
                              </div>
      
                              {/* Services */}
                              <div>
                                  <h2 className="font-bold text-xl mb-4">
                                      Services
                                  </h2>
      
                                  <ul className="space-y-2 text-gray-300">
                                      <li>Oil Change</li>
                                      <li>Car Wash</li>
                                      <li>Engine Repair</li>
                                      <li>Tire Service</li>
                                      <li>Battery Service</li>
                                      <li>AC Repair</li>
                                  </ul>
                              </div>
      
                              {/* Support */}
                              <div>
                                  <h2 className="font-bold text-xl mb-4">
                                      Support
                                  </h2>
      
                                  <ul className="space-y-2 text-gray-300">
                                      <li>Help Center</li>
                                      <li>Terms & Conditions</li>
                                      <li>Privacy Policy</li>
                                      <li>Refund Policy</li>
                                      <li>FAQ</li>
                                  </ul>
                              </div>
      
                              {/* Contact */}
                              <div>
                                  <h2 className="font-bold text-xl mb-4">
                                      Contact Us
                                  </h2>
      
                                  <div className="space-y-4 text-gray-300">
      
                                      <div className="flex gap-3">
                                          <FaPhoneAlt className="mt-1" />
                                          <span>+91 98765 43210</span>
                                      </div>
      
                                      <div className="flex gap-3">
                                          <FaEnvelope className="mt-1" />
                                          <span>support@autocare.com</span>
                                      </div>
      
                                      <div className="flex gap-3">
                                          <FaMapMarkerAlt className="mt-1" />
                                          <span>
                                              B-123, Patiala-147021,Punjab
                                          </span>
                                      </div>
      
                                  </div>
                              </div>
      
                          </div>
      
                          {/* Bottom */}
                          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
                              © 2026 AutoCare. All rights reserved.
                          </div>
      
                      </div>
                  </footer>
      
    </div>
  )
}

export default Footer

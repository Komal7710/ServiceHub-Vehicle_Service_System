import React from 'react'
import { Link } from 'react-router-dom'
import services from '../data/service'
import works from '../data/Works'
import myCar from '../assets/car.jpg'
import workshops from '../data/workshops'
import { FaStar } from "react-icons/fa";



const Home = () => {
    return (
        <div>
           
            {/* Hero Section */}
            <section
                className="min-h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')`,
                }}
            >
                {/* Dark Overlay */}
                <div className="w-full h-full bg-black/60 flex items-center">

                    <div className="max-w-2xl px-16 bg-transparent ">
                        <h1 className="text-white text-6xl font-bold leading-tight mb-6 bg-transparent">
                            Book Vehicle Services Anytime, Anywhere
                        </h1>

                        <p className="text-gray-200 text-lg mb-8 bg-transparent">

                            Car servicing, repair, body work, washing and more.
                        </p>

                        <div className='bg-transparent'>
                            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg t">
                                Explore Services
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto -mt-16 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-6">

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                        {/* Vehicle Type */}
                        <div>
                            <label className="block text-gray-600 mb-2">
                                Vehicle Type
                            </label>

                            <select className="w-full border rounded-lg p-3">
                                <option>Sedan </option>
                                <option >Coupe</option>
                                <option>SUV</option>
                                <option>Hatchback</option>
                            </select>
                        </div>

                        {/* Service Type */}
                        <div>
                            <label className="block text-gray-600 mb-2">
                                Service Type
                            </label>

                            <select className="w-full border rounded-lg p-3">
                                <option>Oil Change</option>
                                <option>Car Wash</option>
                                <option>Engine Repair</option>
                                <option>Tire Service</option>
                                <option>Battery Service</option>
                                <option>AC Repair</option>
                            </select>
                        </div>

                        {/* Date */}
                        <div>
                            <label className="block text-gray-600 mb-2">
                                Preferred Date
                            </label>

                            <input
                                type="date"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        {/* Time Slot */}
                        <div>
                            <label className="block text-gray-600 mb-2">
                                Time Slot
                            </label>

                            <select className="w-full border rounded-lg p-3">
                                <option>Morning</option>
                                <option>Afternoon</option>
                                <option>Evening</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="flex items-end">
                            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg shadow-md">
                                Book Now
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Services */}
            <div className='h-auto bg-gray-50'>
                <div className=' text-center pt-9'>

                    <h1 className='font-bold text-4xl'>Our Popular Services</h1>
                    <p>Choose from a wide range of services for your vehicle</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 py-20 px-10 text-center'>
                    {services.map((service, index) => (
                        <div key={index} className=' shadow-md border-gray-300 rounded-lg '>
                            <div className="w-20 h-20 mx-auto bg-yellow-300 rounded-full flex items-center justify-center">

                                <div className='pb-3 font-bold text-xl '>{service.icon}</div>
                            </div>
                            <h3 className='pb-5 font-bold'>{service.title}</h3>
                            <p className='pb-5 text-gray-800'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Work */}
            <section className="py-16 bg-white top-0">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center pb-10">
                        How It Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {works.map((works, index) => (
                            <div key={index} className="text-center relative">


                                {index !== 3 && (
                                    <div className="hidden lg:block absolute top-10 left-[60%] w-full border-t-2 border-dashed border-gray-300"></div>
                                )}

                                {/* Icon */}
                                <div className="w-24 h-24 mx-auto rounded-full bg-yellow-300 flex items-center justify-center text-4xl mb-5 relative z-10">
                                    {works.icon}
                                </div>

                                <h3 className="font-bold text-xl mb-3">
                                    {works.title}
                                </h3>

                                <p className="text-gray-600">
                                    {works.desc}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshop */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-4xl font-bold">
                            Popular Service Centers
                        </h2>

                        <button className="text-blue-600 font-semibold">
                            View All →
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {workshops.map((shop, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                            >
                                <img
                                    src={shop.image}
                                    alt={shop.name}
                                    className="w-full h-52 object-cover"
                                />

                                <div className="p-5">

                                    <h3 className="font-bold text-2xl mb-3">
                                        {shop.name}
                                    </h3>

                                    <div className="flex items-center gap-2 mb-3">
                                        <FaStar className="text-yellow-400" />
                                        <span>
                                            {shop.rating} ({shop.reviews})
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4">
                                        {shop.location}
                                    </p>

                                    <button className="text-blue-600 font-semibold">
                                        Book Now →
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

          

        </div>
    )
}

export default Home

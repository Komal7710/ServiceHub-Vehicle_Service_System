import React from "react";
import {
  FaOilCan,
  FaCar,
  FaTools,
  FaBatteryFull,
  FaSnowflake,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaOilCan />,
    title: "Oil Change",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800",
  },
  {
    icon: <FaCar />,
    title: "Car Wash",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
  },
  {
    icon: <FaTools />,
    title: "Engine Repair",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
  },
  {
    icon: <FaBatteryFull />,
    title: "Battery Service",
    price: "₹1499",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Professional Vehicle Care At Affordable Prices
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">
          Service Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">
          {[
            "General Service",
            "Repair",
            "Car Wash",
            "Battery",
            "AC Service",
            "Tyres",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <div className="text-orange-600 text-4xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {service.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <FaStar className="text-yellow-400" />
                  <span>4.8 Rating</span>
                </div>

                <p className="font-bold text-orange-600 text-xl mb-4">
                  {service.price}
                </p>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "Expert Mechanics",
            "Best Prices",
            "24/7 Support",
            "Doorstep Pickup",
            "Genuine Parts",
            "Fast Service",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Service Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold">Basic</h3>
            <p className="text-4xl font-bold my-4">₹999</p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg">
              Choose
            </button>
          </div>

          <div className="border-4 border-orange-600 rounded-2xl p-8 text-center scale-105 shadow-xl">
            <h3 className="text-2xl font-bold">Standard</h3>
            <p className="text-4xl font-bold my-4">₹1999</p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg">
              Choose
            </button>
          </div>

          <div className="border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold">Premium</h3>
            <p className="text-4xl font-bold my-4">₹3999</p>
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg">
              Choose
            </button>
          </div>
        </div>
      </section>

     
     
    </div>
  );
};

export default Services;
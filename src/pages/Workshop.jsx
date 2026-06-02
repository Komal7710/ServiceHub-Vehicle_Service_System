import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const workshops = [
  {
    name: "Speed Auto Care",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800",
    rating: "4.8",
    location: "Delhi",
  },
  {
    name: "Auto Masters",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    rating: "4.7",
    location: "Chandigarh",
  },
  {
    name: "Elite Garage",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    rating: "4.9",
    location: "Ludhiana",
  },
  {
    name: "FixWell Service",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",
    rating: "4.6",
    location: "Amritsar",
  },
];

const Workshop = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920')",
        }}
      >
        <div className="bg-black/60 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Find Nearby Workshops
          </h1>

          <p className="text-xl">
            Trusted Service Centers Near You
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <input
            type="text"
            placeholder="Search workshop..."
            className="w-full border p-4 rounded-lg"
          />
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {workshops.map((shop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-bold mb-3">
                  {shop.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <FaStar className="text-yellow-400" />
                  <span>{shop.rating}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-5">
                  <FaMapMarkerAlt />
                  <span>{shop.location}</span>
                </div>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg">
                  Book Now
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Our Workshops?
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="font-bold text-2xl mb-3">
              Certified Mechanics
            </h3>
            <p>Experienced professionals for every service.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="font-bold text-2xl mb-3">
              Genuine Parts
            </h3>
            <p>Only original and high-quality spare parts.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h3 className="font-bold text-2xl mb-3">
              Affordable Pricing
            </h3>
            <p>Best service at competitive prices.</p>
          </div>

        </div>
      </section>

      
    </div>
  );
};

export default Workshop;
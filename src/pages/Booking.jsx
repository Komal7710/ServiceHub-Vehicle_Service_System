import React from "react";

const Booking = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Book Your Service
        </h1>

        <p className="text-lg text-gray-300">
          Schedule your vehicle service in just a few clicks
        </p>
      </section>

      {/* Booking Form */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8 text-center">
            Service Booking Form
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Vehicle */}
            <div>
              <label className="block mb-2 font-semibold">
                Vehicle Model
              </label>

              <input
                type="text"
                placeholder="e.g. Hyundai Creta"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Vehicle Number */}
            <div>
              <label className="block mb-2 font-semibold">
                Vehicle Number
              </label>

              <input
                type="text"
                placeholder="PB10AB1234"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block mb-2 font-semibold">
                Select Service
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>Oil Change</option>
                <option>Car Wash</option>
                <option>Engine Repair</option>
                <option>Battery Service</option>
                <option>AC Repair</option>
              </select>
            </div>

            {/* Workshop */}
            <div>
              <label className="block mb-2 font-semibold">
                Select Workshop
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>Speed Auto Care</option>
                <option>Elite Garage</option>
                <option>Auto Masters</option>
                <option>FixWell Service</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block mb-2 font-semibold">
                Service Date
              </label>

              <input
                type="date"
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block mb-2 font-semibold">
                Time Slot
              </label>

              <select className="w-full border rounded-lg p-3">
                <option>09:00 AM</option>
                <option>11:00 AM</option>
                <option>02:00 PM</option>
                <option>04:00 PM</option>
              </select>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-semibold">
                Pickup Address
              </label>

              <textarea
                rows="4"
                placeholder="Enter pickup address"
                className="w-full border rounded-lg p-3"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg text-lg font-semibold"
              >
                Confirm Booking
              </button>
            </div>

          </form>

        </div>

      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center shadow-lg p-6 rounded-xl">
            <h3 className="font-bold text-2xl mb-3">
              Free Pickup
            </h3>
            <p>Doorstep vehicle pickup and delivery.</p>
          </div>

          <div className="text-center shadow-lg p-6 rounded-xl">
            <h3 className="font-bold text-2xl mb-3">
              Expert Mechanics
            </h3>
            <p>Certified professionals for every service.</p>
          </div>

          <div className="text-center shadow-lg p-6 rounded-xl">
            <h3 className="font-bold text-2xl mb-3">
              Genuine Parts
            </h3>
            <p>100% authentic spare parts guarantee.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Booking;
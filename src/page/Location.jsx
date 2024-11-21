import React from 'react';
import { FaMapMarkerAlt, FaRoad, FaCity, FaEnvelope, FaInfoCircle } from 'react-icons/fa'; // Icons for the address
import Footer from '../componts/Footer';


function Location() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between overflow-x-hidden"> {/* Prevent horizontal scrolling */}

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto p-6 sm:px-4"> {/* Responsive padding and max-width */}
        
        {/* First Address Section with Icons */}
        <section className="bg-white shadow-lg rounded-lg p-8 mt-10 hover:shadow-orange-500 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-8 uppercase tracking-wide flex justify-center items-center">
            <FaMapMarkerAlt className="mr-3" />
            Our Location
          </h2>
          <p className="text-sm sm:text-lg text-center text-gray-600 mb-6">
            We are located at a convenient spot that is easy to reach. Below are the details of our location.
          </p>
          <address className="text-sm sm:text-lg text-gray-700 text-center space-y-4">
            {/* Add address details if needed */}
          </address>
        </section>

        {/* Second Address Section with Icons */}
        <section className="bg-white shadow-lg rounded-lg p-8 mt-10 hover:shadow-orange-500 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-8 uppercase tracking-wide flex justify-center items-center">
            <FaInfoCircle className="mr-3 text-teal-700" />
            Additional Location Info
          </h2>
          <p className="text-sm sm:text-lg text-center text-gray-600 mb-6">
            Below is the same address presented in another section for easy reference.
          </p>
          <address className="text-sm sm:text-lg text-gray-700 text-center space-y-4">
            <ul className="list-none text-left space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-teal-700 mr-3" />
                <span>Near by ST Stand</span>
              </li>
              <li className="flex items-center">
                <FaRoad className="text-teal-700 mr-3" />
                <span>KBP Road, Islampur</span>
              </li>
              <li className="flex items-center">
                <FaCity className="text-teal-700 mr-3" />
                <span>Tal: Walwa, Dist: Sangli</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-teal-700 mr-3" />
                <span>Pin-code: 415409</span>
              </li>
            </ul>
          </address>
        </section>
      </div>

      {/* Full-Width Map Section */}
      <div className="w-full mt-8 px-4"> {/* Padding for responsiveness */}
        <iframe
          className="w-full h-[300px] sm:h-[600px] rounded-lg shadow-lg hover:shadow-orange-500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.803990019591!2d74.25872507492652!3d17.04599998378413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1752b2e3f15d3%3A0x92212b09170cc8cb!2sBus%20Stand%20and%20Depot!5e1!3m2!1sen!2sin!4v1731993238588!5m2!1sen!2sin&markers=17.04599998378413,74.25872507492652"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <br />
      {/* Footer Section */}
     <Footer/>
    </div>
  );
}

export default Location;

import React from 'react';
import Footer from '../componts/Footer';

function Outlets() {
  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />

      {/* Outlet Heading with Icon and Slide-In Animation using Tailwind */}
      <div className="text-center pt-16 sm:pt-20 md:pt-24">
        <h2 className="text-3xl font-extrabold text-gray-800 animate__animated animate__fadeIn animate__delay-1s flex items-center justify-center">
          <i className="fas fa-map-marker-alt text-4xl mr-4 text-orange-500"></i> {/* Icon for the heading */}
          Our Outlet Locations
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Explore our stores in different cities.
        </p>
      </div>

      {/* Main container with padding */}
      <div className="pt-12 sm:pt-16 md:pt-20 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Outlet 1 */}
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500">
            <div className="w-full h-48 overflow-hidden">
              <img className="w-full h-full object-cover" src="./image/outlet_2.jpg" alt="Kolhapur" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 ">
                  Kolhapur
                </span>
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="my-4">
              <iframe
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116233.29378242629!2d74.15646588457898!3d16.708452233396038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000cdec07a29%3A0xece8ea642952e42f!2sKolhapur%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1731920735345!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center justify-between my-4 px-6">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
                <a href="tel:+911234567890" className="text-sm font-semibold">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-thermometer-half text-yellow-500 mr-2"></i>
                <a
                  href="https://www.weather.com/weather/today/l/INXX0096:1:IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold"
                >
                  25°C
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Outlet 2 */}
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500">
            <div className="w-full h-48 overflow-hidden">
              <img className="w-full h-full object-cover" src="./image/outlet_3.avif" alt="Satara" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 ">
                  Satara
                </span>
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="my-4">
              <iframe
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57814.25150443155!2d73.97706148964173!3d17.67453296496286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc239be08d96bbd%3A0x5f4adf559fb4b19a!2sSatara%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1731921028105!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center justify-between my-4 px-6">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
                <a href="tel:+919876543210" className="text-sm font-semibold">
                  +91 987 654 3210
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-thermometer-half text-yellow-500 mr-2"></i>
                <a
                  href="https://www.weather.com/weather/today/l/INXX0096:1:IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold"
                >
                  22°C
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Outlet 3 */}
        <div className="flex px-3 py-3">
          <div className="max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500">
            <div className="w-full h-48 overflow-hidden">
              <img className="w-full h-full object-cover" src="./image/outlet_4.jpg" alt="Pune" />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 ">
                  Pune
                </span>
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="my-4">
              <iframe
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115069.14634302014!2d73.78056543154418!3d18.52459859950238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1731921131985!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex items-center justify-between my-4 px-6">
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
                <a href="tel:+911112223333" className="text-sm font-semibold">
                  +91 111 222 3333
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-thermometer-half text-yellow-500 mr-2"></i>
                <a
                  href="https://www.weather.com/weather/today/l/INXX0096:1:IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold"
                >
                  28°C
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Outlets;

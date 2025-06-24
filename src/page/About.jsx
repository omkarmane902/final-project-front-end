import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../componts/Footer';

function About() {
  return (
    <div>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-teal-100 to-teal-200 py-20">
        <div className="container mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Text Content */}
            <div className="text-gray-800 space-y-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
                <i className="fas fa-mug-hot text-3xl mr-4 text-teal-600"></i> {/* Coffee Icon */}
                Welcome to Our Café
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At <span className="font-semibold text-teal-600">Café Delight</span>, we believe in creating more than just great coffee — we create moments.
                From the first sip to the last bite of our fresh pastries, everything here is crafted with love and care.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Our café is a place for everyone, whether you’re here to work, catch up with friends, or simply enjoy a quiet moment.
                We pride ourselves on using locally sourced ingredients and providing a cozy, welcoming atmosphere for all.
              </p>

              {/* Button to menu section */}
              <Link 
                to="/menu"  // Use React Router Link to navigate to the Menu component
                className="inline-block text-teal-600 hover:text-teal-500 font-medium mt-6 transition-colors duration-200"
              >
                Explore Our Menu
              </Link>

              {/* Social Media Section */}
              <div className="mt-12">
                <p className="text-base text-gray-800 font-semibold mb-4">Follow us on Social Media:</p>
                <div className="flex gap-8">
                  {/* Facebook Icon */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white p-5 rounded-full transition-all transform hover:scale-110">
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>

                  {/* Instagram Icon */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-500 text-white p-5 rounded-full transition-all transform hover:scale-110">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>

                  {/* Twitter Icon */}
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-300 text-white p-5 rounded-full transition-all transform hover:scale-110">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Café Image */}
            <div className="w-full lg:max-w-md flex justify-center">
              <img src="./image/cafe.jpg" alt="Our café" className="rounded-xl shadow-lg w-full h-auto object-cover transition-all transform hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default About;

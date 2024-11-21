import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../componts/Footer';

function About() {
  return (
    <div>
      
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet" />

      {/* About Us Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Text Content */}
            <div className="text-gray-800 space-y-6">
              <h2 className="text-4xl font-bold mb-4 text-brown-900">
                Welcome to Our Café
              </h2>
              <p className="text-lg leading-relaxed">
                At <span className="font-semibold">Café Delight</span>, we believe in creating more than just great coffee we create moments. 
                From the first sip to the last bite of our fresh pastries, everything here is crafted with love and care.
              </p>
              <p className="text-base leading-relaxed">
                Our café is a place for everyone whether you’re here to work, catch up with friends, or simply enjoy a quiet moment. 
                We pride ourselves on using locally sourced ingredients and providing a cozy, welcoming atmosphere for all.
              </p>
              <a 
                href="#menu" 
                className="inline-block text-brown-600 hover:text-brown-500 font-medium transition-colors duration-200"
              >
                
              </a>

              {/* Social Media Section */}
              <div className="mt-8">
                <p className="text-base text-black font-semibold mb-4">Follow us on Social Media:</p>
                <div className="flex gap-6">
                  {/* Facebook Icon */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-transform transform hover:scale-110">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>

                  {/* Instagram Icon */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-500 text-white p-4 rounded-full transition-transform transform hover:scale-110">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>

                  {/* Twitter Icon */}
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-300 text-white p-4 rounded-full transition-transform transform hover:scale-110">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Café Image */}
            <div className="w-full lg:max-w-md flex justify-center">
              <img src="./image/cafe.jpg" alt="Our café" className="rounded-md shadow-md w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {/* Add Footer Content Here */}
      <Footer/>
    </div>
  );
}

export default About;

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaClock, FaCoffee, FaUserFriends, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Brand Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <FaCoffee className="inline-block mr-2 text-yellow-400" /> Omkar Cafe
          </h1>
          <p className="text-lg italic text-gray-300">
            Where great coffee meets great company
          </p>
        </div>

        {/* Contact and Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              <FaPhoneAlt className="inline-block mr-2 text-yellow-400" /> Contact Us
            </h3>
            <p className="text-lg mb-2">
              📞 Call: <a href="tel:+918625906485" className="hover:text-yellow-400 transition">+91 8625906485</a>
            </p>
            <p className="text-lg mb-2">
              📧 Email: <a href="mailto:info@omkarcafe.com" className="hover:text-yellow-400 transition">info@omkarcafe.com</a>
            </p>
            <p className="text-lg">
              📍 Address: <span className="hover:text-yellow-400 transition">Islampur, Maharashtra, India</span>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              <FaClock className="inline-block mr-2 text-yellow-400" /> Opening Hours
            </h3>
            <p className="text-lg mb-2">Mon - Fri: 8:00 AM - 10:00 PM</p>
            <p className="text-lg">Sat - Sun: 9:00 AM - 11:00 PM</p>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              <FaUserFriends className="inline-block mr-2 text-yellow-400" /> Follow Us
            </h3>
            <div className="flex justify-center space-x-6 text-3xl">
              <a
                href="https://www.instagram.com/omkarcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 text-gray-300 hover:text-yellow-400 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/omkarcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 text-gray-300 hover:text-yellow-400 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/omkarcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 text-gray-300 hover:text-yellow-400 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/omkarcafe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 text-gray-300 hover:text-yellow-400 transition-transform"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">&copy; 2024 Omkar Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

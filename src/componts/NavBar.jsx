import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';
import { FaHome, FaListAlt, FaInfo, FaComment, FaMapMarkerAlt, FaStoreAlt, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext'; // Import CartContext

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext); // Get the cartItems from context

  // Calculate total quantity of items in the cart
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo and Name */}
          <a href="#" className="flex items-center">
            <img src={logo1} className="logo-nav h-6 mr-3 sm:h-9" alt="Omkar Cafe Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:inline">Omkar Cafe</span>
          </a>

          {/* Cart button and Mobile Menu Toggle */}
          <div className="flex items-center lg:order-2">
            <Link
              to="/add-to-cart"
              className="relative flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700  lg:dark:hover:bg-transparent"
            >
              <FaShoppingCart className="text-xl" />
              {totalItemsInCart > 0 && (
                <span className="absolute top-0 right-0 block w-5 h-5 text-xs text-white bg-red-600 rounded-full text-center">
                  {totalItemsInCart}
                </span>
              )}
              <span className="ml-2">Cart</span>
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Main Navigation Links (for larger screens) */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="home"
                  className="flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaHome className="text-xl" />
                  <span className="hidden sm:inline ml-2">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaListAlt className="text-xl" />
                  <span className="hidden sm:inline ml-2">Menu</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaInfo className="text-xl" />
                  <span className="hidden sm:inline ml-2">About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  className="flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaComment className="text-xl" />
                  <span className="hidden sm:inline ml-2">Feedback</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className="flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaMapMarkerAlt className="text-xl" />
                  <span className="hidden sm:inline ml-2">Location</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/outlets"
                  className="flex items-center py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FaStoreAlt className="text-xl" />
                  <span className="hidden sm:inline ml-2">Outlets</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar for Mobile Navigation */}
        <div
          className={`fixed inset-y-0 left-0 w-48 bg-white dark:bg-gray-900 p-4 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
        >
          <button
            onClick={toggleMenu}
            type="button"
            className="mb-4 text-gray-500 dark:text-gray-400"
          >
            Close
          </button>
          <ul className="space-y-4 font-medium text-sm">
            <li>
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleMenu}
              >
                <FaHome className="text-xl inline-block" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="block py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleMenu}
              >
                <FaListAlt className="text-xl inline-block" /> Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleMenu}
              >
                <FaInfo className="text-xl inline-block" /> About
              </Link>
            </li>
            <li>
              <Link
                to="/feedback"
                className="block py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleMenu}
              >
                <FaComment className="text-xl inline-block" /> Feedback
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className="block py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleMenu}
              >
                <FaMapMarkerAlt className="text-xl inline-block" /> Location
              </Link>
            </li>
            <li>
              <Link
                to="/outlets"
                className="block py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={toggleMenu}
              >
                <FaStoreAlt className="text-xl inline-block" /> Outlets
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

import React from 'react';
import Videoo from '../Homepage/Videoo';
import Footer from '../componts/Footer';
import Slider from 'react-slick'; // Importing the Slider component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaUtensils, FaUsers, FaHamburger, FaCarrot, FaFish } from 'react-icons/fa'; // Importing relevant icons

function Home() {
  const menuItems = [
    {
      img: '/item-image/Paneer Butter Masala.avif',
      title: 'Paneer Butter Masala',
      description: 'Delicious grilled chicken with a side of crispy fries.',
      price: '$12.99',
      icon: <FaCarrot className="text-teal-600 text-2xl" />, // Veg dish icon
    },
    {
      img: '/item-image/Tandoori Chicken.jpg',
      title: 'Tandoori Chicken',
      description: 'A fresh mix of greens, tomatoes, and cucumbers, topped with house-made dressing.',
      price: '$8.99',
      icon: <FaFish className="text-teal-600 text-2xl" />, // Non-veg dish icon
    },
    {
      img: '/item-image/Veg Pulao.jpg',
      title: 'Veg Pulao',
      description: 'Classic cheese pizza with a crispy crust, perfect for pizza lovers!',
      price: '$10.99',
      icon: <FaCarrot className="text-teal-600 text-2xl" />, // Veg dish icon
    },
    {
      img: '/item-image/Masala Dosa.jpg',
      title: 'Masala Dosa',
      description: 'Delicious grilled chicken with a side of crispy fries.',
      price: '$12.99',
      icon: <FaCarrot className="text-teal-600 text-2xl" />, // Veg dish icon
    },
    {
      img: '/item-image/Mutton Curry.webp',
      title: 'Mutton Curry',
      description: 'A fresh mix of greens, tomatoes, and cucumbers, topped with house-made dressing.',
      price: '$8.99',
      icon: <FaFish className="text-teal-600 text-2xl" />, // Non-veg dish icon
    },
    {
      img: './item-image/Hyderabadi Biryani.jpg',
      title: 'Hyderabadi Biryani',
      description: 'Classic cheese pizza with a crispy crust, perfect for pizza lovers!',
      price: '$10.99',
      icon: <FaFish className="text-teal-600 text-2xl" />, // Non-veg dish icon
    },
  ];

  // Settings for the Slick slider with auto-play functionality
  const settings = {
    infinite: true,
    slidesToShow: 1,  // Show one card at a time
    slidesToScroll: 1, // Scroll one card at a time
    speed: 500,
    autoplay: true,  // Enable auto slider
    autoplaySpeed: 3000, // Slide speed in milliseconds
    dots: true,  // Show dots for pagination
    arrows: true, // Show arrows for navigation
    pauseOnHover: true,  // Pause the slider when hovered over
  };

  return (
    <div>
     <Videoo/>

      {/* Top Rated Menu Section */}
      <section id="top-rated-menu" className="py-32 bg-gradient-to-r from-purple-100 to-purple-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-700 flex items-center justify-center">
            <FaStar className="mr-2 text-3xl" /> {/* Icon for Top Rated Menu */}
            Our Top Rated Menu
          </h2>

          {/* Slider Component */}
          <Slider {...settings}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl hover:scale-105 transform transition-all p-6"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-teal-600 font-bold">{item.price}</p>
                <div className="mt-4">{item.icon}</div> {/* Displaying item icon */}
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Meet the Chefs Section */}
      <section id="our-team" className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center">
            <FaUsers className="mr-2 text-3xl" /> {/* Icon for Meet the Chefs */}
            Meet Our Chefs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
              <img
                src="./image/1688045591267.jpg"
                alt="Team Member 1"
                className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                Omkar Mane
              </h3>
              <p className="text-gray-600">Specialist for non-veg <FaHamburger className="text-red-500 inline" /> {/* Icon for non-veg specialist */}</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
              <img
                src="./image/bapu.jpg"
                alt="Team Member 2"
                className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                Bapu Kolekar
              </h3>
              <p className="text-gray-600">Specialist for veg <FaCarrot className="text-green-500 inline" /> {/* Icon for veg specialist */}</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
              <img
                src="./image/pratik.jpg"
                alt="Team Member 3"
                className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                Pratik Jadhav
              </h3>
              <p className="text-gray-600">Specialist for fast-food <FaHamburger className="text-yellow-500 inline" /> {/* Fast-food icon */}</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl p-6 my-6 text-center">
              <img
                src="/image/logo1.png"
                alt="Team Member 4"
                className="w-full rounded-full mb-4 border-4 border-purple-500 hover:border-purple-700 transition-all"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors">
                Peter Johnson
              </h3>
              <p className="text-gray-600">Specialist for designing food</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;

import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { FaUtensils, FaCoffee, FaHamburger, FaPizzaSlice, FaGlassWhiskey, FaConciergeBell, FaTrashAlt } from 'react-icons/fa'; // Import icons

function Menu() {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext); // Get addToCart, removeFromCart from CartContext
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for category filter

  // Sample product data with categories
  const products = [
    { id: 1, name: 'Coffee', description: 'A hot, black coffee to start your day.', price: 3.5, image: 'https://via.placeholder.com/200', category: 'Breakfast' },
    { id: 2, name: 'Latte', description: 'Espresso with steamed milk and a creamy foam.', price: 4.0, image: 'https://via.placeholder.com/200', category: 'Breakfast' },
    { id: 3, name: 'Cappuccino', description: 'Espresso with equal parts steamed milk and frothed milk.', price: 4.5, image: 'https://via.placeholder.com/200', category: 'Lunch' },
    { id: 4, name: 'Tea', description: 'A refreshing cup of tea.', price: 2.5, image: 'https://via.placeholder.com/200', category: 'Breakfast' },
    { id: 5, name: 'Iced Coffee', description: 'Cold brewed coffee served over ice.', price: 3.8, image: 'https://via.placeholder.com/200', category: 'Lunch' },
    { id: 6, name: 'Mocha', description: 'Espresso with chocolate syrup and steamed milk.', price: 4.7, image: 'https://via.placeholder.com/200', category: 'Dinner' },
    { id: 7, name: 'Shawarma', description: 'Traditional sheikh grilled meat wrap.', price: 6.5, image: 'https://via.placeholder.com/200', category: 'shake' },
    { id: 8, name: 'Falafel', description: 'Fried chickpea balls served with pita.', price: 5.0, image: 'https://via.placeholder.com/200', category: 'shake' },
  ];

  // State to track quantities for each product
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0; // Initialize quantity of each product to 0
      return acc;
    }, {})
  );

  // Filter products based on the search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle increment and decrement of quantity
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0 }));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Fixed Search Bar Below Navbar */}
      <div className="fixed top-14 left-0 right-0 z-10 bg-white shadow-md p-4">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Menu Heading Below Search Bar */}
      <h1 className="text-4xl font-bold text-center mb-6 mt-32 flex justify-center items-center">
        <FaConciergeBell className="mr-2" /> Menu
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap space-x-4 mb-8">
        {[{ label: 'All', icon: <FaUtensils /> }, { label: 'Breakfast', icon: <FaCoffee /> }, { label: 'Lunch', icon: <FaHamburger /> }, { label: 'Dinner', icon: <FaPizzaSlice /> }, { label: 'shake', icon: <FaGlassWhiskey /> }].map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setSelectedCategory(label)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-semibold ${selectedCategory === label ? 'bg-blue-600' : 'bg-gray-400'} mb-2`}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Product List with Hover Effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProducts.length === 0 ? (
          <p className="text-xl text-center text-gray-500">No products found!</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white hover:shadow-orange-500 rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l-lg"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 bg-gray-100 border">{quantities[product.id]}</span>
                  <button
                    className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r-lg"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>

              {/* Remove from Cart button (if already in cart) */}
              {cartItems.some(item => item.id === product.id) && (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-xs text-red-500 flex items-center mt-2 cursor-pointer"
                >
                  <FaTrashAlt className="mr-2" />
                  Remove from Cart
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;

import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Import CartContext
import { FaUtensils, FaCoffee, FaHamburger, FaPizzaSlice, FaGlassWhiskey, FaConciergeBell, FaTrashAlt } from 'react-icons/fa'; // Import icons
import AddIcon from '@mui/icons-material/Add';
function Menu() {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext); // Get addToCart, removeFromCart from CartContext
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for category filter

  // Sample product data with categories
  const products = [
    
    // Shake
    { id: 21, name: 'Mango Lassi', description: 'Refreshing mango yogurt drink.', price: 40.0, image: '/item-image/Mango Lassi.avif', category: 'Shake' },
    { id: 22, name: 'Badam Milkshake', description: 'Milkshake flavored with almonds.', price: 50.5, image: '/item-image/Badam Milkshake.avif', category: 'Shake' },
    { id: 23, name: 'Rose Milk', description: 'Milk flavored with rose syrup.', price: 30.5, image: '/item-image/Rose Milk.jpg', category: 'Shake' },
    { id: 24, name: 'Chikoo Shake', description: 'Milkshake made with sapodilla fruit.', price: 35.0, image: '/item-image/Chikoo Shake.jpg', category: 'Shake' },
    { id: 25, name: 'Banana Shake', description: 'Creamy milkshake made with bananas.', price: 20.5, image: '/item-image/Banana Shake.jpg', category: 'Shake' },
    { id: 26, name: 'Kesar Pista Shake', description: 'Saffron and pistachio-flavored milkshake.', price: 70.0, image: '/item-image/Kesar Pista Shake.jpg', category: 'Shake' },
    { id: 27, name: 'Strawberry Shake', description: 'Sweet strawberry milkshake.', price: 40.0, image: '/item-image/Strawberry Shake.avif', category: 'Shake' },
    { id: 28, name: 'Chocolate Shake', description: 'Rich and creamy chocolate milkshake.', price: 40.5, image: '/item-image/Chocolate Shake.jpg', category: 'Shake' },
    { id: 29, name: 'Thandai', description: 'Milk-based drink flavored with nuts and spices.', price: 45.0, image: '/item-image/Thandai.jpg', category: 'Shake' },
    { id: 30, name: 'Dry Fruit Shake', description: 'Milkshake with assorted dry fruits.', price: 50.5, image: '/item-image/Dry Fruit Shake.webp', category: 'Shake' },
   
   
       // Breakfast
       { id: 1, name: 'Masala Dosa', description: 'Crispy dosa filled with spiced mashed potatoes.', price: 50.5, image: '/item-image/Masala Dosa.jpg', category: 'Breakfast' },
       { id: 2, name: 'Idli', description: 'Steamed rice cakes served with chutney and sambar.', price: 30.5, image: '/item-image/Idli.jpg', category: 'Breakfast' },
       { id: 3, name: 'Aloo Paratha', description: 'Stuffed flatbread with a spiced potato filling.', price: 45.0, image: '/item-image/Aloo Paratha.jpg', category: 'Breakfast' },
       { id: 4, name: 'Poha', description: 'Flattened rice cooked with spices and peanuts.', price: 20.0, image: '/item-image/Poha.avif', category: 'Breakfast' },
       { id: 5, name: 'Vada', description: 'Fried savory lentil donuts.', price: 20.5, image: '/item-image/Vada.jpg', category: 'Breakfast' },
       { id: 6, name: 'Upma', description: 'Savory semolina porridge with spices.', price: 15.0, image: '/item-image/Upma.jpg', category: 'Breakfast' },
       { id: 7, name: 'Chole Bhature', description: 'Spiced chickpea curry served with deep-fried bread.', price: 30.5, image: '/item-image/Chole Bhature.jpg', category: 'Breakfast' },
       { id: 8, name: 'Puri Sabzi', description: 'Fried bread served with spiced potato curry.', price: 40.5, image: '/item-image/Puri Sabzi.jpg', category: 'Breakfast' },
       { id: 9, name: 'Thepla', description: 'Gujarati flatbread made with spices and herbs.', price: 30.0, image: '/item-image/Thepla.jpg', category: 'Breakfast' },
       { id: 10, name: 'Misal Pav', description: 'Spicy curry served with bread rolls.', price: 50.0, image: '/item-image/Misal Pav.webp', category: 'Breakfast' },
     
       // Lunch
       { id: 11, name: 'Biryani', description: 'Aromatic rice cooked with spices and chicken or vegetables.', price: 100.0, image: '/item-image/Biryani.jpg', category: 'Lunch' },
       { id: 12, name: 'Paneer Butter Masala', description: 'Cottage cheese in a creamy tomato gravy.', price: 130.0, image: '/item-image/Paneer Butter Masala.avif', category: 'Lunch' },
       { id: 13, name: 'Dal Tadka', description: 'Yellow lentils tempered with spices.', price: 70.0, image: '/item-image/Dal Tadka.avif', category: 'Lunch' },
       { id: 14, name: 'Rajma Chawal', description: 'Spiced kidney beans served with steamed rice.', price: 60.0, image: '/item-image/Rajma Chawal.avif', category: 'Lunch' },
       { id: 15, name: 'Baingan Bharta', description: 'Smoked eggplant curry.', price: 50.5, image: '/item-image/Baingan Bharta.jpg', category: 'Lunch' },
       { id: 16, name: 'Aloo Gobi', description: 'Potatoes and cauliflower cooked with spices.', price: 60.0, image: '/item-image/Aloo Gobi.avif', category: 'Lunch' },
       { id: 17, name: 'Fish Curry', description: 'Traditional coastal fish curry with coconut and spices.', price: 90.5, image: '/item-image/Fish Curry.jpg', category: 'Lunch' },
       { id: 18, name: 'Palak Paneer', description: 'Cottage cheese cooked in a creamy spinach gravy.', price: 70.5, image: '/item-image/Palak Paneer.jpg', category: 'Lunch' },
       { id: 19, name: 'Chicken Curry', description: 'Traditional Indian chicken curry with rich spices.', price: 150.0, image: '/item-image/Chicken Curry.webp', category: 'Lunch' },
       { id: 20, name: 'Kadhi Pakora', description: 'Gram flour dumplings in yogurt curry.', price: 40.5, image: '/item-image/Kadhi Pakora.jpg', category: 'Lunch' },
       { id: 41, name: 'Roti', description: 'A soft, thin Indian flatbread made from whole wheat flour, perfect for pairing with curries and vegetables.', price: 15.5, image: '/item-image/Roti.avif', category: 'Lunch' },
       { id: 42, name: 'Chapati', description: 'A lighter, softer version of flatbread, chapatis are cooked on a griddle for a fluffy texture.', price: 10.5, image: '/item-image/Chapati.jpg', category: 'Lunch' },
       { id: 43, name: 'Naan', description: ' A rich, leavened bread traditionally cooked in a tandoor oven, often brushed with butter or garlic for added flavor.', price: 25.5, image: '/item-image/Naan.jpg', category: 'Lunch' },
   
      
       // Dinner
       { id: 31, name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.', price: 200.0, image: '/item-image/Tandoori Chicken.jpg', category: 'Dinner' },
       { id: 32, name: 'Butter Chicken', description: 'Creamy chicken curry with spices.', price: 170.5, image: '/item-image/Butter Chicken.jpg', category: 'Dinner' },
       { id: 33, name: 'Rogan Josh', description: 'Aromatic lamb curry cooked with spices and yogurt.', price: 80.0, image: '/item-image/Rogan Josh.jpg', category: 'Dinner' },
       { id: 34, name: 'Mutton Curry', description: 'Slow-cooked spiced mutton curry.', price: 250.0, image: '/item-image/Mutton Curry.webp', category: 'Dinner' },
       { id: 35, name: 'Paneer Tikka', description: 'Grilled paneer cubes marinated with spices.', price: 180.0, image: '/item-image/Paneer Tikka.jpg', category: 'Dinner' },
       { id: 36, name: 'Hyderabadi Biryani', description: 'Rich, aromatic biryani with chicken or mutton.', price: 200.0, image: '/item-image/Hyderabadi Biryani.jpg', category: 'Dinner' },
       { id: 37, name: 'Dal Makhani', description: 'Creamy black lentil curry.', price: 7.0, image: '/item-image/Dal Makhani.avif', category: 'Dinner' },
       { id: 38, name: 'Kofta Curry', description: 'Meatballs or vegetable dumplings in spicy curry.', price: 90.5, image: '/item-image/Kofta Curry.avif', category: 'Dinner' },
       { id: 39, name: 'Prawn Masala', description: 'Spicy prawn curry with Indian spices.', price: 120.5, image: '/item-image/Prawn Masala.avif', category: 'Dinner' },
       { id: 40, name: 'Veg Pulao', description: 'Rice cooked with vegetables and mild spices.', price: 70.5, image: '/item-image/Veg Pulao.jpg', category: 'Dinner' },
     ];

  // Filter products based on the search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        {[{ label: 'All', icon: <FaUtensils /> }, { label: 'Breakfast', icon: <FaCoffee /> }, { label: 'Lunch', icon: <FaHamburger /> }, { label: 'Dinner', icon: <FaPizzaSlice /> }, { label: 'Shake', icon: <FaGlassWhiskey /> }].map(({ label, icon }) => (
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
                <span className="font-bold text-lg">₹{product.price.toFixed(2)}</span>
              </div>

              {/* Add to Cart button */}
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
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

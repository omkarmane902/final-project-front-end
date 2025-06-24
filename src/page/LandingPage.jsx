import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [showLogin, setShowLogin] = useState(false); // To toggle login form
  const navigate = useNavigate(); // For navigation between pages
  const [points, setPoints] = useState(100); // Initial points for the user

  // Navigate to home page
  const handleEnter = () => navigate('/home');  

  // Show admin login form when "Admin Panel" is clicked
  const handleAdminLogin = () => setShowLogin(true);

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    // Check credentials
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      setShowLogin(false); // Close the login form after successful login
      navigate('/admin'); // Navigate to the admin panel
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      {/* Admin Panel Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleAdminLogin}
          className="px-6 py-3 bg-red-700 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition-all"
        >
          Admin Panel
        </button>
      </div>

      {/* Show login form as a modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-black shadow-lg w-96 transform transition-transform duration-300 ease-in-out scale-105">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition duration-300"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowLogin(false)} // Close modal when clicking "Cancel"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Welcome text, points, and explore button */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blue-500 via-green-400 to-yellow-500 bg-clip-text text-transparent animate__animated animate__fadeIn">
          Welcome to <span>Modern Cafe</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80">
          A place where taste meets the soul.
        </p>

        {/* Points Section */}
        <div className="text-white/90 text-lg font-semibold mt-4">
          <p>Your current points:</p>
          <p className="text-4xl font-bold text-yellow-400">{points} points</p>
        </div>

        <button
          onClick={handleEnter}
          className="relative px-10 py-4 bg-yellow-500 text-black text-lg font-medium rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
        >
          Explore the Cafe
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

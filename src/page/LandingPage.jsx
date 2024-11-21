import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home'); // Redirect to Home
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#9333EA] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-400 via-blue-500 to-pink-400 opacity-40 animate-gradient-move"></div>
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed opacity-10" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?coffee)' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-fade-in-up">
          Welcome to <span>Omkar Cafe</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 animate-fade-in-up delay-[100ms]">
          A place where taste meets the soul.
        </p>

        <ul className="list-none space-y-2 text-lg md:text-xl text-white/70 animate-fade-in-up delay-[200ms]">
          <li>🌟 Freshly brewed coffee to energize your day</li>
          <li>🍰 Delectable desserts crafted with love</li>
          <li>🍽️ A diverse menu to delight every palate</li>
          <li>🏠 Cozy ambiance to make you feel at home</li>
        </ul>

        {/* Special Effect Button */}
        <button
          onClick={handleEnter}
          className="relative px-8 py-3 bg-yellow-400 text-black text-lg font-medium rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 animate-fade-in-up delay-[300ms] group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full blur-md opacity-50 group-hover:animate-pulse-fast"></span>
          <span className="relative z-10">Explore the Cafe</span>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;

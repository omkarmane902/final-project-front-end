import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Location from './page/Location';
import Feedback from './page/Feedback';
import Outlets from './page/Outlets';
import Ad_to_Cart from './page/Ad_to_Cart';
import LandingPage from './page/LandingPage'; // New Landing Page

// Components
import NavBar from './componts/NavBar';


// Contexts
import { CartProvider } from './context/CartContext';

function App() {
  const location = useLocation();

  // Determine if the current route is LandingPage
  const isLandingPage = location.pathname === '/';

  return (
    <CartProvider>
      {/* Conditionally render NavBar */}
      {!isLandingPage && <NavBar />}

      {/* Main Content */}
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Other Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/location" element={<Location />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/add-to-cart" element={<Ad_to_Cart />} />
        
        {/* Fallback Route for Undefined Paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

// Fallback Component for Undefined Routes
const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-center">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

export default App;

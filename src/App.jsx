import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
// Pages

import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Location from './page/Location';
import Feedback from './page/Feedback';
import Outlets from './page/Outlets';
import Ad_to_Cart from './page/Ad_to_Cart';
import LandingPage from './page/LandingPage'; // New Landing Page

import PaymentPage from './context/PaymentPage';
import PaymentSuccess from './context/PaymentSuccess';
import PaymentFailure from './context/PaymentFailure';


// Components
import NavBar from './componts/NavBar';

// Contexts
import { CartProvider } from './context/CartContext';
import AdminPage from './componts/AdminPage';

function App() {
  const location = useLocation();

  // Check if the current route is either LandingPage or AdminPage
  const isLandingOrAdminPage = location.pathname === '/' || location.pathname === '/admin';

  return (
    <CartProvider>
      {/* Conditionally render NavBar for all routes except LandingPage and AdminPage */}
      {!isLandingOrAdminPage && <NavBar />}

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
        <Route path="/admin" element={<AdminPage />} /> {/* Admin Route */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
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

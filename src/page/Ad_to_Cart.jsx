import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrashAlt, FaShoppingCart, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AddToCart() {
  const { cartItems, removeFromCart, updateQuantity, placeOrder } = useContext(CartContext);
  const [packingCharge, setPackingCharge] = useState(10);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [orderStatus, setOrderStatus] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const finalPrice = (totalPrice + packingCharge) * (1 - discount);

  const handlePromoCode = async () => {
  if (promoCode === 'DISCOUNT20') {
    setDiscount(0.2);
    alert('Promo code applied!');

    // Send promo code usage info to backend
    try {
      const response = await fetch('http://localhost:5000/api/promocodes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode, timestamp: new Date().toISOString() }),
      });
      if (!response.ok) {
        console.error('Failed to notify backend about promo code');
      }
    } catch (error) {
      console.error('Error notifying backend about promo code:', error);
    }

  } else {
    setDiscount(0);
    alert('Invalid promo code!');
  }
};


  const handleSendOrder = async () => {
    const orderDetails = {
      items: cartItems,
      totalPrice,
      packingCharge,
      discount,
      finalPrice,
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        placeOrder(orderDetails); // Optional: Update local state
        const currentTime = new Date().toLocaleString();
        setOrderTime(currentTime);
        setOrderStatus('Order Placed');
        setOrderPlaced(true);
        alert('Order placed and saved to database!');
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing the order');
    }
  };

  const goToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start py-12 px-6 mt-20">
      <div className="flex w-full max-w-7xl space-x-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6 flex items-center justify-center">
            <FaShoppingCart className="mr-2" />
            Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-lg text-gray-500 mt-12">Your cart is empty.</p>
          ) : (
            <div className="space-y-6 mt-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-lg shadow-sm mb-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                    </div>
                    <div className="ml-6 flex flex-col">
                      <p className="font-semibold text-xl text-gray-800">{item.name}</p>
                      <p className="text-gray-600 text-lg">₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-12 h-12 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600">-</button>
                    <p className="text-xl font-semibold text-gray-800">{item.quantity}</p>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-12 h-12 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600">+</button>
                  </div>

                  <div className="flex items-center space-x-6">
                    <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-700 flex items-center space-x-2">
                      <FaTrashAlt />
                      <span className="text-sm">Remove</span>
                    </button>
                    <p className="font-semibold text-gray-800">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Order Status Section */}
          {orderStatus && (
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
                <FaClipboardList className="mr-2" />
                Order Status
              </h2>
              <div className="text-center mb-4">
                <p className="text-lg text-gray-700">{orderStatus}</p>
                <p className="text-md text-gray-600">Order placed at: {orderTime}</p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-800">Menu:</p>
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <p>{item.name}</p>
                    <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="w-1/3 sticky top-12 max-h-screen overflow-y-auto">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
              <FaClipboardList className="mr-2" />
              Order Summary
            </h2>
            <div className="flex justify-between mb-6">
              <span className="text-lg font-medium text-gray-700 flex items-center">
                <FaShoppingCart className="mr-2" />
                Items ({cartItems.length})
              </span>
              <span className="text-lg font-medium text-gray-700">₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Packing Charge</label>
              <select className="mt-2 w-full p-3 text-sm bg-white border border-gray-300 rounded-md" value={packingCharge} onChange={(e) => setPackingCharge(Number(e.target.value))}>
                <option value={10}>Standard packing - ₹10.00</option>
                <option value={0}>No packing charge - ₹0.00</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="promo" className="block text-sm font-medium text-gray-700">Promo Code</label>
              <input type="text" id="promo" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Enter your code" className="mt-2 w-full p-3 text-sm bg-white border border-gray-300 rounded-md" />
              <button onClick={handlePromoCode} className="mt-4 w-full py-3 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">Apply Promo Code</button>
            </div>
            <div className="border-t pt-6 mt-6">
              <div className="flex justify-between text-xl font-semibold text-gray-900">
                <span className="flex items-center">
                  <FaDollarSign className="mr-2" />
                  Total Cost
                </span>
                <span>₹{finalPrice.toFixed(2)}</span>
              </div>
              <div className="mt-8 space-y-4">
                <button onClick={handleSendOrder} className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  Place Order
                </button>
                {/* Removed the Proceed to Payment button */}
                <button onClick={goToMenu} className="w-full py-3 text-lg font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700">
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;

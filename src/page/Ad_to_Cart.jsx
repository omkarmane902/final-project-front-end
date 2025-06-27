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
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [tableNumber, setTableNumber] = useState('');
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const finalPrice = (totalPrice + packingCharge) * (1 - discount);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPaymentScreenshot(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePromoCode = async () => {
    if (promoCode === 'DISCOUNT20') {
      setDiscount(0.2);
      alert('Promo code applied!');
      try {
        await fetch('http://localhost:5000/api/promocodes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: promoCode, timestamp: new Date().toISOString() }),
        });
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
      paymentScreenshot,
      tableNumber,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        placeOrder(orderDetails);
        setOrderTime(new Date().toLocaleString());
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
    <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-center items-start py-12 px-6 mt-20 gap-8">
      <div className="w-full lg:w-2/3 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaShoppingCart className="mr-2" /> Your Cart
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-2">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">₹{item.price} x {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-300 text-gray-800 rounded" disabled={item.quantity <= 1}>-</button>
                    <span className="text-md font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-300 text-gray-800 rounded">+</button>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 ml-4">
                      <FaTrashAlt />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
            <FaClipboardList className="mr-2" /> Order Summary
          </h2>

          <div className="flex justify-between mb-6">
            <span className="text-lg font-medium text-gray-700 flex items-center">
              <FaShoppingCart className="mr-2" /> Items ({cartItems.length})
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

          <div className="mb-6">
            <label htmlFor="table-number" className="block text-sm font-medium text-gray-700">Table Number</label>
            <input type="text" id="table-number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} placeholder="Enter table number" className="mt-2 w-full p-3 text-sm bg-white border border-gray-300 rounded-md" required />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Scan to Pay (UPI)</label>
            <div className="my-4 flex justify-center">
              <img src="/item-image/QR Scanner.jpeg" alt="QR Code" className="w-48 h-48 border p-2 bg-white rounded-md shadow" />
            </div>
            <label className="block text-sm font-medium text-gray-700 mt-4">Upload Payment Screenshot</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2 block w-full text-sm border border-gray-300 rounded-md p-2" />
            {paymentScreenshot && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-600">Preview:</p>
                <img src={paymentScreenshot} alt="Uploaded Screenshot" className="w-full border rounded-md mt-2 shadow" />
              </div>
            )}
          </div>

          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between text-xl font-semibold text-gray-900">
              <span className="flex items-center">
                <FaDollarSign className="mr-2" /> Total Cost
              </span>
              <span>₹{finalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-8 space-y-4">
              <button onClick={handleSendOrder} className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Place Order
              </button>
              <button onClick={goToMenu} className="w-full py-3 text-lg font-semibold text-white bg-gray-600 rounded-md hover:bg-gray-700">
                Back to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;

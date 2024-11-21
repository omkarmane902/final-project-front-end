import React, { useContext, useState } from 'react'; 
import { CartContext } from '../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import { Modal } from 'react-bootstrap'; // Modal for the payment system
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'; // Reduced payment options
import { SiGooglepay, SiPhonepe } from 'react-icons/si'; // Google Pay and PhonePe icons

function AddToCart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const [packingCharge, setPackingCharge] = useState(10); // Default packing charge is 10
  const [showPaymentModal, setShowPaymentModal] = useState(false); // State for opening the payment modal
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // State for selected payment method
  const [promoCode, setPromoCode] = useState(''); // State for the promo code
  const [discount, setDiscount] = useState(0); // State for applying discount
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success

  // Calculate the total price of items
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Function to increase quantity
  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  // Function to decrease quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  // Function to handle packing charge selection
  const handlePackingChange = (event) => {
    setPackingCharge(Number(event.target.value));  // Convert value to a number
  };

  // Function to handle promo code
  const handlePromoCode = () => {
    if (promoCode === 'DISCOUNT20') {
      setDiscount(0.2); // Apply 20% discount
      alert('Promo code applied successfully!');
    } else {
      setDiscount(0);
      alert('Invalid promo code!');
    }
  };

  // Function to open the payment modal
  const handleCheckout = () => {
    if (selectedPaymentMethod) {
      // Proceed with payment using selected method
      alert(`Proceeding with ${selectedPaymentMethod} payment.`);
      setPaymentSuccess(true); // Mark payment as successful
      setShowPaymentModal(false);
      clearCart();  // Clear the cart after payment is successful
    } else {
      alert('Please select a payment method');
    }
  };

  // Final price after applying discount and packing charge
  const finalPrice = (totalPrice + packingCharge) * (1 - discount);

  return (
    <div className="container mx-auto mt-10">
      {paymentSuccess ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold">Payment Successful!</h1>
          <p className="mt-4">Thank you for your purchase.</p>
        </div>
      ) : (
        <div className="sm:flex shadow-md my-10 space-x-8">
          
          {/* Cart Items Section */}
          <div className="w-full sm:w-3/4 bg-white px-6 py-6">
            <div className="flex justify-between pb-6 border-b">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>

            {/* Cart Item List */}
            {cartItems.length === 0 ? (
              <p className="text-center text-xl mt-10">Your cart is empty!</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center py-4 border-b">
                  {/* Product Image */}
                  <div className="w-1/4 pr-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="w-3/4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-700 text-lg">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      {/* Decrease Quantity Button */}
                      <button 
                        onClick={() => handleDecrease(item)} 
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>

                      {/* Quantity Display */}
                      <p className="mx-3 text-lg w-10 text-center">{item.quantity}</p>

                      {/* Increase Quantity Button */}
                      <button 
                        onClick={() => handleIncrease(item)} 
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 flex items-center cursor-pointer"
                      >
                        <FaTrashAlt className="mr-2" />
                        Remove
                      </button>
                      <p className="text-lg font-semibold text-gray-800">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary Section */}
          <div id="summary" className="w-full sm:w-1/4 bg-gray-100 px-6 py-6 rounded-lg">
            <h1 className="font-semibold text-2xl border-b pb-4">Order Summary</h1>
            <div className="flex justify-between mt-4 mb-6">
              <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
              <span className="font-semibold text-sm">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Packing Charge */}
            <div className="mb-4">
              <label className="font-medium text-sm">Packing Charge</label>
              <select 
                className="block w-full p-2 text-gray-600 text-sm"
                value={packingCharge}
                onChange={handlePackingChange}
              >
                <option value={10}>Standard packing - ₹10.00</option>
                <option value={0}>No packing charge - ₹0.00</option>
              </select>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
              <label htmlFor="promo" className="font-medium text-sm">Promo Code</label>
              <input
                type="text"
                id="promo"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter your code"
                className="p-2 text-sm w-full border border-gray-300"
              />
              <button
                onClick={handlePromoCode}
                className="bg-green-500 text-white mt-2 py-2 px-4 w-full text-sm font-semibold hover:bg-green-600"
              >
                Apply Promo Code
              </button>
            </div>

            {/* Total Cost and Checkout */}
            <div className="border-t mt-6 pt-4">
              <div className="flex justify-between font-semibold text-sm uppercase">
                <span>Total Cost</span>
                <span>${finalPrice.toFixed(2)}</span>
              </div>
              <button 
                className={`bg-indigo-500 text-white w-full py-3 mt-6 text-sm font-semibold hover:bg-indigo-600 ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => cartItems.length > 0 && setShowPaymentModal(true)}  // Open payment modal only if cart has items
                disabled={cartItems.length === 0}  // Disable button if cart is empty
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div
              className={`flex items-center justify-between border p-3 rounded cursor-pointer ${selectedPaymentMethod === 'Visa' ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setSelectedPaymentMethod('Visa')}
            >
              <FaCcVisa size={40} color={selectedPaymentMethod === 'Visa' ? 'white' : 'blue'} />
              <span className="text-xl">Visa</span>
            </div>
            <div
              className={`flex items-center justify-between border p-3 rounded cursor-pointer ${selectedPaymentMethod === 'MasterCard' ? 'bg-yellow-500 text-white' : ''}`}
              onClick={() => setSelectedPaymentMethod('MasterCard')}
            >
              <FaCcMastercard size={40} color={selectedPaymentMethod === 'MasterCard' ? 'white' : 'yellow'} />
              <span className="text-xl">MasterCard</span>
            </div>
            <div
              className={`flex items-center justify-between border p-3 rounded cursor-pointer ${selectedPaymentMethod === 'PayPal' ? 'bg-indigo-500 text-white' : ''}`}
              onClick={() => setSelectedPaymentMethod('PayPal')}
            >
              <FaCcPaypal size={40} color={selectedPaymentMethod === 'PayPal' ? 'white' : 'indigo'} />
              <span className="text-xl">PayPal</span>
            </div>
            <div
              className={`flex items-center justify-between border p-3 rounded cursor-pointer ${selectedPaymentMethod === 'Google Pay' ? 'bg-green-500 text-white' : ''}`}
              onClick={() => setSelectedPaymentMethod('Google Pay')}
            >
              <SiGooglepay size={40} color={selectedPaymentMethod === 'Google Pay' ? 'white' : 'green'} />
              <span className="text-xl">Google Pay</span>
            </div>
            <div
              className={`flex items-center justify-between border p-3 rounded cursor-pointer ${selectedPaymentMethod === 'PhonePe' ? 'bg-purple-500 text-white' : ''}`}
              onClick={() => setSelectedPaymentMethod('PhonePe')}
            >
              <SiPhonepe size={40} color={selectedPaymentMethod === 'PhonePe' ? 'white' : 'purple'} />
              <span className="text-xl">PhonePe</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button 
            className="bg-gray-300 text-black py-2 px-4 rounded mr-2"
            onClick={() => setShowPaymentModal(false)}
          >
            Cancel
          </button>
          <button 
            className="bg-indigo-500 text-white py-2 px-4 rounded"
            onClick={handleCheckout}
          >
            Pay Now
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddToCart;

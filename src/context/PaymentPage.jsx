import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // For animation

function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [note, setNote] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Add this state
  const navigate = useNavigate();
  const location = useLocation();

  // Assume the total amount is passed via location state
  const { finalPrice = 0 } = location.state || {};

  const handlePayment = () => {
    if (selectedPaymentMethod) {
      setIsPaymentModalOpen(true);
    } else {
      alert("Please select a payment method.");
    }
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);  // Set the payment success state to true
    setTimeout(() => {
      setPaymentSuccess(false);  // Reset the payment success state after a delay
    }, 3000); // Notification disappears after 3 seconds
    navigate("/payment-success");
  };

  const handlePaymentFailure = () => {
    alert("Payment Failed!");
    navigate("/payment-failure");
  };

  // Payment form based on the selected method
  const renderPaymentForm = () => {
    switch (selectedPaymentMethod) {
      case "Visa":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Visa Card Number
            </label>
            <input
              type="text"
              placeholder="Enter your Visa card number"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        );
      case "MasterCard":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              MasterCard Number
            </label>
            <input
              type="text"
              placeholder="Enter your MasterCard number"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        );
      case "PayPal":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PayPal Account (if needed)
            </label>
            <input
              type="text"
              placeholder="Enter PayPal account (if needed)"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        );
      case "Google Pay":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Google Pay Number (if needed)
            </label>
            <input
              type="text"
              placeholder="Enter Google Pay number (if needed)"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        );
      case "PhonePe":
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PhonePe Number (if needed)
            </label>
            <input
              type="text"
              placeholder="Enter PhonePe number (if needed)"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Select Payment Method
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[ 
            { method: "Visa", logo: "./payment-logo/Visa.png" },
            { method: "MasterCard", logo: "./payment-logo/MasterCard.png" },
            { method: "PayPal", logo: "./payment-logo/PayPal.png" },
            { method: "Google Pay", logo: "./payment-logo/Google Pay.png" },
            { method: "PhonePe", logo: "./payment-logo/PhonePe.png" },
          ].map(({ method, logo }) => (
            <button
              key={method}
              onClick={() => setSelectedPaymentMethod(method)}
              className={`flex flex-col items-center p-4 border rounded-lg ${
                selectedPaymentMethod === method
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              aria-label={`Select ${method} as your payment method`}
            >
              <img
                src={logo}
                alt={method}
                className="w-16 h-16 object-contain object-center"
                style={{
                  maxWidth: "64px", 
                  maxHeight: "64px", 
                  objectFit: "contain", // Ensure the image is contained without distortion
                }} 
              />
              <p className="mt-2 text-gray-700">{method}</p>
            </button>
          ))}
        </div>

        <button
          onClick={handlePayment}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-6 w-full"
        >
          Proceed with Payment
        </button>

        {isPaymentModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Payment Details - {selectedPaymentMethod}
              </h2>

              {/* Payment Logo at the top */}
              <div className="flex justify-center mb-6">
                <img
                  src={`./payment-logo/${selectedPaymentMethod}.png`}
                  alt={`${selectedPaymentMethod} Logo`}
                  className="w-20 h-20 object-contain object-center"
                  style={{
                    maxWidth: "80px",
                    maxHeight: "80px",
                    objectFit: "contain", // Ensure the image is contained without distortion
                  }}
                />
              </div>

              {/* Auto-filled Amount */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Amount to Pay
                </label>
                <input
                  type="text"
                  value={`$${finalPrice.toFixed(2)}`} // Format amount as a fixed decimal
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded bg-gray-100 text-gray-700"
                />
              </div>

              {renderPaymentForm()}

              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Note (Optional)
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Add any notes for the transaction"
                  className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePaymentFailure}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handlePaymentSuccess}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {paymentSuccess && (
          <div className="bg-green-600 text-white py-2 px-4 rounded-lg mt-4">
            Payment Successful!
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;

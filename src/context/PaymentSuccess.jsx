import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-green-600">Payment Successful!</h1>
        <p className="mt-4">Your payment has been processed successfully. Thank you for your purchase!</p>
        <button onClick={() => navigate('/add-to-cart')} className="bg-blue-600 text-white py-2 px-4 rounded mt-6">
          Back to Cart
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;

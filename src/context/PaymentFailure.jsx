import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentFailure() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-red-600">Payment Failed!</h1>
        <p className="mt-4">There was an issue with your payment. Please try again later.</p>
        <button onClick={() => navigate('/add-to-cart')} className="bg-blue-600 text-white py-2 px-4 rounded mt-6">
          Back to Cart
        </button>
      </div>
    </div>
  );
}

export default PaymentFailure;

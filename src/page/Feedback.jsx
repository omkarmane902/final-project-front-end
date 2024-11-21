import React, { useState } from 'react';
import Footer from '../componts/Footer';// Correct path for Footer component

// Star Rating component
const StarRating = ({ rating, onRatingChange }) => {
  const handleClick = (starIndex) => {
    onRatingChange(starIndex + 1); // Rating from 1 to 5 stars
  };

  return ( 
   
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? 'gold' : 'gray'}
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <path d="M12 .587l3.668 7.431 8.332 1.215-6.001 5.829 1.457 8.573-7.456-3.917-7.456 3.917 1.457-8.573-6.001-5.829 8.332-1.215z" />
        </svg>
      ))}
    </div>
  );
};

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    serviceRating: 0,
    foodQualityRating: 0,
    atmosphereRating: 0,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (rating, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: rating,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.feedback) formErrors.feedback = 'Feedback is required';
    if (!formData.serviceRating) formErrors.serviceRating = 'Please rate the service';
    if (!formData.foodQualityRating) formErrors.foodQualityRating = 'Please rate the food quality';
    if (!formData.atmosphereRating) formErrors.atmosphereRating = 'Please rate the atmosphere';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setErrors({}); // Clear previous errors
      setSubmitted(true); // Set submitted to true to show thank you message

      // Simulating a form submission delay
      setTimeout(() => {
        setIsLoading(false);
        alert('Thank you for your feedback!');
        setFormData({
          name: '',
          email: '',
          feedback: '',
          serviceRating: 0,
          foodQualityRating: 0,
          atmosphereRating: 0,
        });
      }, 2000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
   
    <div>
      
      <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 py-10">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">We'd Love Your Feedback</h2>

          {submitted ? (
            <div className="text-center text-green-600 font-semibold">
              <p>
                Thank you for your feedback,{' '}
                <span className="text-teal-600 font-bold">{formData.name}</span>!
              </p>
              <p>Your ratings:</p>
              <p>Service: {formData.serviceRating} stars</p>
              <p>Food Quality: {formData.foodQualityRating} stars</p>
              <p>Atmosphere: {formData.atmosphereRating} stars</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Your Feedback</label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your thoughts here..."
                  rows="4"
                ></textarea>
                {errors.feedback && <p className="text-red-500 text-xs mt-1">{errors.feedback}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Rate the Service</label>
                <StarRating
                  rating={formData.serviceRating}
                  onRatingChange={(rating) => handleRatingChange(rating, 'serviceRating')}
                />
                {errors.serviceRating && <p className="text-red-500 text-xs mt-1">{errors.serviceRating}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Rate the Food Quality</label>
                <StarRating
                  rating={formData.foodQualityRating}
                  onRatingChange={(rating) => handleRatingChange(rating, 'foodQualityRating')}
                />
                {errors.foodQualityRating && <p className="text-red-500 text-xs mt-1">{errors.foodQualityRating}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Rate the Atmosphere</label>
                <StarRating
                  rating={formData.atmosphereRating}
                  onRatingChange={(rating) => handleRatingChange(rating, 'atmosphereRating')}
                />
                {errors.atmosphereRating && <p className="text-red-500 text-xs mt-1">{errors.atmosphereRating}</p>}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full p-4 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  {isLoading ? 'Submitting...' : 'Submit Feedback'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default FeedbackForm;

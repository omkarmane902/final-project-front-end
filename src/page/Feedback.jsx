import React, { useState } from 'react';
import Footer from '../componts/Footer'; // Ensure this path is correct

// Emoji Rating component
const EmojiRating = ({ rating, onRatingChange }) => {
  const emojis = ['😡', '🙁', '😐', '😊', '😍'];

  return (
    <div className="flex space-x-2">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className={`text-3xl cursor-pointer transition-all transform duration-200 ease-in-out 
            ${index < rating ? 'text-yellow-500' : 'text-gray-500'} 
            ${rating === index + 1 ? 'scale-150' : 'hover:scale-125 hover:bg-yellow-200 hover:shadow-lg'}`}
          onClick={() => onRatingChange(index + 1)}
        >
          {emoji}
        </span>
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

  const handleRatingChange = (rating, field) => {
    setFormData({
      ...formData,
      [field]: rating,
    });
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.feedback) formErrors.feedback = 'Feedback is required';
    if (!formData.serviceRating) formErrors.serviceRating = 'Please rate the service';
    if (!formData.foodQualityRating) formErrors.foodQualityRating = 'Please rate the food quality';
    if (!formData.atmosphereRating) formErrors.atmosphereRating = 'Please rate the atmosphere';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setErrors({});
      try {
        const response = await fetch('http://localhost:5000/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          alert('Thank you for your feedback!');
          setFormData({
            name: '',
            email: '',
            feedback: '',
            serviceRating: 0,
            foodQualityRating: 0,
            atmosphereRating: 0,
          });
        } else {
          const data = await response.json();
          alert(data.message || 'Failed to submit feedback');
        }
      } catch (error) {
        console.error('❌ Submission error:', error);
        alert('An error occurred. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 py-20">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">We'd Love Your Feedback</h2>

          {submitted ? (
  <div className="text-center text-green-600 font-semibold text-xl">
    <p>Thank you for giving your feedback! 😊</p>
  </div>
) : (
            <form onSubmit={handleSubmit}>
              {/* Name */}
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

              {/* Email */}
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

              {/* Feedback */}
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

              {/* Ratings */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Rate the Service</label>
                <EmojiRating
                  rating={formData.serviceRating}
                  onRatingChange={(rating) => handleRatingChange(rating, 'serviceRating')}
                />
                {errors.serviceRating && <p className="text-red-500 text-xs mt-1">{errors.serviceRating}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Rate the Food Quality</label>
                <EmojiRating
                  rating={formData.foodQualityRating}
                  onRatingChange={(rating) => handleRatingChange(rating, 'foodQualityRating')}
                />
                {errors.foodQualityRating && <p className="text-red-500 text-xs mt-1">{errors.foodQualityRating}</p>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium text-sm">Rate the Atmosphere</label>
                <EmojiRating
                  rating={formData.atmosphereRating}
                  onRatingChange={(rating) => handleRatingChange(rating, 'atmosphereRating')}
                />
                {errors.atmosphereRating && <p className="text-red-500 text-xs mt-1">{errors.atmosphereRating}</p>}
              </div>

              {/* Submit Button */}
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
      <Footer />
    </div>
  );
}

export default FeedbackForm;

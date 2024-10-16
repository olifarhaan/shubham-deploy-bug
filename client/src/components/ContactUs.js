import React, { useState } from "react";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);

    // Log form data for debugging
    console.log("Form Data: ", formData);

    try {
      // Send POST request to the back-end API
      const response = await axios.post(
        `${BACKEND_URL}/send-email`,
        formData
      );

      // Check if response is successful
      if (response.status === 200) {
        setIsSubmitted(true);
        setErrorMessage("");
        // Reset form data after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          comments: "",
        });
      }
    } catch (error) {
      // Log error response for debugging
      console.error(
        "There was an error sending the email",
        error.response || error
      );
      setErrorMessage("Failed to send the message, please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center mb-5 py-15 sm:mb-10">
      <div className="flex flex-col lg:flex-row max-w-6xl w-full">
        <div className="bg-blue-600 text-white p-20 rounded-md w-full lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
          <h3 className="text-2xl font-bold mb-4">Let’s Get in Touch</h3>
          <p className="mb-6">
            Successfully helped enterprises all across the globe to scale.
          </p>
          <div className="mb-4">
            <h4 className="font-bold">EMAIL</h4>
            <p>sales@Ayanshtech.com</p>
          </div>
          <div>
            <h4 className="font-bold">CALL</h4>
            <p>+91-7778842856</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            Hey There! 😊
          </h2>
          <p className="mb-4 text-gray-600">We'd love to help you.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company Name</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Any Comments</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows="4"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send 🚀"}
            </button>
          </form>

          {isSubmitted && (
            <p className="text-green-600 mt-4">Email sent successfully!</p>
          )}

          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

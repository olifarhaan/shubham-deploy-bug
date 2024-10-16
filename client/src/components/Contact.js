import React, { useState } from "react";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    phone: "",
    comments: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/send-email`,
        formData
      );
      if (response.status === 200) {
        setIsSubmitted(true);
        setErrorMessage("");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          phone: "",
          comments: "",
        });
      }
    } catch (error) {
      console.error("There was an error sending the email", error);
      setErrorMessage("Failed to send the message, please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ">
            Hey There! We’d love to help you.{" "}
            <span role="img" aria-label="smile">
              {" "}
              😃{" "}
            </span>
          </h2>
          <p className="text-gray-600 md:text-lg">
            Help us with your pre-requisite so that we can suggest the best
            suitable solutions in accordance with your requirements.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left font-bold text-gray-600 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                required
              />
            </div>
            <div>
              <label className="block text-left font-bold text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                required
              />
            </div>

            <div>
              <label className="block text-left font-bold text-gray-600 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-left font-bold text-gray-600 mb-1">
                Service
              </label>
              <input
                type="text"
                name="service"
                placeholder="Service Required"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-left font-bold text-gray-600 mb-1">
                Phone Number
              </label>
              <div className="flex items-center">
                <span className="mr-2">🇮🇳</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-left font-bold text-gray-700 mb-1">
              Any Comments
            </label>
            <textarea
              name="comments"
              placeholder="Your comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
              rows="3"
            ></textarea>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 hover:text-white font-bold py-3 px-8 rounded-full flex items-center"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>

          {isSubmitted && (
            <p className="text-green-600 mt-4">Email sent successfully!</p>
          )}
          {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

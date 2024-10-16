import React from "react";

const VoipSolContact = () => {
  return (
    <div className="md:w-1/3 bg-white shadow-2xl rounded-2xl p-4 mt-10 md:mt-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Hey There!{" "}
        <span role="img" aria-label="smile">
          {" "}
          😊
        </span>
      </h2>
      <p className="text-gray-600 mb-6">We’d love to help you.</p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name*"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Enter your email*"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <div className="flex flex-col md:flex-row md:space-x-2 items-center">
          <select className="w-full md:w-auto p-3 border rounded-lg focus:outline-none">
            <option value="IN">🇮🇳 +91</option>
            <option value="US">🇺🇸 +1</option>
          </select>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4 md:mt-0"
          />
        </div>
        <input
          type="text"
          placeholder="Company name*"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Any Comments"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          rows="3"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 hover:text-white transition duration-300"
        >
          Send <span role="img" aria-label="send"></span>
        </button>
      </form>
    </div>
  );
};

export default VoipSolContact;

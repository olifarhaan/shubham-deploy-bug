import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10 mb-5">
      {/* Contact Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md mt-10">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <img
              src="/assets/images/contactus.avif"
              alt="Assistant"
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-400 text-white py-2 px-4 rounded-full shadow-md">
              How can I help you?
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">
            We'd love to hear from you
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Service Required"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Any Comments"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-white py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto mt-16">
        <h3 className="text-center text-3xl font-bold mb-10">
          What usually happens after you hit "Send"?
        </h3>

        <div className="relative flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-16">
          <img
            src="/assets/images/contactBanner.png"
            alt="Process"
            className="rounded-lg"
          />
        </div>

        <div className="bg-blue-800 text-white py-8 px-4 rounded-2xl mt-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ayanshtech's Commitment
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              At Ayanshtech, we are committed to exceeding your expectations.
              Our team of experts will work closely with you to ensure a
              successful project outcome.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const Step = ({ number, title, description, icon }) => (
  <div className="flex space-x-4">
    {/* Number and Icon */}
    <div className="flex items-center justify-center w-12 h-12 text-white rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold">
        {number}. {title}
      </h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Contact;

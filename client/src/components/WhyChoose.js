import React from "react";

const WhyChoose = () => {
  return (
    <div className=" bg-gray-50 px-10 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="p-6 bg-blue-700 text-white rounded-lg shadow-md text-center">
          <p className="text-4xl font-bold">300+</p>
          <p className="mt-2">Projects Delivered</p>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow-md text-center">
          <p className="text-4xl font-bold">200+</p>
          <p className="mt-2">Clients Served</p>
        </div>
        <div className="p-6 bg-purple-500 text-white rounded-lg shadow-md text-center">
          <p className="text-4xl font-bold">50+</p>
          <p className="mt-2">Professionals</p>
        </div>
        <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-md text-center">
          <p className="text-4xl font-bold">7+</p>
          <p className="mt-2">Years of Experience</p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Partner with us for unmatched real-time communications solutions aided
          by the latest technology stacks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
        <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="font-bold text-xl mb-2">Customized Solutions</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            We deliver tailor-made solutions for all your business needs.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="font-bold text-xl mb-2">Complete Privacy</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Our solutions are secure and compliant with industry regulations.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="font-bold text-xl mb-2">100% Quality Assured</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            We deliver agile, bug-free, and scalable solutions.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="font-bold text-xl mb-2">Customer Satisfaction</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            We prioritize your satisfaction through an agile approach.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="font-bold text-xl mb-2">Flexible Engagement</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Our sprint-wise models meet all your business needs.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            We provide round-the-clock support to assist you anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

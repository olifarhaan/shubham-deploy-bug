import React from "react";
import { InsightsArray } from "../components/InsightsArray.js";
import ContactUs from "../components/ContactUs.js";

const Blogs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
          Blogs
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {InsightsArray.map((insight, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Responsive Image */}
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-32 sm:h-40 md:h-48 object-cover"
              />
              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{insight.title}</h3>
                <p className="text-sm text-blue-500 mb-2">{insight.category}</p>
                <p className="text-xs sm:text-sm text-gray-500">{insight.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

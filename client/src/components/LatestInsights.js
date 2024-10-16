import React from "react";
import { useNavigate } from "react-router-dom";
import { InsightsArray } from "./InsightsArray.js";

const LatestInsights = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/blogs");
  };

  return (
    <section className=" px-20 py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Latest Insights
        </h2>

        {/* Grid layout, responsive for small, medium, and large screens */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {InsightsArray.slice(0, 3).map((insight, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={insight.image}
                alt={insight.title}
                className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {insight.title}
                </h3>
                <p className="text-sm sm:text-base text-blue-500 mb-2">
                  {insight.category}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {insight.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleViewAll}
            className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;

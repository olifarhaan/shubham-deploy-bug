
import React from "react";
import {useNavigate} from 'react-router-dom'

const WebDesign = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/web-mobile-solutions');
  window.scrollTo(0,0); 
  }

  return (
    <div className="bg-white py-5 px-10">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
      <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Web Design and Development</h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
          We curate interactive, scalable, and robust real-time communications solutions using advanced tech stacks and frameworks.
          This takes your business to the next level with a responsive and user-friendly website designed to set your brand ahead of the competition.
          </p>
          <button onClick={handleClick} className="bg-blue-700 text-white hover:bg-blue-900 px-6 py-3 rounded-full">
          Learn More 
        </button>
        </div>
      
        <div className="flex justify-center lg:w-1/2 mb-12 lg:mb-0">
          <img
            src="/assets/images/homeImages/webDesign.avif"
            alt="VoIP Development"
            className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDesign;

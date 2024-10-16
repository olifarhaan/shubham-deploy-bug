
import React from "react";
import {useNavigate} from 'react-router-dom';

const QAServices = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/qa-services');
    window.scrollTo(0,0);
  }

  return (
    <div className="bg-white py-5 px-10">

      <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
      
        <div className="flex justify-center lg:w-1/2 mb-12 lg:mb-0">
          <img
            src="/assets/images/homeImages/QA.svg"
            alt="VoIP Development"
            className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
          />
        </div>

        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Quality Assurance Services</h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
          Debug your solution with the power of functional and non-functional testing. Our QA testing services integrate STLC to ensure the improved effectiveness of your solution against all vulnerabilities. 
          Experience excellence with our meticulously crafted end-to-end testing services, with an accuracy rate of 98%.
          </p>
          <button onClick= {handleClick} className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-900">
          Learn More 
        </button>
        </div>
      </div>
    </div>
  );
};

export default QAServices;


import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Voip = () => {

  const navigate=useNavigate();
  const handleClick = () => {
    navigate('/voip-business-solutions');
    window.scrollTo(0, 0);
  }

  return (
    <div className="bg-white py-5 px-10">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Our Offerings</h1>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4">
          Ayanshtech offers market-leading expertise and real-time communications solutions to empower your businesses.
        </p>
        
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
      
        <div className="flex justify-center lg:w-1/2 mb-5 lg:mb-0">
          <img
            src="/assets/images/homeImages/voipDev.svg"
            alt="VoIP Development"
            className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
          />
        </div>

         <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">VoIP Development</h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
            With extensive expertise in open-source telephony development, we offer innovative VoIP solutions tailored to suit
            your business needs. We modernize your network with customized solutions that are highly advanced and cost-effective.
          </p>
          <button onClick={handleClick} className=" bg-blue-700 text-white hover:bg-blue-900 px-6 py-3 rounded-full" >
          Learn More 
        </button>
        </div>
      </div>
    </div>
  );
};

export default Voip;

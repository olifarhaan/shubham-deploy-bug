import React from "react";
import "../App.css";

const FrontPage = () => {
  return (
    <div className=" lg:flex mt-20 ml-8 mb-20">
      {/* Section for title and button */}
      <div className="lg:w-1/2 sm:w-full flex flex-col items-start py-9 mt-10 ml-10">
        <h1 className=" sm: text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
        Transform your Dreams <br/> into Reality
        </h1>
        <img
          src="/assets/images/Frame.svg"
          alt="Frame"
          className="ml-25 mb-10 h-4 px-10"
        />
        {/* Show this paragraph only on large screens */}
        <p className="hidden lg:block text-2xl text-gray-600 mb-6">
          Tap into the future of Real-Time Communication via custom VoIP
          software, Web & Mobile solutions.
        </p>

        {/* Smaller button aligned to the left */}
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full">
          Let’s Talk More!
        </button>
      </div>

      <div className="animated-image lg:w-1/2 sm:w-full relative px-6 py-6 mt-15 ">
        {/* Display all images on large screens */}
        <div className="hidden lg:block">
          <a href="/voip-business-solutions" rel="noopener noreferrer">
            <img
              src="/assets/images/banner/voip.svg"
              alt="VoIP Solutions"
              className="absolute top-[30%] left-[36%] w-[180px] h-[180px] border-2 border-transparent rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-105"
            />
          </a>
          <a href="/web-mobile-solutions" rel="noopener noreferrer">
            <img
              src="/assets/images/banner/webMob.svg"
              alt="Web Mobile Solutions"
              className="absolute top-[8%] left-[67%] w-[180px] h-[180px] border-2 border-transparent rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-105"
            />
          </a>
          <a href="/devops-services" rel="noopener noreferrer">
            <img
              src="/assets/images/banner/devops.svg"
              alt="DevOps"
              className="absolute top-[40%] left-[8%] w-[160px] h-[180px] border-2 border-transparent rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-105"
            />
          </a>
          <a href="/qa-services" rel="noopener noreferrer">
            <img
              src="/assets/images/banner/QA.svg"
              alt="QA Services"
              className="absolute top-[80%] left-[38%] w-[150px] h-[180px] border-2 border-transparent rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-105"
            />
          </a>
          <a href="/Consultancy-And-Discovery" rel="noopener noreferrer">
            <img
              src="/assets/images/banner/consultancy.svg"
              alt="Consultancy"
              className="absolute top-[65%] left-[67%] w-[180px] h-[180px] border-2 border-transparent rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-105"
            />
          </a>
          <a href="link-to-qa-1" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/images/banner/QA_1.svg"
              alt="QA-1"
              className="absolute top-[95%] left-[20%] w-[120px] h-[150px] border-2 border-transparent rounded-lg transition-all duration-300 hover:scale-105"
            />
          </a>
          <a
            href="link-to-real-time-communication"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/banner/realTimeComm.svg"
              alt="Real Time Communication"
              className="absolute top-[-15%] left-[24%] w-[250px] h-[200px] border-2 border-transparent rounded-lg transition-all duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* Show only one image on small and medium screens */}
        <div className="lg:hidden ">
          <div className="animated-image">
            <img
              src="/assets/images/banner/groupCards.svg"
              alt="Group Cards"
              className="block mx-auto mt-2 border-2 border-transparent rounded-lg transition-all duration-300 hover:border-green-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

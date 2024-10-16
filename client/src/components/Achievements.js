import React from "react";

const Achievements = () => {
  return (
    <div className="bg-white ">
      <div className="text-center mt-10 mb-4 py-20 ">
        <h1 className="font-bold text-gray-800 mb-2 sm:text-3xl md:text-4xl lg:text-5xl">
          Our Achievements
        </h1>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600">
          Fortunate to achieve this milestone through the dedication of our team
          all these years.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="overflow-hidden relative w-[100%] max-w-6xl">
          <div className="flex animate-scroll gap-6">
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\ComSolution.png"
                alt="Communications Solutions"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\TA-2023.png"
                alt="Telecom Awards 2023"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\internet-telephony.png"
                alt="Internet Telephony 2022"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\top-developers.png"
                alt="Clutch Top Developers 2022"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\bharatLeadership.png"
                alt="Bharat Leadership"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\Best-CSS.jpg"
                alt="Best CSS"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\CIO.jpg"
                alt="CIO Insiders"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\goodFirms.png"
                alt="Good Firms"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\tm.png"
                alt="Techimply"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\topSoftware.png"
                alt="TOp Software Developers"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                src="\assets\images\achievements\voipAward22.png"
                alt="VoIP Award 2022"
                className="w-60 h-50 mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

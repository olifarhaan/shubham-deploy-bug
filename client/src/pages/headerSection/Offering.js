import React, { useState } from 'react';

const Offering = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* VoIP Section */}
        <div>
          <h2
            className="text-xl font-semibold mb-2 cursor-pointer"
            onClick={() => toggleSection('voip')}
          >
            VoIP
          </h2>
          <ul className={`text-left space-y-2 ${activeSection === 'voip' ? 'block' : 'hidden'} md:block`}>
            <li>FreeSWITCH</li>
            <li>WebRTC</li>
            <li>Kamailio</li>
            <li>OpenSIPS</li>
            <li>Asterisk</li>
          </ul>
        </div>

        {/* DevOps Section */}
        <div>
          <h2
            className="text-xl font-semibold mb-4 cursor-pointer"
            onClick={() => toggleSection('devops')}
          >
            DevOps
          </h2>
          {/* You can add content inside the ul or manage the visibility as needed */}
          <ul className={`text-left space-y-2 ${activeSection === 'devops' ? 'block' : 'hidden'} md:block`}>
            <li>CI/CD Pipelines</li>
            <li>Containerization</li>
            <li>Cloud Services</li>
          </ul>
        </div>

        {/* QA Services Section */}
        <div>
          <h2
            className="text-xl font-semibold mb-4 cursor-pointer"
            onClick={() => toggleSection('qa')}
          >
            QA Services
          </h2>
          <ul className={`text-left space-y-2 ${activeSection === 'qa' ? 'block' : 'hidden'} md:block`}>
            <li>VoIP Testing</li>
            <li>QA Automation</li>
            <li>API Testing</li>
          </ul>
        </div>

        {/* Web+Mobile and AI/ML Section */}
        <div>
          <h2
            className="text-xl font-semibold mb-4 cursor-pointer"
            onClick={() => toggleSection('web-mobile')}
          >
            Web+Mobile
          </h2>
          <ul className={`text-left space-y-2 ${activeSection === 'web-mobile' ? 'block' : 'hidden'} md:block`}>
            <li>Web Design and Development</li>
            <li>Mobile Application Development</li>
          </ul>
          <h2
            className="text-xl font-semibold mt-6 mb-4 cursor-pointer"
            onClick={() => toggleSection('ai-ml')}
          >
            AI/ML
          </h2>
          <ul className={`text-left space-y-2 ${activeSection === 'ai-ml' ? 'block' : 'hidden'} md:block`}>
            <li>Face Recognition Solution</li>
            <li>Sentiment Analysis</li>
            <li>Chatbot</li>
          </ul>
        </div>
      </div>

      {/* Right Image Section - Hidden on Small Screens */}
      <div className="mt-12 md:mt-0 md:flex justify-end">
        <div className="max-w-md text-center md:text-right">
          <img
            src="https://via.placeholder.com/150"
            alt="VoIP Solutions"
            className="inline-block mb-4 hidden md:block"
          />
          <h3 className="text-xl font-semibold mb-2">Top 10 Reasons to Choose Ayanshtech for VoIP Solutions</h3>
          <p className="text-gray-600 mb-4">
            Companies are increasingly moving to VoIP solutions as times change and today’s...
          </p>
          <a href="/" className="text-pink-600 hover:underline">Explore Blog →</a>
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
        <div>
          <h4 className="text-lg font-semibold">India</h4>
          <p className="text-pink-600">+91-7778842856</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">USA</h4>
          <p className="text-pink-600">+1-303-997-3139</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Email Enquiries</h4>
          <p className="text-pink-600">sales@Ayanshtech.com</p>
        </div>
      </div>

      {/* Career Enquiries */}
      <div className="text-center mt-6">
        <h4 className="text-lg font-semibold">Career Enquiries</h4>
        <p className="text-pink-600">careers@Ayanshtech.com</p>
      </div>
    </div>
  );
};

export default Offering;

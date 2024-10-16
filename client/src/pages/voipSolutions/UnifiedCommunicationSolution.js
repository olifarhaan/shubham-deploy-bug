import React from "react";
import GetInTouch from "../../components/GetInTouch.js";
import VoipSolContact from "../../components/VoipSolContact.js";

const UnifiedCommunicationSolution = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-20">
            Boost Your Offerings with Customized Unified Communications
            Solutions
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Redefine How Your Business Communicates, Collaborate, and Grow.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            Are you a service provider stuck with a one-size-fits-all
            communication solution that isn’t helping you grow? You’re in the
            right place. Whether you are a cloud telephony provider, hosted PBX
            provider, or UCaaS provider targeting micro, small, or large
            enterprises, You need a platform tailored to you and your users.
            Ayanshtech’s custom Unified Communications solutions are built to scale
            with your business, give you control over the source code, and offer
            the flexibility to meet every communication requirement.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Features of Unified Communications Solutions
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600  mt-4 max-w-6xl mx-auto">
            At Ayanshtech, we don’t just focus on your business; we also consider
            the needs of our customers’ customers. We know that today’s
            businesses need more than a standard telephony system. They need a
            robust solution to handle PBX features yet lightweight enough to
            support efficient call center and conferencing
            capabilities—especially for sales and customer care teams.
          </p>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600  mt-4 max-w-6xl mx-auto">
            And in this era of AI, you need a technology partner who can
            integrate these cutting-edge technologies to automate routine tasks.
          </p>
        </div>

        <div className="bg-gray-50 p-8 px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">PBX Features</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Lightweight Call Center</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Built-inWebRTC Client</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">IPPhone Provisioning (TR-069 Protocol)</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Multi-tenancy</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Selfcare WebPortal for Each User Entity</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Simple UI/UX</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">
                Virtualization & Containerization for Easy Scaling
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Your Custom Unified Communications Solution
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Our base solution is just the starting point. At Ayanshtech, we customize
          and deliver additional features that align perfectly with your
          specific needs—or those of your customers. Whether you need advanced
          communication tools or specific functionalities, including but not
          limited to the following notable features, we’re here to build it for
          you.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="/assets/images/dev.jpg"
              alt="Laptop with graph"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className=" md:w-1/2 lg:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">
                  Unified Communication Client for Mobile and Desktop
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Instant Messaging Service</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Omni-Channel Support</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Predictive and Progressive Dialer</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Reseller Module</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">
                  Invoicing and Payment Collection (Billing)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default UnifiedCommunicationSolution;

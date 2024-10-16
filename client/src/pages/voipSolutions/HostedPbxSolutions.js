import React, { useState } from "react";
import GetInTouch from "../../components/GetInTouch.js";
import VoipSolContact from "../../components/VoipSolContact.js";

const pointsData = [
  {
    title: "Replace Physical Presence",
    content:
      "We all lose potential clients when we can't reach the meeting location or primarily when we can't have a physical meeting. Audio-video conferencing solutions act as an escape in such a scenario where you can conduct meetings from any geographic location and be as effective as in person. This means the sky is the limit, and you can quickly grab lucrative opportunities in different locations.",
  },
  {
    title: "Efficient Communication",
    content:
      "With conferencing solutions, communication becomes much more efficient. It allows you to connect with your team or clients at any time without the need to be physically present.",
  },
  {
    title: "Ensure Participants Presence",
    content:
      "Conferencing solutions help ensure that all participants are present and engaged during the meeting by providing tools like attendance tracking, screen sharing, and real-time interaction.",
  },
  {
    title: "Consolidated Communication",
    content:
      "The use of conferencing solutions consolidates all forms of communication, allowing for seamless meetings without worrying about connectivity or location.",
  },
];

const HostedPbxSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-20">
            Multi Tenant IP PBX Solution
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Hosted IP PBX facilitates businesses with the communications
            elements they need while removing the expense of clunky and costly
            equipment. This helps to remove time and cost monitoring on-site
            multi-tenant IP PBX solution.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            Ayanshtech expedites hosted multi-tenant IP PBX development solution
            process that connects users anytime and anywhere for effective
            collaboration and communication. Additionally, a multi-tenant IP PBX
            solution augments connecting remote branches or offering PBX
            services to the tenants. PBX phone system for small businesses
            offers features such as video calls, voice logs, speed dial,
            click-to-call, voice mail, and call forwarding, among others.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Core Features of Multi Tenant IP PBX
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            The custom Hosted IP PBX solution delivers freedom from being locked
            into lines, overcomes accessibility barriers, and lowers operational
            costs drastically.
          </p>
        </div>

        <div className="bg-gray-50 p-8 px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Call Return and Routing</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Phone Book</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Blind and Attended Transfer</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Configurable Routing Rules</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">
                Queue & Agent with Recording option
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Selective Acceptance</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Hold and Retrieve</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Playback Extensions</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Selective and Anonymous Rejection</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Audio Conference Room</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Call Park & Pickup</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Multi-Tenant Support</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Group Call Pickup</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Integrated Billing</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Multilingual Support</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Find Me / Follow Me</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">
                Dashboard with Real-time System Status
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Caller ID / Restricted Caller ID</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Intercom Dialing</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Call Detail Records (CDRs)</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-16 mt-20 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why is the Need of Hosted PBX Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-6xl mx-auto">
            Don’t let your business phone system be an overlooked source of cost
            savings! When you move to the cloud, you will experience greater
            data security and improved scalability.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-20">
          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon1.svg"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">
                Allow better collaboration and controlled management
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon2.svg"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">Easy to use and simple to manage</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon3.png"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">It comes with various advanced features</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon4.svg"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">Cost-effective solution</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon4.svg"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">
                No complex wiring or hardware system is required
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon4.svg"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">Highly secure and scalable solution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 mb-10 rounded-3xl">
        {/* Title Section */}
        <h2 className="text-center sm:4xl md:5xl lg:text-6xl font-bold text-black mb-6">
          Tailored Enterprise Contact Center Solution
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Build an exceptional customer experience by leveraging customized
          enterprise contact center solutions. Our professionals can develop a
          customized solution that includes all the essential features and
          functionalities that you need for the smooth functioning and
          management of your contact center operations.
        </p>

        {/* Navigation Bar */}
        <div className="flex justify-center space-x-8 mb-4">
          {pointsData.map((point, index) => (
            <button
              key={index}
              className={`text-lg font-medium ${
                activeIndex === index
                  ? "text-blue-600 underline"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {point.title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="text-center max-w-5xl mx-auto p-4  border-gray-300 ">
          <p className="text-lg text-gray-600 mt-4">
            {pointsData[activeIndex].content}
          </p>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Multi-Tenant Hosted IP PBX Solution
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Don’t let your phone systems be an overlooked source of cost savings!
          Moving to the cloud will experience greater data security and improved
          scalability with a multi-tenant IP PBX development solution.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="\assets\images\headerSection\hireNodeDev\img2.png"
              alt="Laptop with graph"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className=" md:w-1/2 lg:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />

              <div>
                <p className="text-lg">
                  Cost-saving solution, requiring rare or almost no new
                  hardware.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  VoIP-ready solution that make communication a cake-walk and
                  leads to lesser lag and latency
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Multi-party conferencing enables interaction from anywhere
                  globally
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Reporting and dashboard monitoring to identify employee’s
                  performance and customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-12 mt-5 max-w-6xl">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose Ayanshtech’s Multi-Tenant PBX Solution
          </h2>
          <p className="sm:text-base lg:text-lg mt-5 p-5">
            Ayanshtech’s hosted multi-tenant IP PBX solution development process
            is an excellent way to umbrella your employee communication base
            under a canopy. Organizations with branches globally can leverage
            the benefit of custom-built centralized multi-tenant IP PBX software
            by Ayanshtech for a localized experience. You can have a better shot
            at collaboration, and besides all, you have a watertight security
            model that safeguards your online presence.
          </p>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default HostedPbxSolutions;

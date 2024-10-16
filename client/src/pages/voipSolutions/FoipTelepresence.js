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

const FoipTelepresence = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-20">
            Unleash The Power Of Fax Over IP
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Use the Internet to send and receive faxes with Fax over Internet
            Protocol (FoIP). The cutting-edge technology has outshined the
            legacy fax machines and brought best of state-of-the-art technology
            to exchange Faxes over IP Software Solutions. Streamline your
            communication with a more secure SIP-based solution for sending
            documents across the globe. The team at Ayanshtech develops bespoke
            solutions using the most advanced VoIP technologies for Virtual Fax
            Server systems. FoIP users can use a local intranet or connect over
            the internet cloud. It supports “Unified Messaging” by centralizing
            services and fax alongside e-mail to reduce the ongoing cost.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Core Features of Fax over IP
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            Now you don’t have to stress about the fax hardware to send and
            receive documents. Use FoIP virtualized fax server for paperless
            faxing with Fax over IP Software Solution.
          </p>
        </div>

        <div className="bg-gray-50 p-8 px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">
                Send faxes from PC, tablets, or smartphones
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <p className="text-lg ml-16">Customized cover pages</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">User-defined fax templates</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">
                Auto forward faxes in case of failure
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">Store faxes to view them later</p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">Block unwanted numbers</p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">
                Concurrent fax sent to multiple recipients
              </p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">Fax delivery status notifications</p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />

              <p className="text-lg ml-16">CDR reports</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Usher The Power of Fax over IP
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Go digital. Cut down on time and costs with FoIP when you are in an
          industry that relies heavily on faxing.
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
                  Eliminate legacy dedicated PSTN lines.
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
                  Offers more effective ways to manage documents vs paper filing
                  systems.
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
                  Send FoIP even when working remotely without a fax line
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
                  Increased disaster recovery with cloud storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-16 mt-20 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            FoIP Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-6xl mx-auto">
            Advanced FoIP solutions ensure that the fax calls are routed to a
            centralized fax server. Fax over IP Software Solution has lowered
            the dependency on fax machines. It has reduced the cost through
            least cost routing to nearest branch offices and lowered monitoring
            by having a centralized fax system. The fax is sent virtually and
            received over IP by decreasing the hardware fax machine
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
                There is a dramatic decrease in complexity and lower costs of
                maintenance
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
              <p className="text-lg">
                With a reduced set-up cost, the FoIP solution helps
                organizations send faxes as seamlessly as with traditional fax
                machines
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon3.png"
              alt="icon"
              className="w-18 h-18"
            />
            <div>
              <p className="text-lg">
                No hardware to install/maintain and no wired lines to configure
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
              <p className="text-lg">
                Getting solutions from a leading FoIP Solution Development
                company lowers your hardware cost and increases operational
                efficiency
              </p>
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

      <div>
        <div className="text-center mb-12 mt-5 max-w-6xl">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose Ayanshtech as Your Enterprise VoIP Partner
          </h2>
          <p className="sm:text-base lg:text-lg mt-5 p-5">
            Businesses are integrating IP telephony in their IP ecosystem to
            reduce costs and ensure seamless communication between the
            stakeholders. Delivering fax between endpoints over a dedicated IP
            network lowers the dependability of hardware and streamlines the
            delivery of faxes. As a FoIP Solution Development Company,
            Ayanshtech ensures that the faxes are sent over IP without hiccups
            and communication between Virtual Fax Server solution is seamless.
          </p>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default FoipTelepresence;

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

const VoipBilllingSystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-20">
            VoIP Billing System Development Services
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            VoIP billing solutions are systems that allow VoIP service providers
            and businesses to manage their billing and invoicing competently. A
            robust VoIP billing system allows seamless Tenant & Customer
            management, reporting, billing, and payment processes that take your
            business to the next level. These solutions also enable service
            providers to maintain prepaid and postpaid billing services.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            Telecom billing management systems have gained massive traction over
            the years, simplifying complex billing tasks like calling cards,
            reporting, discounts, broadband telephone, PC to telephone, and
            more. In the current scenario, the Softswitch providers do not have
            a billing system, so they rely on third-party apps for billing. You
            can always turn to a leading VoIP billing system development service
            provider to curate apps that meet your needs end-to-end.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className="text-center bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Core Features of VoIP Billing Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            We are committed to delivering impeccable VoIP billing solutions
            that comprehensively meet your billing, reporting, and other
            analytics needs.
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
              <p className="text-lg">Prepaid and postpaid billing</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Real-time balance sync</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Subscriptions and Packages</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Multicurrency support</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Complete financial analysis</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Reporting system</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Tariff management</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">
                DTMF interworking (RFC2833, Inband and SIP INFO)
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">DID billing support</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">
                Configurable Service Plan at fixed/dynamic rates
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Postpaid/Prepaid Plan Management</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Significance Of VoIP Billing System
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Telecom billing management systems can process thousands of calls per
          second without latency. It allows telecom service providers to bill
          their customers for using voice services. Based on the requisites, you
          can reach out to a seasoned telecommunications billing systems
          development partner who can help you track sales and payments
          received. Here are a couple of reasons you must leverage the VoIP
          billing system in your business:
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
                  The process of billing and invoicing is automated
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
                <p className="text-lg">System is scalable</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Quick access to customer details</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Resources work on instrumental tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-16 mt-20 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Curate Excellent VoIP Billing Solutions
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-6xl mx-auto">
            The VoIP billing system adequately bills your customers for VoIP
            usage. Our bespoke VoIP billing software prevents fraud and
            maintains leakage-free calls. Since the primary aim of telecom
            billing solutions is to simplify the complex billing procedure and
            make invoicing seamless, it helps VoIP solution providers to reveal,
            charge, and install billing processes.
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
                Easy billing process by maintaining both prepaid and postpaid
                customers
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
                Take your work management to the next level by collaborating
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
                Billing automation allows focusing on other tasks
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
                Track employee usage and monitor where they make most calls
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
                Save money on hefty and tiresome billing process
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 mb-20 rounded-3xl">
        {/* Title Section */}
        <h2 className="text-center sm:4xl md:5xl lg:text-6xl font-bold text-black mb-6">
          Tailored VoIP Billing Solution
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Contact Center is a vast industry! We offer robust and multifunctional
          contact center solutions that ensure a single point of operation for
          multiple requirements. Several pain points can be combated easily
          using our customized omnichannel contact center solution. Now, you can
          manage all your interactions (inbound or outbound) on different
          channels efficiently.
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
        <div className="text-center max-w-5xl mx-auto p-4  border-gray-300">
          <p className="text-lg text-gray-600 mt-4">
            {pointsData[activeIndex].content}
          </p>
        </div>
      </div>

      <div className="text-center max-w-6xl mb-16 mt-5 ">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Why choose Ayanshtech as your VoIP Billing Solution development
          partner
        </h2>
        <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 mt-4 max-w-6xl mx-auto">
          As the VoIP niche has shot up, there is a spike in the requirement for
          telecommunications billing systems. Our bespoke VoIP billing software
          development model enables you to accumulate CDRs from different
          sources and send final invoices to end customers. We are seasoned in
          developing telecom billing management systems for MVNO, IP PBX, Class
          4, and Class 5 Softswitches. Our team understands, defines, and
          delivers what you need and even par excellent solutions.
        </p>
      </div>

      <GetInTouch />
    </div>
  );
};

export default VoipBilllingSystem;

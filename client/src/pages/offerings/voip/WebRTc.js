import React, { useState } from "react";
import { FreeSwitchDevelopersFaqs } from "../../../components/faqData.js";
import ContactUs from "../../../components/ContactUs.js";

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

const WebRTc = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [actIndex, setActIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActIndex(index === actIndex ? null : index);
  };
  const scrollToContact = () => {
    document
      .getElementById("contact-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20 sm:mb-20">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              OpenSIPS Software Development Services
            </h2>

            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              OpenSIPs software development is a multifunctional open source SIP
              proxy/server for voice, video, IM, and SIP extensions. It finds
              use as session border controllers (SBC) in IP PBX systems.
              OpenSIPs development is known for its efficient and customizable
              route handling, used by numerous organizations to manage billions
              of calls across the cloud every day. Its rich modules provide
              features for SIP handling, backend operations, integration, and
              routing logic.
            </p>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              For better backend operations OpenSIPs solutions provide smart
              routing and adds SIP services and integration. It’s a versatile,
              multi-purpose signaling Session Internet Protocol (SIP) server
              augmented by multiple carriers, telecoms, application developers,
              and Internet telephony Service Providers (ITSPs) every day.
            </p>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Ayanshtech delivered excellent custom VoIP solutions with OpenSIPs
              for enterprises. Our proven track record embeds credibility in the
              performance of solutions designed, developed and delivered by our
              experienced developers.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-blue-700 text-white  hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 font-semibold py-2 px-4 rounded-full mt-6"
            >
              Get Started
            </button>
          </div>

          <div className="flex justify-center  mb-12 lg:mb-0 mt-5">
            <img
              src="\assets\images\headerSection\hireFreeSwitchDev\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Features of OpenSIP Software Solution
        </h2>
      </div>

      <div className="bg-white p-8 ml-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Robust (RFC3261) SIP proxy/server</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">
              Stateless and transactional Stateful SIP Proxy processing
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">XCAP support for Presence Agent</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">IP Black-lists</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Our OpenSIPS Development Services
        </h2>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="\assets\images\headerSection\hirefreeSwitchDev\img2.png"
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
                  Use OpenSIPS to develop as a SIP proxy
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
                  Use OpenSIPS to develop as a SIP proxy
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
                <p className="text-lg">Good knowledge of WSS/DTLS-SRTP</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Adept understanding of developing real-time OpenSIPS solution
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  SBC developed for OpenSIPS with RTPEngine
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg">
                  Can use it to build WebRTC to SIP gateways
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Solutions We Develop With OpenSIPS
          </h2>
        </div>

        <div className="bg-gray-50 p-8 px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">SBC</h3>
              <p className="text-lg ml-16">
                Save your VoIP network from phishing, vishing, spoofing,
                barging, and other malicious attacks with SBC.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Contact Center</h3>
              <p className="text-lg ml-16">
                Build industry-ready tailored contact center apps, requiring no
                installation costs.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Class 4 Softswitch</h3>
              <p className="text-lg ml-16">
                Curate wholesale switch apps that provide the seamless call
                routing and billing for international calls.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">IB PBX</h3>
              <p className="text-lg ml-16">
                Host your PBX on the cloud for robust VoIP connectivity
                globally.
              </p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">
                Load Balancing Failover
              </h3>
              <p className="text-lg ml-16">
                Provide strong alternatives for failover support in case there
                in case primary server or database server isn’t available.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-10 mb-20 rounded-3xl">
        {/* Title Section */}
        <h2 className="text-center sm:4xl md:5xl lg:text-6xl font-bold text-black mb-6">
          Pain Points & Solutions
        </h2>

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
        <div className="text-center mx-auto p-4  border-gray-300">
          <p className="text-lg text-gray-600 mt-4">
            {pointsData[activeIndex].content}
          </p>
        </div>
      </div>

      <div className=" p-6 sm:p-8 md:p-12 lg:p-16 bg-gray-50 w-full rounded-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OpenSIPS Consulting and Support Services
          </h1>
        </div>

        <div className="mb-8">
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            Ayanshtech provides OpenSIPS consulting and support services to help
            businesses make the most of their OpenSIPS installation. If you are
            considering using OpenSIPS for your business, here are some
            consulting and support services offered by Ayanshtech that you can
            benefit from:
          </p>
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            Some of the key services include-
          </p>
          <ul className="list-disc pl-8  sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto">
            <li>OpenSIPS installation and configuration</li>
            <li>Customization services</li>
            <li>Troubleshooting and maintenance</li>
            <li>Performance tuning</li>
            <li>Integration</li>
            <li>Training</li>
          </ul>
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            By leveraging Ayanshtech’s OpenSIPS consulting and support services,
            businesses and organizations can improve the performance,
            reliability, and scalability of their OpenSIPS-based services, while
            minimizing costs and maximizing the value of the software.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Schedule a Free Session Today!
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 py-20 w-full ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {FreeSwitchDevelopersFaqs.map((faq, index) => (
          <div key={index} className="border-b ">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left py-4 flex justify-between items-center focus:outline-none ${
                actIndex === index
                  ? "bg-blue-600 text-white px-5 rounded-2xl"
                  : ""
              }`}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl">{actIndex === index ? "-" : "+"}</span>
            </button>
            {actIndex === index && (
              <div className="p-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div id="contact-section">
        {" "}
        <ContactUs />
      </div>
    </div>
  );
};

export default WebRTc;

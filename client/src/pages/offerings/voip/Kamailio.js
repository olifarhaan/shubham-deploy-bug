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

const Kamailio = () => {
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
              Kamailio Solution Development Services
            </h2>

            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Kamailio, an open-source SIP server, builds a comprehensive
              platform for VoIP and real-time communication applications in no
              time. With Kamailio’s customized solutions, you can handle huge
              volumes of calls in real time. It works as a SIP proxy, SIP
              presence server, or location server. It supports asynchronous
              TCP/UDP and secures communication on VoIP using TLS. Custom
              solution development with Kamailio allows load balancing, routing
              fail-over, accounting, and authorization. It runs on Unix and
              Linux systems, varying from embedded systems to large-scale
              multi-core servers.
            </p>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Ayanshtech provides Kamailio development and consultancy services
              that support a large number of subscribers as well as
              carrier-grade servers.
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
          Features of Kamailio Development Solution
        </h2>
        Custom Kamailio development services are enterprise-friendly solutions
        for building VoIP and unified communications platforms with its
        relatively smaller footprint and SIP core capabilities.
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Custom asterisk solutions development can be set up for multipurpose,
          multifunctional communication systems. It supports conferencing and
          CRM integrations, along with several other features.
        </p>
      </div>

      <div className="bg-white p-8 ml-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Robust SIP (RFC3261) server</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">SIP Routing capabilities</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Secure communication</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Transport Layers</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">WebSocket support</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Asynchronous processing</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Extensibility APIs</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Monitoring and troubleshooting</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">SCTP multihoming and multistreaming</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Support for UDP/TCP/TLS/SCTP</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Our Kamailio Development Services
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Kamailio is a versatile SIP server that can run anywhere from small
          embedded systems with limited resources to large platforms.
        </p>
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
                  Kamailio can quickly and efficiently handle a large volume of
                  calls every second.
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
                  Support for load balancing and least cost routing and failover
                  routing is built in.
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
                  Kamailio allows the creation of secure, reliable, and always
                  available services.
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
                  Kamailio can integrate with several back-end systems like
                  MySQL, PostgreSQL, Oracle, Redis, etc.
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
                  Solution is highly scalable with support for intelligent SIP
                  routing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Solutions We Develop With Kamailio
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
              <h3 className="ml-16 text-lg font-bold">Class 4 Softswitch</h3>
              <p className="text-lg ml-16">
                Manage wholesale switches with Kamailio Development for seamless
                call routing and billing internationally.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">
                Load Balancing & Failover
              </h3>
              <p className="text-lg ml-16">
                Easily streamline your service in case of failover of VoIP
                services for flawless communication and unbarged services.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">
                Load Balancing & Failover
              </h3>
              <p className="text-lg ml-16">
                Easily streamline your service in case of failover of VoIP
                services for flawless communication and unbarged services.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">
                Session Border Controller
              </h3>
              <p className="text-lg ml-16">
                Thrive impeccable SBC solutions using Kamailio Solution
                Development for firewalls that safeguard your calling network
                and stand against spoofing, eavesdropping, spying, barging, etc.
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
            Kamailio Consulting and Support Services
          </h1>
        </div>

        <div className="mb-8">
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            Ayanshtech offers Kamailio consulting and support services ranging from
            small business needs to carrier-grade deployment. Our team of
            experienced professionals who have deep knowledge of the platform
            can help businesses solve complex problems quickly and efficiently.
            Some of the key services include-
          </p>
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            Some of the key services include-
          </p>
          <ul className="list-disc pl-8  sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto">
            <li>Kamailio deployment and configuration</li>
            <li>Custom development of Kamailio modules and applications</li>
            <li>Troubleshooting and bug fixing</li>
            <li>Performance tuning and optimization</li>
            <li>Training and documentation</li>
            <li>Kamailio maintenance support services</li>
          </ul>
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            By leveraging the expertise of Ayanshtech’s Kamailio consultants and
            support providers, businesses can make their processes more
            efficient and productive.
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

export default Kamailio;

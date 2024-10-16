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

const FreeSwitch = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [actIndex, setActIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActIndex(index === actIndex ? null : index);
  };
  const scrollToContact = () => {
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20 sm:mb-20">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              FreeSWITCH Development
            </h2>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              FreeSWITCH solutions development in the telecom landscape drives
              digitization from owned telecom switches to dynamic
              implementation. With the potent FreeSWITCH application server,
              businesses can build PBX systems, Class 5 SoftSwitches, video
              conferencing platforms, IVR solution, SBCs, voice gateways, and UC
              services like chat and screen sharing.
            </p>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Once set up the module development supports multiple protocols,
              features codecs, and encryption methods to deliver impeccable
              solutions. It can also be interconnected with any other server
              supporting similar protocols. FreeSWITCH software solution
              development unlocks the telecom capability of any device.
            </p>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Ayanshtech is a well-recognized 15+ years of expertise FreeSWITCH
              development company that has thrived a revolution in the industry
              with its technical finesse. We offer cloud-hosted APIs, commercial
              support for FreeSWITCH, and custom development.
            </p>
            <button onClick={scrollToContact} className="bg-blue-700 text-white  hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 font-semibold py-2 px-4 rounded-full mt-6">
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
          Features of FreeSWITCH Solutions
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Ayanshtech builds single and multi-tenant solutions for its clients using
          FreeSWITCH, with voice mail, intercom, and call groups.
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
            <p className="text-lg">Conferencing</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Multi-tenant</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Voice mail</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Flexible CDR system</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Intercom</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Call groups</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Dial groups</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">SLA – Shared Line Appearance</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">IVR – Interactive Voice Response</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Our FreeSWITCH Development Services
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Kickstart a community of open-source applications leveraging the
          capabilities of FreeSWITCH solutions. Dismantle the complex software
          architecture and deliver fully-functional apps.
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
                  Handle thousands of calls concurrently
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
                  Create applications that talk to other applications or humans
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
                  Manage voice and video calls efficiently
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
                <p className="text-lg">Automate various business components</p>
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
                  Develop wholesale or multi-tenant VoIP solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Solutions We Develop With FreeSWITCH
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            Ayanshtech provides a unified platform for small businesses to help
            them manage communications and customer interactions easily and
            efficiently. Some of the key features of VoIP services for small
            businesses include-
          </p>
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
              <h3 className="ml-16 text-lg font-bold">PBX Systems</h3>
              <p className="text-lg ml-16">
                Get IP Hosted PBX Solution within an enterprise using our
                FreeSWITCH module development that makes communication a
                cakewalk.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Class 5 SoftSwitches</h3>
              <p className="text-lg ml-16">
                Optimum-designed Retail Softswitch for seamless billing and
                routing.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">
                Audio/Video conferencing platforms
              </h3>
              <p className="text-lg ml-16">
                Custom FreeSWITCH development for impeccable conference quality
                among participants that give a live experience.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">IVR Solutions</h3>
              <p className="text-lg ml-16">
                Build Smart & Dynamic IVR solutions after FreeSWITCH consulting
                with us giving your customers the best engaging session
                possible.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">SBC</h3>
              <p className="text-lg ml-16">
                Safeguard your network while making VoIP calls with Session
                Border Controller solution.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Voice Gateway</h3>
              <p className="text-lg ml-16">
                FreeSWITCH is an expert in developing apps that connect
                enterprise VoIP networks with telecom providers for an
                extraordinary calling.
              </p>
            </div>
            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">UC Services</h3>
              <p className="text-lg ml-16">
                Our FreeSWITCH consulting services amalgamate the presence of
                audio, video, IM, content-sharing, etc., under one roof.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-10 mb-20 rounded-3xl">
        {/* Title Section */}
        <h2 className="text-center sm:4xl md:5xl lg:text-6xl font-bold text-black mb-6">
          Key Points of FreeSWITCH
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
            FreeSWITCH Consulting and Support Services
          </h1>
          <p className="text-gray-600 sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto">
            Ayanshtech provides FreeSWITCH consulting and support services ranging
            from simple installation and configuration to complex deployments.
            Our team of experts with in-depth knowledge of FreeSWITCH can help
            organizations develop the best suitable, customized, and scalable
            solutions for their business.
          </p>
        </div>

        <div className="mb-8">
          <p className="sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto mb-4">
            With our FreeSWITCH consulting and support services, businesses can
            implement, maintain, and optimize their FreeSWITCH-based telephony
            solutions easily and effectively. Some of the key services include:
          </p>
          <ul className="list-disc pl-8  sm:text-base md:text-lg lg:text-xl max-w-7xl mx-auto">
            <li>Architecture design</li>
            <li>Installation and configuration</li>
            <li>Upgrades and maintenance</li>
            <li>Troubleshooting and issue resolution</li>
            <li>Custom development</li>
            <li>Training</li>
          </ul>
        </div>

        <div className="text-center">
          <button  onClick={scrollToContact} className="bg-blue-600 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition duration-300">
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
      

     

      

      <div id="contact-section"> <ContactUs /></div>
      
    </div>
    
  );
};

export default FreeSwitch;

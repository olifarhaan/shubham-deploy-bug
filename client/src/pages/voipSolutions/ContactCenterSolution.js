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

const ContactCenterSolution = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-20">
            Intuitive Contact Center Solutions{" "}
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Leverage robust, custom-made, and scalable contact center solutions
            by Ayanshtech that integrate seamlessly with any business tools to
            derive value. The omnichannel approach allows efficient management
            of all inbound and outbound communication via voice, video, chat,
            email, and more. Using the latest technology and market trends, we
            develop ideal solutions for all types of contact centers including
            inbound, outbound, and blended.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            During situations like natural disasters, network outages, or any
            other fallout, our custom-made omnichannel contact center solution
            will instantly reroute the calls to the right person/department, or
            let agents use the mobile app. This way, it helps to keep your
            business up and running regardless of any situation.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className="text-center bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Core Features of Contact Center Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            For today’s businesses, a reliable and robust contact center
            solution is a must for better customer service management. Here are
            some of the most essential features that you can get using
            Ayanshtech’s omnichannel contact center solutions
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
              <p className="text-lg">DID Management</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">SIP Trunk/Carrier Management</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Agent/Supervisor Account Management</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">
                Inbound, Outbound and Blended Campaign Management
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Multi-Level IVRS</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">ACD Management</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Skill-based routing</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Analytics and Reports</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Real-time campaign monitor</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Realtime Agent Monitoring</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Whisper/Coaching /Barge-in</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Built-In WebRTC Based phone</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Inbound Screen Pop</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Auto data retrieval from CRM</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Oncall campaign wise script</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Sticky Agent</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Callback Feature</p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Timeclock</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Key Benefits of Contact Center Solution
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          With customized, scalable, and robust contact center solutions,
          businesses can easily handle customers’ queries, optimize customer
          satisfaction, and deliver quality services. Some of the key benefits
          of contact center solution are-
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
                <p className="text-lg">Enhanced customer service management.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Improved productivity</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Superior customer experience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Better security of data</p>
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
                  Real-time monitoring and detailed reports
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-20 h-20"
              />
              <div>
                <p className="text-lg">Dynamic scalability</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-16 mt-20 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Contact Center Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-6xl mx-auto">
            With the advancement in technology and market evolution, omnichannel
            contact centers have become a new standard and a vital part of many
            businesses. At Ayanshtech, we understand the unique requirements of
            our clients. Based on your specific business needs and current
            market trends, we can develop the best suitable, customized contact
            center solution that can help you achieve your desired goals.
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
                Maintain the cost of operations and deliver an immersive
                customer experience by scaling your business at low prices
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
                Quickly assess the performance of your live agents or customer
                representatives via reports and statistics of the call center
                software
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
                Experiment with different modules by third-party integrations,
                allowing you to choose the best fit for inbound or outbound call
                center solutions
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
                Anticipate where the cost could occur by looking at the trends
                in hindsight
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 mb-20 rounded-3xl">
        {/* Title Section */}
        <h2 className="text-center sm:4xl md:5xl lg:text-6xl font-bold text-black mb-6">
          Tailored Contact Center Solution
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

      <div className="text-center mb-16 mt-5 ">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Why Choose Ayanshtech for Contact Center Solution Development?
        </h2>
        <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 mt-4 max-w-6xl mx-auto">
          Ayanshtech has been developing contact center solutions for more than
          15 years. We know that each customer inquiry contains an opportunity
          for your business to flourish. We can help you take advantage of such
          opportunities using the right solution. Our professionals can develop
          a customized omnichannel contact center solution to meet all your
          business needs.
        </p>
        <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 mt-4 max-w-6xl mx-auto">
          {" "}
          If you are planning to migrate your contact center to a cloud-based
          CCaaS solution or looking for a completely new solution, our
          representatives will be happy to answer any questions you may have.
        </p>
      </div>

      <GetInTouch />
    </div>
  );
};

export default ContactCenterSolution;

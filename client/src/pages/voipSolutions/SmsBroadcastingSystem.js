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

const SmsBroadcastingSystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-20">
            Voice/SMS Broadcasting <br />
            Solutions For Enterprises
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Voice calls/SMS broadcasting have great prominence in multiple
            industries like healthcare, education, IT, hospitality, telecom,
            etc., and so does broadcasting software. SMS/Voice broadcasting
            software is used to distribute the messages to many users. SMS
            broadcaster software has gained traction in the market due to its
            ease of access and wide reach.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            Text/Voice broadcasting solutions help deliver essential
            notifications on time, most efficiently, and conveniently.
            Multi-tenant broadcasting solution is a direct and timely way to
            communicate with your customers and audiences. Ayanshtech provides a
            custom-built SMS/Voice message broadcasting solution with 3rd party
            API integration capability to ensure hassle-free, smooth, and
            cost-effective operation.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className="text-center bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Core Features of Ayanshtech Voice/SMS Broadcasting Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
            Reach more customers than ever before with our automated
            customizable broadcasting solution.
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
              <p className="text-lg">User-friendly Interface s</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Throttle concurrent calls</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Answering machines detection</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">DNC and opt-out support</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Auto redial feature</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Call report notifications</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Web-based call detail reports</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Easy import of contacts</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">
                Handles several IVR scripts simultaneously
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Personalized messages</p>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-14 h-14"
              />
              <p className="text-lg">Automated bulk calls/SMS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Leverage Voice/SMS Broadcasting Solution For Your Business
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Discuss anything with your team with real-time presence and stay ahead
          in the competitive curve.
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
                  Create, schedule, and send automated Voice and SMS to your
                  customers and vendors all at once without any difficulty.
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
                <p className="text-lg">
                  Allows businesses to add a personalized touch to the messages.
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
                <p className="text-lg">
                  Get instant feedback and user response with various mobile and
                  telephone key options.
                </p>
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
                  Increase business scalability as you can reach a large client
                  base at minimum cost.
                </p>
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
                  Integrated with third-party applications in real-time for
                  better analysis of the calls and SMS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-16 mt-20 ">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Voice/SMS Broadcasting Solution
          </h2>
          <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 mt-4 max-w-6xl mx-auto">
            If you want to leave your footprints for multiple users in a single
            go Voice Messaging with Multi-Tenant Broadcasting Solution could be
            the best fit. Delivering high-quality and safe broadcasting
            campaigns on a reliable, protected, and encrypted platform is the
            dream of every Voice/SMS broadcasting company.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-20">
          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">
                Operate and administer multiple campaigns in a go
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">
                Redial to the customers who have missed out on your calls and
                protect your leads
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon3.png"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">Translate the text to speech</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">
                Drive campaigns tailored to day, time, and contact per your need
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">Get automated performance reports</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 p-8 mb-20 rounded-3xl">
        {/* Title Section */}
        <h2 className="text-center sm:4xl md:5xl lg:text-6xl font-bold text-black mb-6">
          Custom Voice/SMS Broadcasting Solution
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Kickstart your project/campaign with the right broadcasting solution
          built for your business. There are several pain points that are
          combated using voice/SMS broadcasting solution.
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
        <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Why choose Ayanshtech as your Voice/SMS Broadcasting Solution
          Development partner
        </h2>
        <p className="sm:text-base md:text-lg lg:text-lg text-gray-600 mt-4 max-w-6xl mx-auto">
          Voice/SMS broadcasting has gained traction in the last couple of
          years. Ayanshtech uses this cutting-edge technology incorporated into
          your apps that doesn’t go out of fashion in the long term.
          Ayanshtech’s fully customized Voice/SMS broadcasting solution is
          advanced automated software for small and large enterprises. We
          deliver robust web-based solutions that don’t require hardware
          switching for different Voice Broadcast Company/Text Broadcasting
          Service providers. Our Multi-Tenant Broadcasting Solutions are helpful
          for inbound marketing that generate leads that can convert. As a Voice
          Broadcasting Software Development company, you can have a 3rd party
          API integration for flawless and cost-effective functioning.
        </p>
      </div>

      <GetInTouch />
    </div>
  );
};

export default SmsBroadcastingSystem;

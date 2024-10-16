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

const SmallBusinessVoipSolution = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-6 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-20">
            VoIP Solutions For Small Business
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            If you have a small business and you are looking for flexible,
            scalable, and cost-effective VoIP solutions. We provide all types of
            small business VoIP solutions to help businesses stay competitive,
            enhance the customer experience and drive growth.
          </p>
        </div>

        <VoipSolContact />
      </div>

      <div className="bg-white mb-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          <div className="flex justify-center lg:w-1/4 mb-12 lg:mb-0">
            <img
              src="/assets/images\webMobile.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              What is Small Business VoIP?
            </h2>
            <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
              Just like large enterprises, small businesses also require a
              unified platform to better serve their customers. VoIP for small
              businesses allows companies to make voice calls, and send SMS, or
              text messages via the Internet.
              <br />
              <br />
              With small business VoIP services, businesses can improve call
              flows and get real-time insights into their overall performance.
              Without incurring high costs, small businesses can enjoy various
              advanced VoIP call features like Interactive Voice Response (IVR),
              call forwarding, auto attendant, analytics and reporting,
              integration with other business tools, and more.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-gray-50 rounded-3xl">
        <div className="text-center mb-5 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Small Business VoIP Features
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
              <h3 className="ml-16 text-lg font-bold">
                Interactive Voice Response
              </h3>
              <p className="text-lg ml-16">
                Directs callers to a professional, automated menu to receive the
                right response to their query or concern. It also allows teams
                to answer calls remotely, thereby helping to maintain a
                professional presence.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Call Forwarding</h3>
              <p className="text-lg ml-16">
                Now you don’t have to be present in the office to receive
                important communication. You can forward calls to any number and
                stay connected from anywhere, anytime.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Easy Integration</h3>
              <p className="text-lg ml-16">
                VoIP functions can be integrated easily into various business
                communication tools, eliminating the extra effort and need to
                handle separate applications.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">
                Audio/Video Conference Solution
              </h3>
              <p className="text-lg ml-16">
                Audio and video conferencing solutions can improve user
                productivity globally and enhance collaboration.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Auto Attendant</h3>
              <p className="text-lg ml-16">
                The auto attendant feature allows easy and effective handling of
                calls all day. It allows you to answer and route all incoming
                calls based on pre-defined rules.
              </p>
            </div>

            <div className="relative flex flex-col space-y-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <h3 className="ml-16 text-lg font-bold">Code Analytics</h3>
              <p className="text-lg ml-16">
                Collect and analyze real-time customer insight using the call
                analytics feature. You can analyze various insights like call
                session metrics, behavioral trends, agent performance, etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-12 mt-5">
          <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose Ayanshtech as Your Enterprise VoIP Partner
          </h2>
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
                Our strong sense of identification digs in-depth into your
                requirements and delivers resonating solutions.
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
                With over a decade of experience, we know technology thoroughly
                and have a team of VoIP solutions experts.
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
              <p className="text-lg">
                We aim for turnkey solutions built from scratch.
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
              <p className="text-lg">
                Our model includes cost-effective, high-quality solutions that
                stand in the top echelon of similar apps.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon5.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">
                We are a leading VoIP solutions provider with several awards
                under our belt.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="\assets\icons\AyanshtechAdvantage\icon6.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <div>
              <p className="text-lg">
                Ayanshtech believes in delivering projects on time and is highly
                punctual and professional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default SmallBusinessVoipSolution;

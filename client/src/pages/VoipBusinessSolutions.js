import React from "react";
import { useState } from "react";
import { InsightsArray } from "../components/InsightsArray.js";
import { voipFaqs } from "../components/faqData.js";

const VoIPBusinessSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20">
      <div className="bg-white rounded-lg p-10 py-20 max-w-5xl text-center mb-20">
        <h1 className="text-6xl font-bold mb-4">
          VoIP Business Solutions Provider
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Leverage the power of VoIP to make seamless calls from desktops,
          smartphones, VoIP phones, and WebRTC-enabled browsers. In a nutshell,
          with a seasoned VoIP solutions provider, you can communicate over the
          internet immaculately.
        </p>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="mt-20 mb-10 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Scroll Down
        </button>
      </div>

      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          <div className="flex justify-center lg:w-1/4 mb-12 lg:mb-0">
            <img
              src="/assets/images/voipBusinessSolution.jpg"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Stay Ahead with Robust VoIP Solutions
            </h2>
            <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
              Our excellent and customized VoIP solutions’ design stands out in
              the market via a foolproof strategy. By studying the market
              capabilities, we have gauged that the future is entirely digital.
              IP-based communications are more customizable, reliable, scalable,
              and provide better voice quality. With us, your conversations
              avail Internet telephony to outshine even the best VoIP business
              solutions available in the market.
              <br />
              <br />
              Being a flawless bespoke VoIP solutions provider, our developers
              can design and develop an array of customized business
              communication apps. Our team has the right blend of expertise and
              a decade of experience in VoIP software development. Consequently,
              Ayanshtech helps you save time and cost with its high-quality,
              cost-effective business VoIP solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Custom VoIP Solutions We Offer
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Being a leading VoIP Business Provider, Ayanshtech offers an array of
          custom VoIP Solutions to improvise your business communication needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">Session Border Controller</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Session Border Controller Regulate the IP communications flow wall
            for internet telephony at network borders for signaling and media
            traffic.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">Hosted PBX Solutions</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Manage multiple customers, teams, and locations using a software
            platform to cut down maintenance and managerial cost.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">
            Wholesale VoIP Switch/Class 4 Softswitch
          </h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Use carrier-grade Class 4 Softswitch support to relay VoIP traffic
            and services over multiple IP networks.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">
            Reatil VoIP Switch/Class 5 Softswitch
          </h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Send voicemails, SMS, and instant messages with calling features
            like call hold, transfer, routing, and customer billing.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">
            Unified Communication Platform
          </h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Integrate several enterprise communications channels, viz. voice,
            video, IM, team messaging, voicemail, and content sharing.{" "}
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">Dynamic IVR Solution</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Avail highly scalable multi-tenant turnkey solutions offering
            user-friendly routing per menu setup, DID number support, and time
            zone support.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">
            Voice/SMS Broadcasting Solution
          </h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Broadcast your messages to customers via recorded voice script and
            text messages to large audiences.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">MVNO Solution</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            MVNOs now have complete control over service definition and
            delivery. They can improve operational efficiencies as they scale
            and increase their customer base.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">Contact Center/Call Center</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Improve your customers’ experience by communicating with them via
            multiple platforms like calls, web, chats, and other modes.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">
            Audio/Video Conference Solution
          </h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Improve user productivity globally and bring greater collaboration
            with audio and video conferencing solutions.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">Fax over IP</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Get faxes sent over the internet even with ordinary fax machines
            with high security, low cost, and high availability for VoIP users.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="font-bold text-xl mb-2">Telepresence</h3>
          <p className="sm:text-base md:text-lg lg:text-xl">
            Elevate the level of your video conferencing and the quality of
            collaboration between teams working remotely with telepresence.
          </p>
        </div>
      </div>

      <div className="text-center mb-16 mt-10">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-6xl mx-auto">
          With over a decade of experience in VoIP business solutions
          development, we provide unmatched services. The custom VoIP solutions
          we develop and deliver are trusted by enterprises for their
          transparency and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-16 px-20">
        <div className="p-6 text-center relative">
          <img
            src="/assets/images/voipComponent/Component1.png"
            alt="Fault Tolerant"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/assets/images/voipComponent/compLogo/logo1.png"
              alt="Logo 1"
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2 px-8 font-bold text-white">Fault Tolerant</p>
          </div>
        </div>

        <div className="p-6 text-center relative">
          <img
            src="/assets/images/voipComponent/Component2.png"
            alt="Multiple Protocols"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/assets/images/voipComponent/compLogo/logo2.png"
              alt="Logo 2"
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2 px-8 font-bold text-white">Multiple Protocols</p>
          </div>
        </div>

        <div className="p-6 text-center relative">
          <img
            src="/assets/images/voipComponent/Component3.png"
            alt="Securing Platform"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/assets/images/voipComponent/compLogo/logo3.png"
              alt="Logo 3"
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2 px-8 font-bold text-white">Securing Platform</p>
          </div>
        </div>

        <div className="p-6 text-center relative">
          <img
            src="/assets/images/voipComponent/Component4.png"
            alt="Open Source Technology"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/assets/images/voipComponent/compLogo/logo4.png"
              alt="Logo 4"
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2 px-8 font-bold text-white ">
              Open Source Technology
            </p>
          </div>
        </div>

        <div className="p-6 text-center relative">
          <img
            src="/assets/images/voipComponent/Component5.png"
            alt="SIP Proxy with OpenSIPS & Kamailio"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/assets/images/voipComponent/compLogo/logo5.png"
              alt="Logo 5"
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2 px-8 font-bold text-white">
              SIP Proxy with OpenSIPS & Kamailio
            </p>
          </div>
        </div>

        <div className="p-6 text-center relative">
          <img
            src="/assets/images/voipComponent/Component6.png"
            alt="API Integrations"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src="/assets/images/voipComponent/compLogo/logo6.png"
              alt="Logo 6"
              className="w-12 h-12 mb-2"
            />
            <p className="mt-2 px-8 font-bold text-white">API Integrations</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-10 mt-10">
        <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Technologies We use
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 px-15">
        <div className="position:relative; z-8 ">
          <img
            src="/assets/images/voipComponent/VoipTech/1.png"
            alt="Voip tech"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="position:relative; z-8">
          <img
            src="/assets/images/voipComponent/VoipTech/2.png"
            alt="Voip tech"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="position:relative; z-8">
          <img
            src="/assets/images/voipComponent/VoipTech/3.png"
            alt="Voip tech"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="position:relative; z-8">
          <img
            src="/assets/images/voipComponent/VoipTech/4.png"
            alt="Voip tech"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="position:relative; z-8">
          <img
            src="/assets/images/voipComponent/VoipTech/5.png"
            alt="Voip tech"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl bg-blue-800 text-white py-8 px-4 rounded-2xl mt-10 mx-auto ">
        <div className=" mx-auto text-center flex justify-center md:justify-between items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl  mb-2">
            Empower Your Business Success – Unleash Its Potential Today!
          </h2>
          <button className="bg-green-500 px-4 py-2 ml-6 rounded-full ">
            Get Started
          </button>
        </div>
      </div>

      <div className="text-center mb-16 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          AyanshTech : Leading VoIP Solutions Provider
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-bold mt-4 max-w-2xl mx-auto">
          We thrive value in your business in following ways:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Our strong sense of identification digs in-depth into your
            requirement and delivers resonating solutions.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            With over a decade of experience, we know the technology thoroughly
            and have a team of VoIP solutions experts.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            We aim for turnkey solutions built from scratch.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Our model includes cost-effective, high-quality solutions that stand
            in the top echelon of similar apps.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            We are a leading business VoIP provider with several awards under
            our belt.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Ayanshtech believes in delivering projects on time and is highly
            punctual and professional.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 py-20 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {voipFaqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left py-4 flex justify-between items-center focus:outline-none ${
                activeIndex === index ? "bg-blue-600 text-white px-5" : ""
              }`}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <section className=" px-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Latest Insights
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {InsightsArray.slice(0, 3).map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm sm:text-base text-blue-500 mb-2">
                    {insight.category}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {insight.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8"></div>
        </div>
      </section>

      <div className="min-h-screen flex flex-col justify-center items-center py-10">
        <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ">
              Hey There! We’d love to help you.{" "}
              <span role="img" aria-label="smile">
                {" "}
                😃
              </span>
            </h2>
            <p className="text-gray-600 md:text-lg">
              Help us with your pre-requisite so that we can suggest the best
              suitable solutions in accordance with your requirements.
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-left font-bold text-gray-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-left font-bold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email ID"
                  className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                />
              </div>

              <div>
                <label className="block text-left font-bold text-gray-600 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-left font-bold text-gray-600 mb-1">
                  Service
                </label>
                <input
                  type="text"
                  placeholder="Service Required"
                  className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-left font-bold text-gray-600 mb-1">
                  Phone Number
                </label>
                <div className="flex items-center">
                  <span className="mr-2">🇮🇳</span>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-left font-bold text-gray-700 mb-1">
                Any Comments
              </label>
              <textarea
                placeholder="Your comments"
                className="w-full border-b-2 border-gray-300 focus:border-yellow-400 outline-none py-2"
                rows="3"
              ></textarea>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 hover:text-white font-bold py-3 px-8 rounded-full flex items-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-blue-700 text-white py-10 w-full rounded-xl ">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Get in Touch</h2>
          <p className="mb-12">
            Successfully helped enterprises all across the globe to scale.
          </p>
          <div className="flex justify-center gap-16">
            <div className="flex flex-col items-center">
              <img
                src="\assets\icons\phone-icon.svg"
                alt="Email"
                className="w-12 h-12 mb-4 rounded-xl"
              />
              <p>EMAIL</p>
              <p className="font-semibold">sales@ayanshtechnology.com</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="\assets\icons\mail-icon.svg"
                alt="Call"
                className="w-12 h-12 mb-4 rounded-xl"
              />
              <p>CALL</p>
              <p className="font-semibold">+91-XXXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoIPBusinessSolutions;

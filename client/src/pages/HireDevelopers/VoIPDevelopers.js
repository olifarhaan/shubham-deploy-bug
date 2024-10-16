import React, { useState } from "react";
import { VoipDevFaqs } from "../../components/faqData.js";

import Contact from "../../components/Contact.js";
import GetInTouch from "../../components/GetInTouch.js";
import AyanshtechAdvantage from "../../components/AyanshtechAdvantage.js";

const VoIPDevelopers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-15">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Hire VoIP Developers
            </h2>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Voice over IP (VoIP) is a technology that allows people to make
              phone calls over the internet. VoIP is an excellent choice for
              businesses trying to save money on communications because it is
              often significantly less expensive than traditional phone rates.
              With Ayanshtech, create a multi-feature, unified communications hub
              with a VoIP solution for your business. Enable your employees to
              communicate and collaborate on multiple channels. Hire VoIP
              experts from Ayanshtech to derive maximum value out of your business.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-blue-700 text-white py-2 px-4 rounded-full mt-6"
            >
              Get Started
            </button>
          </div>

          <div className="flex justify-center  mb-12 lg:mb-0 mt-5">
            <img
              src="\assets\images\headerSection\hireNodeDev\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Expertise Of Our VoIP Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Leverage the capabilities of our VoIP experts for hire with technical
          competence needed to complete large-scale, multi-tenant VoIP
          development projects.
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
            <p className="text-lg">Develop OpenSIPS as SIPProxy</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Good Knowledge of SIP/SDP/RTP Protocols</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Setup FreeSWITCH in HA mode</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Good Knowledge of FreeSWITCH Modules</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Setup Asterisk Cluster</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Good knowledge of Asterisk AMI & ARI</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Seasoned VoIP Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Ayanshtech is committed to providing our clients with flexible hiring
          models based on their short-term or long-term requirements.
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
                  Hire VoIP experts from Ayanshtech as a team of professional and
                  experienced developers
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
                  Shortlist and interview the listed qualified candidates to
                  choose the right expert for your internal team.
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
                  Our technical consultant will help you choose the best-fit
                  VoIP expert.
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
                  We offer a range of hiring models to fit every budget and
                  requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AyanshtechAdvantage />

      <div className="max-w-3xl mx-auto p-6 py-20 w-full ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {VoipDevFaqs.map((faq, index) => (
          <div key={index} className="border-b ">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left py-4 flex justify-between items-center focus:outline-none ${
                activeIndex === index
                  ? "bg-blue-600 text-white px-5 rounded-2xl"
                  : ""
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

      <div id="contact-section">
        {" "}
        <Contact />
      </div>

      <GetInTouch />
    </div>
  );
};

export default VoIPDevelopers;

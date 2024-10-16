import React, { useState } from "react";
import { MernDevFaqs } from "../../components/faqData.js";

import Contact from "../../components/Contact.js";
import GetInTouch from "../../components/GetInTouch.js";
import AyanshtechAdvantage from "../../components/AyanshtechAdvantage.js";

const MernDevelopers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Hire Mern Developers
            </h2>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              MERN (MongoDB, Express, React, and Node) technologies are used to
              build truly hybrid and cross-functional applications. These
              applications can be used on all platforms – both web and mobile.
              Hire MERN developers from Ayanshtech to create full-fledged
              applications that reach a broader set of audiences with
              intelligent UI/UX.
              <br />
              <br />
              MERN developers have extensive experience and knowledge of working
              with related javascript frameworks. They understand the 3-tier
              architecture requirements and create stunning and
              performance-driven applications. Ayanshtech provides support to all
              types of industries with their MERN developers. Build your
              business with the requisite technological support from us now if
              you hire dedicated mern developers from Ayanshtech.
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
              src="\assets\images\headerSection\hireMernDev\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Expertise Of Our MERN Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Build truly functional and deployable applications with the best MERN
          Developers. Hire MERN developers from Ayanshtech to get the best
          applications on board.
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
            <p className="text-lg">Node.js knowledge</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">React.js knowledge</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Perfect web applications</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Efficient codes in less time</p>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Solutions to your problem</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Attention to Detail</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Express.js</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">MongoDB know-how</p>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-14 h-14"
            />
            <p className="text-lg">Front End development</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Seasoned MERN Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Hire MERN developers from Ayanshtech to get full-stack knowledge of MERN
          technology, more innovative applications, and a better time to market.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="\assets\images\headerSection\hireMernDev\img2.png"
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
                  User-friendly, interactive web and mobile applications with
                  MERN expertise
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
                  Scalable and cost-effective solutions for apps that run
                  smoothly across platforms
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
                  Plug & play approach for faster app development time
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
                  Creation of native apps which are robust and secure with
                  amazing user experience
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
        {MernDevFaqs.map((faq, index) => (
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

export default MernDevelopers;

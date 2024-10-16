import React from "react";
import { useState } from "react";
import { ConsultancyAndDiscoveryFaqs } from "../components/faqData.js";


const ConsultancyAndDiscovery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20">
      <div className="bg-white rounded-lg p-10 py-20 max-w-5xl text-center mb-20">
        <h1 className="sm:text-3xl md:text4xl lg:text-5xl font-bold mb-4">
          Unlock Strategies of Success With our Consultancy & Discovery Model
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Transform your project with specialized consultation and
          data-empowered software solutions
        </p>
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="mt-20 mb-10 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Let's Begin
        </button>
      </div>

      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          <div className="flex justify-center lg:w-1/4 mb-12 lg:mb-0">
            <img
              src="\assets\images\consultancyDiscovery/Frame-1.png"
              alt="Consultancy"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              Road To Your Dream Software Solution
            </h2>
            <div className="sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-4 ">
              {" "}
              Get sustainable, custom VoIP solutions designed with your future
              in mind
            </div>
            <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
              Project discovery is pivotal in the journey to a successful
              solution. It serves as the backbone that guides each step from
              inception and planning to execution, monitoring, and finalization.
              Our consultative approach in the discovery phase ensures we
              capture your specific needs right at the outset.
              <br />
              <br />
              This front-loaded diligence allows our project managers to deploy
              specialized teams early on, providing effective solutions to
              challenges that may arise throughout the project. With
              client-approved requirements, the risk of unexpected deviations
              diminishes significantly.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16 mt-20 justify-items-center">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Building Stellar Solutions
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-7xl mx-auto ">
          Our team of skilled developers constructs software solution
          fine-tuned to your business objectives, facilitating faster
          time-to-market.
        </p>

        <div className=" py-10 flex justify-center">
          <img
            src="/assets/images/BuildingStellarGraph.svg"
            alt="Building Stellar graph"
            className=" sm:w-3/4 md:w-2/3 lg:w-4/5 justify-center"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl bg-blue-800 text-white py-8 px-4 rounded-2xl mt-10 mx-auto ">
        <div className=" mx-auto text-center flex justify-center md:justify-between items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl  mb-2 px-10">
            Propel Your Business to New Heights!
          </h2>
          <button className="bg-green-500 px-4 py-2 ml-6 rounded-full ">
            Get Started
          </button>
        </div>
      </div>

      <div className="bg-white ">
        <div className="bg-white">
          <div className="text-center mt-10 mb-4 py-20">
            <h1 className="font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-6xl mb-4">
              Ayanshtech Tech-stack
            </h1>
            <p className="text-gray-800 justify-center sm:text-base md:text-xl lg:text-xl px-5 max-w-6xl">
              We offer a comprehensive technology stack to address various
              real-time communications solutions, including VoIP Solutions and
              app development needs.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="overflow-hidden max-w-7xl">
              <div className="flex animate-scroll gap-6">
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/anjularJs.png"
                    alt="Angular Js"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/go.png"
                    alt="Go"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/laravel.png"
                    alt="Laravel"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/mern.png"
                    alt="Mern Stack"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/php.png"
                    alt="PHP"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/python.png"
                    alt="Python"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
                <div className="flex-shrink-0">
                  <img
                    src="/assets/images/techStack/reactJs.png"
                    alt="React JS"
                    className="w-40 sm:w-40 md:w-48 lg:w-60 h-32 sm:h-32 md:h-40 lg:h-50 mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-2 mt-10">
        <h2 className="sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800">
          Value Driven Solutions
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Our meticulous planning ensures not just project success but also
          helps build a loyal clientele. Gain a competitive edge with our
          well-orchestrated offerings!
        </p>
      </div>

      <div className="min-h-screen bg-white p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src="\assets\images\consultancyDiscovery\Frame-1.png"
              alt="Laptop with graph"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <img
                  src="\assets\icons\consultancyDiscovery\1.svg"
                  alt="icon"
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="font-bold text-lg">StreamLined Operations</h1>
                  <p className="text-base">
                    Reduce costs by delivering bug-free and seamless solutions
                    from the initial release.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="\assets\icons\consultancyDiscovery\2.svg"
                  alt="icon"
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="font-bold text-lg">Future-Ready Solutions:</h1>
                  <p className="text-base">
                    Keep your VoIP and other software solutions adaptable to
                    evolving business landscapes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="\assets\icons\consultancyDiscovery\3.svg"
                  alt="icon"
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="font-bold text-lg">Custom VoIP Solution:</h1>
                  <p className="text-base">
                    Leverage our expertise in open-source telephony for custom
                    solutions that align with your unique requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="\assets\icons\consultancyDiscovery\4.svg"
                  alt="icon"
                  className="w-10 h-10"
                />
                <div>
                  <h1 className="font-bold text-lg">
                    Flexible Developer Resources:
                  </h1>
                  <p className="text-base">
                    Quickly augment your tech teams across various technologies
                    with our on-demand developer services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6 py-20 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {ConsultancyAndDiscoveryFaqs.map((faq, index) => (
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

      <div className="min-h-screen flex flex-col justify-center items-center py-10">
        <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
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

            {/* Comments */}
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

            {/* Submit Button */}
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

export default ConsultancyAndDiscovery;

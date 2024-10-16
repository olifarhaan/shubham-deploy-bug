import React from "react";
import { useState } from "react";
import { devopsConsultingFaqs } from "../components/faqData.js";
import VoipSolContact from "../components/VoipSolContact.js";

const DevopsServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" flex flex-col items-center justify-center py-10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-16 py-8 bg-white min-h-screen">
        <div className="md:w-2/3 space-y-6 px-5">
          <h1 className="sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            DevOps Consulting Services
          </h1>
          <p className="text-gray-700 text-base lg:text-xl">
            Integrate, automate, amplify, and modernize software development and
            deployment processes.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            We offer DevOps solutions that shorten the systems development life
            cycle while delivering high-quality software. Our mission is to
            deploy the best solutions in hybrid and multi-cloud environments
            with containerization, orchestration, virtualization, server
            support, and security.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            Ayanshtech brings the dev and ops teams together to work cohesively.
            Our releases are simulated in a production-like environment where
            the ops team finds the gaps in the expected solution and sends them
            to the dev team for resolution. The deployment process is done by
            CI/CD, where a repository of code is maintained in Git by developers
            to stay abreast with cutting-edge technologies.
          </p>
          <p className="text-gray-700 text-base lg:text-xl">
            We ensure we deliver the best in the industry!
          </p>
        </div>

        <VoipSolContact />
        
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Benefits of DevOps Consulting Services
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Our DevOps consulting team helps you bridge business gaps and develop
          optimum solutions.{" "}
        </p>
      </div>

      <div className="bg-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Quicker feature delivery</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Better infrastructure</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Reduced development time</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Reduced errors</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Hassle-free deployment</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Increased company performance</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Automated workflows</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Core Features of DevOps Solutions
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          As a DevOps services company, we emphasize continuous collaboration
          and equal responsibility-sharing between development and operational
          teams.
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
                className="w-10 h-10"
              />

              <div>
                <h1 className="font-bold text-lg">Strategy</h1>
                <p className="text-lg">
                  A phased approach to access and transform the existing IT
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h1 className="font-bold text-lg">End-to-end Implementation</h1>
                <p className="text-lg">
                  Agile implementation to accelerate business workflow
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h1 className="font-bold text-lg">
                  Integration & Cloud Management
                </h1>
                <p className="text-lg">
                  Easy integration of DevOps automation using tools- Jenkins,
                  TeamCity, and CircleCI
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h1 className="font-bold text-lg">Testing & Monitoring</h1>
                <p className="text-lg">
                  Dynamic environment to collect and validate the functionality
                  of tasks to quickly identify and resolve issues. Tools-Nagios,
                  Prometheus
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h1 className="font-bold text-lg">Managed DevOps Services</h1>
                <p className="text-lg">Complete assistance in all phases</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="bg-white">
          <div className="text-center mt-10 mb-4 py-20">
            <h1 className="font-bold text-gray-800 mb-2 sm:text-3xl md:text-4xl lg:text-5xl">
              Our DevOps Solution Technology Stack
            </h1>
            <p className="text-gray-800 justify-center sm:text-base md:text-xl lg:text-xl px-5 ">
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

      <div className=" justify-center items-center text-center py-10 space-y-10">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose Ayanshtech
        </h2>
        <p className="sm:text-base md:text-base lg:text-lg text-gray-700 px-6 max-w-7xl">
          As a DevOps services company, we offer advanced DevOps technologies,
          such as Git, Docker, Jenkins, and Kubernetes, to transform businesses.
          At Ayanshtech, we implement next-generation DevOps solutions that are
          agile, compliant, and secure. Our state-of-the-art DevOps services
          help companies to achieve faster time-to-market, higher-quality
          software, and greater team collaboration. We bridge business gaps and
          develop optimum solutions.
          <br />
          <br />
          Our managed DevOps services are Highly efficient and cost-effective
          solutions with 24/7 maintenance and support service to ensure a better
          customer experience.
        </p>
      </div>

      <div className="max-w-3xl mx-auto p-6 py-20 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {devopsConsultingFaqs.map((faq, index) => (
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

export default DevopsServices;

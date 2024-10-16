import React, { useState } from "react";
import { AWSMigrationEngineersFaqs } from "../../components/faqData.js";

import Contact from "../../components/Contact.js";
import GetInTouch from "../../components/GetInTouch.js";
import AyanshtechAdvantage from "../../components/AyanshtechAdvantage.js";

const AWSMigrationEngineers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-15">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Hire AWS Migration Engineers
            </h2>
            <p className="sm:text-base md:text-lg lg:text-lg  leading-relaxed mb-3">
              Amazon Web Services is a collection of computing services that
              work together to build Amazon's cloud computing platform. AWS is
              known for offering enterprises a safe and scalable development
              environment to implement digital transformation. Large-scale
              enterprise applications can now be deployed thanks to it. With
              Ayanshtech's AWS developers, you'll never worry about setting up,
              maintaining, or improving your Web Applications' cloud
              infrastructure again.
            </p>
            <button className="bg-blue-700 text-white py-2 px-4 rounded-full mt-6">
              Get Started
            </button>
          </div>

          <div className="flex justify-center  mb-12 lg:mb-0 mt-5">
            <img
              src="\assets\images\headerSection\hireAWSMigrationEng\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Expertise of Our AWS Migration Engineers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          When it comes to hiring AWS migration certified engineers, we have a
          wide range of capabilities and capacities.
        </p>
      </div>

      <div className="bg-white p-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="flex items-center space-x-4">
      <img
        src="/assets/icons/consultancyDiscovery/1.svg"
        alt="icon"
        className="w-14 h-14"
      />
      <p className="text-lg">AWS Infrastructure Management</p>
    </div>

    <div className="flex items-center space-x-4">
      <img
        src="/assets/icons/consultancyDiscovery/2.svg"
        alt="icon"
        className="w-14 h-14"
      />
      <p className="text-lg">AWS Architect Experts</p>
    </div>

    <div className="flex items-center space-x-4">
      <img
        src="/assets/icons/consultancyDiscovery/3.svg"
        alt="icon"
        className="w-14 h-14"
      />
      <p className="text-lg">AWS Cloud Practitioner</p>
    </div>

    <div className="flex items-center space-x-4">
      <img
        src="/assets/icons/consultancyDiscovery/4.svg"
        alt="icon"
        className="w-14 h-14"
      />
      <p className="text-lg">AWS Certified Developers</p>
    </div>

    <div className="flex items-center space-x-4">
      <img
        src="/assets/icons/consultancyDiscovery/1.svg"
        alt="icon"
        className="w-14 h-14"
      />
      <p className="text-lg">Experts in AWS Data Migration</p>
    </div>
  </div>
</div>


      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Seasoned AWS Certified Engineers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Hire AWS certified engineers from Ayanshtech and kickstart your
          business’s journey into cloud systems with experts.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="\assets\images\headerSection\hireAWSMigrationEng\img2.png"
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
                  Architect, build, and maintain cloud environments that are
                  cost-efficient and scalable.
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
                  Our Asterisk programmers have expertise in developing single
                  tenant and multi-tenant Asterisk Solutions
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
                  Our Asterisk developers have also experience in helping
                  businesses in leveraging the complete benefits of open source
                  solutions
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
                  Our team of Asterisk developers has benefited many businesses
                  with their hands-on skills in Asterisk customization and
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <AyanshtechAdvantage/>

      <div className="max-w-3xl mx-auto p-6 py-20 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {AWSMigrationEngineersFaqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left py-4 flex justify-between items-center focus:outline-none ${
                activeIndex === index ? "bg-blue-600 text-white px-5 rounded-2xl" : ""
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

      <Contact />

      <GetInTouch />
    </div>
  );
};

export default AWSMigrationEngineers;

import React, {useState} from "react";
import Contact from "../../components/Contact.js";
import { hireAndroidFaqs } from "../../components/faqData.js";
import GetInTouch from "../../components/GetInTouch.js";
import AyanshtechAdvantage from "../../components/AyanshtechAdvantage.js";

const AndroidDevelopers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20">
      <div className="bg-white py-5 px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 ml-10 mt-10">
          <div className="lg:w-3/4 text-center lg:text-left ">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Hire Android Developers
            </h2>
            <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
              Hire Android programmers who are highly skilled and experienced to
              bring your Android app ideas to life. With a team of professional
              Android developers for hire, Ayanshtech is one of the most trusted
              outsourcing providers of the best Android developers offshore.
              Android is amongst best platforms to build a mobile app for your
              business/brand as it is an open-source platform allowing UI
              customization and supports cloud storage. We have a team of
              hard-working and experienced Android developers who are highly
              adaptable, making them a great asset to your development team.
              <br />
              <br />
              You can always and anytime prioritize expert android application
              developer for hire from Ayanshtech to newly usher your business in a
              lucrative direction.
            </p>
            <button className="bg-blue-700 text-white py-2 px-4 rounded-full mt-6">
            Get Started
             </button>
          </div>
          <div className="flex justify-center mt-5 mb-12 lg:mb-0">
            <img
              src="\assets\images\headerSection\hireAndroidDev\img1.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Expertise Of Our Android Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Hire Android developers from Ayanshtech with the expertise to create
          custom mobile solutions for your brand.
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
            <p className="text-lg">
              Android App Prototyping, Wireframes, and Mockups
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">UI/UX Designing for Android Apps</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/3.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Custom Android App Development</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/4.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Android App Testing and Cloud Integration</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/1.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Expert Coding and Debugging</p>
          </div>

          <div className="flex items-start space-x-4">
            <img
              src="/assets/icons/consultancyDiscovery/2.svg"
              alt="icon"
              className="w-10 h-10"
            />
            <p className="text-lg">Android App Upgrade and Maintenance</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Seasoned Android Developers
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          Hire professional Android App Developers from Ayanshtech to bring your
          Android app ideas to life.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="\assets\images\headerSection\hireAndroidDev\img2.png"
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
                <p className="text-lg">
                  Choose from a team of highly skilled Android developers for
                  hire
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
                <p className="text-lg">
                  You will get a daily report on your working hours or as per
                  your requirement
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
                <p className="text-lg">
                  Our consultant will help you shortlist and interview Android
                  programmer for hire to find the right expert for your project
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
                <p className="text-lg">
                  With our various hiring models, you can hire as per your
                  development requirement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AyanshtechAdvantage /> 

      <div className="max-w-3xl mx-auto p-6 py-20 w-full">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          FAQs
        </h2>
        {hireAndroidFaqs.map((faq, index) => (
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

      <GetInTouch/>
    </div>
  );
};

export default AndroidDevelopers;

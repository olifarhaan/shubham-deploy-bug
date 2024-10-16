import React from "react";

const QAServices = () => {
  const steps = [
    { icon: "/assets/icons/qa/qa1.svg", title: "Analyze requirements" },
    {
      icon: "/assets/icons/qa/qa2.svg",
      title: "Run test case and Report bugs",
    },
    { icon: "/assets/icons/qa/qa3.svg", title: "Retest fixed bugs" },
    { icon: "/assets/icons/qa/qa4.svg", title: "Regression testing" },
    { icon: "/assets/icons/qa/qa5.svg", title: "Generate report" },
  ];

  const testings = [
    { icon: "/assets/icons/qa/service1.svg", title: "Analyze requirements" },
    {
      icon: "/assets/icons/qa/service2.png",
      title: "Write Test plan and Test case",
    },
    {
      icon: "/assets/icons/qa/service3.svg",
      title: "Run test case and Report bugs",
    },
    { icon: "/assets/icons/qa/service4.svg", title: "Retest fixed bugs" },
    { icon: "/assets/icons/qa/service5.svg", title: "Regression testing" },
    { icon: "/assets/icons/qa/service6.svg", title: "Generate report" },
    { icon: "/assets/icons/qa/service7.svg", title: "Analyze requirements" },
    {
      icon: "/assets/icons/qa/service8.svg",
      title: "Write Test plan and Test case",
    },
    {
      icon: "/assets/icons/qa/service9.svg",
      title: "Run test case and Report bugs",
    },
    { icon: "/assets/icons/qa/service11.svg", title: "Retest fixed bugs" },
    { icon: "/assets/icons/qa/service11.svg", title: "Regression testing" },
    { icon: "/assets/icons/qa/service12.svg", title: "Generate report" },
    { icon: "/assets/icons/qa/service13.svg", title: "Analyze requirements" },
    {
      icon: "/assets/icons/qa/service14.svg",
      title: "Write Test plan and Test case",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20">
      <div className="bg-white rounded-lg p-10 py-20 max-w-5xl text-center mb-20">
        <h1 className="sm:text-3xl md:text4xl lg:text-5xl font-bold mb-4">
          QA Solutions
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Unlock exceptional excellence with our cutting-edge QA services. Dive
          into a realm where quality meets precision, ensuring your software
          stands unmatched.
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
              src="\assets\images\qaServices/qa2.png"
              alt="Consultancy"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
              Ensuring Excellence With QA Services
            </h2>
            <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
              In today’s dynamic digital landscape, ensuring top-notch quality
              is paramount. Our QA services go beyond mere checks; they embody
              our commitment to elevate every app and solution to its pinnacle
              of quality. We don’t just meet standards; we set them.
              <br />
              <br />
              With a focus on innovation, we optimize testing processes to
              reduce time and cost, ensuring you get value-driven results
              without compromise. Our QA strategy provides transparent reporting
              and top-tier performance. Every solution we deliver undergoes
              rigorous assessment, aligning with the highest quality
              expectations and bespoke client requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            How QA Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ayanshtech’s team of skilled quality analysts ensures the solution
            is thoroughly tested before delivery to maintain brand reputation
            and credibility.
          </p>
        </div>

        <div className="mt-12 justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="transform transition duration-300 ease-in-out hover:scale-110">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-25 h-20 mb-4 px-10"
                />
              </div>
              <p className="text-center text-gray-700">{step.title}</p>
            </div>
          ))}
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

      <div className="bg-white py-12 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ayanshtech QA Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testing that delivers impeccable quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {testings.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="transform transition duration-300 ease-in-out hover:scale-110">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-25 h-20 mb-4 px-10"
                />
              </div>
              <p className="text-center font-bold">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-5 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Delivering Extra Value
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 font-semibold mt-4 max-w-6xl mx-auto">
          An expert QA team ensures timely product delivery, resource
          optimization, and unmatched quality.
        </p>
      </div>

      <div className="bg-white p-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src="/assets/images/qaServices/qa1.png"
              alt="Laptop with graph"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          {/* Right Section - Two Column Text */}
          <div className=" md:w-1/2 lg:w-3/4 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/1.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <p className="text-base">
                Reduce costs by delivering bug-free and seamless solutions from
                the initial release.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/2.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <p className="text-base">
                Keep your VoIP and other software solutions adaptable to
                evolving business landscapes.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/3.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <p className="text-base">
                Leverage our expertise in open-source telephony for custom
                solutions that align with your unique requirements.
              </p>
            </div>

            <div className="flex items-start space-x-4">
              <img
                src="/assets/icons/consultancyDiscovery/4.svg"
                alt="icon"
                className="w-10 h-10"
              />
              <p className="text-base">
                Quickly augment your tech teams across various technologies with
                our on-demand developer services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center py-10">
        <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
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

export default QAServices;

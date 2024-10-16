import React from "react";

const WebMobileSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 mt-20">
      <div className="bg-white rounded-lg p-10 py-20 max-w-5xl text-center mb-20">
        <h1 className="text-6xl font-bold mb-4">
          Customized Web App Development Services
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          We focus on delivering turnkey web applications that offer an
          immersive experience to clients. Web application development services
          require us to have a comprehensive understanding of the requirements
          to develop and deploy a turnkey solution. As a top web application
          development company we indulge into thorough grasp of expected output
          and work in accordance with that.
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
              src="/assets/images\webMobile.png"
              alt="VoIP Business Solutions"
              className="w-full h-auto sm:w-3/4 md:w-2/3 lg:w-full object-contain"
            />
          </div>

          <div className="lg:w-3/4 text-center lg:text-left">
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Expert Web App Development Company
            </h2>
            <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-3">
              Stand out of the crowd with a bespoke web application designed
              specifically for your business requirements. Since every business
              has its own DNA, external tools might not be the best option to
              integrate into the existing workflow. At Ayanshtech, we offer you
              consulting and development services to avail of custom web app
              development services that facilitate the requirement analysis
              phase, impeccable testing and delivery, and even post-delivery
              support.
              <br />
              <br />
              We develop all kinds of web solutions/software that spikes the
              experience of web consumers. Our pool of deliverables ranges from
              small-scale businesses to enterprises that have been leading the
              industry for decades.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16 mt-20">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Web App Development Services Processes
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Being a leading VoIP Business Provider, Ayanshtech offers an array of
          custom VoIP Solutions to improvise your business communication needs.
        </p>
      </div>
      <img src="/assets/images/webDevProcess.png" alt="development steps" className="max-w-8xl "
      />

      

      <div className="text-center mb-16 mt-10">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Our Contribution
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-16 px-20">
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
              Website Development
            </p>
          </div>
        </div>
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
            <p className="mt-2 px-8 font-bold text-white">Module Development</p>
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
            <p className="mt-2 px-8 font-bold text-white">Plugin Development</p>
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
            <p className="mt-2 px-8 font-bold text-white">
              MVC, MVP and MVVM Design Pattern
            </p>
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
            <p className="mt-2 px-8 font-bold text-white ">API Development</p>
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
            <p className="mt-2 px-8 font-bold text-white">PWA Development</p>
          </div>
        </div>
      </div>


      <div className="bg-white ">
        <div className="bg-white">
          <div className="text-center mt-10 mb-4 py-20">
            <h1 className="font-bold text-gray-800 mb-2 sm:text-3xl md:text-4xl lg:text-6xl">
              Technology Pool
            </h1>
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

      <div className=" bg-blue-800 text-white  py-8 px-40 rounded-2xl mt-20 ">
        <div className="max-w-7xl text-center flex justify-center md:justify-between items-center">
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
          Advantages of Our Web Development Service
        </h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600  mt-4 max-w-6xl mx-auto">
          Ayanshtech ensures that a steady flow of ideas happens at every stage
          restricted only by coding practices and that the stability of the code
          is also checked for our web application development services.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Your vision and suggestions are prioritized at each step.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Multiple tools to cross-check the stability of the code.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Highly flexible working pattern to not restrict your ideas.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="sm:text-base md:text-lg lg:text-xl">
            Professional coding practices meeting industry standards.
          </p>
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

export default WebMobileSolutions;

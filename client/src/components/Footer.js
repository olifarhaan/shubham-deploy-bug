import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-10">
      <div className="container mx-auto flex flex-wrap justify-between px-4">
        
        {/* First Section */}
        <div className="w-full lg:w-1/3 mb-8">
          <p className="text-gray-600 mb-4">
            Since its establishment, Company has been keen to contribute to the
            development of telecommunication solutions internationally by
            always prioritizing client requirements.
          </p>
          <button className="bg-yellow-500 text-white py-3 px-6 rounded-lg flex items-center">
            Let’s Talk
          </button>
        </div>

        {/* Links Section */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-between mb-8">
          {/* About Us */}
          <div className="w-1/2 sm:w-1/3 mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">About Us</h3>
            <ul className="space-y-2">
              <li>Company Overview</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Expos/Conference</li>
              <li>Resources</li>
              <li>Affiliates</li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="w-1/2 sm:w-1/3 mb-4 lg:mb-0">
            <h3 className="text-lg font-bold">Offerings</h3>
            <ul className="space-y-2">
              <li>VoIP</li>
              <li>AI/ML</li>
              <li>Web Design and Development</li>
              <li>Mobile App Development</li>
              <li>DevOPS</li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="w-1/2 sm:w-1/3">
            <h3 className="text-lg font-bold">Technologies</h3>
            <ul className="space-y-2">
              <li>VoIP</li>
              <li>Full Stack Development</li>
              <li>Front End Development</li>
              <li>Mobile Application Development</li>
              <li>RestAPI / MicroServices</li>
              <li>AI/ML</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/3 mb-8">
          <h3 className="text-lg font-bold mb-4">Have Questions?</h3>
          <p>India +91-XXXXXXXXXX</p>
          <p>Canada +1-XXXXXXXXXX</p>
          <p>USA +1-XXXXXXXXXXX</p>
          <p>
            Email Enquiries{" "}
            <a href="mailto:sales@XYZ.com" className="text-blue-500">
              sales@ayanshtechnology.com
            </a>
          </p>
          <p>
            Career Enquiries{" "}
            <a href="mailto:careers@XYZ.com" className="text-blue-500">
              careers@ayanshtechnology.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto flex flex-wrap justify-between px-4 py-4 border-t text-sm text-gray-500">
        <div className="w-full lg:w-2/3 text-left mb-4 lg:mb-0">
          <p>© 2007-2024 @ Ayanshtech Solutions</p>
          <div className="mt-2">
            <a href="#" className="text-blue-500 mr-2">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-500">
              Terms of Use
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center space-x-4">
          <p>Follow us on:</p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

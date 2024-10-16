import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleMouseEnter = (dropdownId) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(dropdownId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      closeMobileMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between p-6 lg:px-4" aria-label="Global">
          <a href="/" className="text-2xl font-bold mr-20">
            <div className="flex items-center space-x-2">
              <img src="/assets/logo.png" alt="Logo" className="h-12 w-12" />
              <div>
                <h1 className="text-lg font-bold">Ayanshtech Solutions</h1>
                <p className="sm:hidden text-sm text-blue-700 font-bold">
                  A Place of Innovation
                </p>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-12 mr-20">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("offerings")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900 hover:text-blue-700"
              >
                Offerings
              </button>
              {openDropdown === "offerings" && (
                <div className="absolute  left-[12vw] -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-5xl px-10 ml-24 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-blue-500">
                  {/* Dropdown content for Offerings */}
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">VoIP</h2>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/freeswitch"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="VoIP Icon"
                              className="h-14 w-14 mr-2"
                            />
                            FreeSWITCH
                          </a>
                        </li>
                        <li>
                          <a
                            href="/webrtc"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="VoIP Icon"
                              className="h-14 w-14 mr-2"
                            />
                            WebRTC
                          </a>
                        </li>
                        <li>
                          <a
                            href="/kamailio"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="VoIP Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Kamailio
                          </a>
                        </li>
                        <li>
                          <a
                            href="/opensips"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="VoIP Icon"
                              className="h-14 w-14 mr-2"
                            />
                            OpenSIPS
                          </a>
                        </li>
                        <li>
                          <a
                            href="/asterisk"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="VoIP Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Asterisk
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">DevOps</h2>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/cicd-pipelines"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="DevOps Icon"
                              className="h-14 w-14 mr-2"
                            />
                            CI/CD Pipelines
                          </a>
                        </li>

                        <li>
                          <a
                            href="/cloud-services"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="DevOps Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Cloud Services
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">
                        QA Services
                      </h2>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/voip-testing"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="QA Icon"
                              className="h-14 w-14 mr-2"
                            />
                            VoIP Testing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/qa-automation"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="QA Icon"
                              className="h-14 w-14 mr-2"
                            />
                            QA Automation
                          </a>
                        </li>
                        <li>
                          <a
                            href="/api-testing"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="QA Icon"
                              className="h-14 w-14 mr-2"
                            />
                            API Testing
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Web+Mobile</h2>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/web-mobile-solutions"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Web+Mobile Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Web Design and Development
                          </a>
                        </li>
                        <li>
                          <a
                            href="/mobile-application-development"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Web+Mobile Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Mobile Application Development
                          </a>
                        </li>
                      </ul>
                      <h2 className="text-lg font-semibold mt-4 mb-2">AI/ML</h2>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/sentiment-analysis"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="AI/ML Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Sentiment Analysis
                          </a>
                        </li>
                        <li>
                          <a
                            href="/voice-assistant"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="AI/ML Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Voice Assistant
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <a href="https://example.com/your-image-link">
                        <img
                          src="\assets\images\webMobile.png"
                          alt="Example Image"
                          className="  w-[120px] h-auto md:w-[150px] lg:w-[200px] rounded-lg shadow-md ml-10"
                        />
                      </a>
                    </div>
                  </div>
                  <hr className="border-t-2 border-gray-300" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 mb-4 text-center">
                    <div>
                      <h4 className="text-lg font-semibold">India</h4>
                      <p className="text-pink-600">+91-XXXXXXXXXX</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">USA</h4>
                      <p className="text-pink-600">+1-XXX-XXX-XXXX</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email Enquiries</h4>
                      <p className="text-pink-600">sales@Ayanshtech.com</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        Career Enquiries
                      </h4>
                      <p className="text-pink-600">careers@Ayanshtech.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("voip")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900 hover:text-blue-700"
              >
                VoIP Solutions
              </button>
              {openDropdown === "voip" && (
                <div className="absolute left-full -translate-x-1/2 top-full z-10 mt-4 w-screen max-w-5xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-blue-500">
                  {/* Dropdown content for VoIP Solutions */}
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 ml-6">
                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/hosted-pbx-solution"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Hosted PBX Solution (Multi Tenant IP PBX)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/unified-communication-solution"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Unified Communication Solution (UCaaS)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/dynamic-ivr-solution"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Dynamic IVR Solution
                          </a>
                        </li>
                        <li>
                          <a
                            href="/sms-broadcasting-system"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Voice/SMS Broadcasting System
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/enterprise-voip-solution"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Enterprise VoIP Solutions
                          </a>
                        </li>
                        <li>
                          <a
                            href="/contact-center-solution"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Contact Center/ Call Center
                          </a>
                        </li>
                        <li>
                          <a
                            href="/audio-video-conference"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Audio/Video Conference Solution
                          </a>
                        </li>
                        <li>
                          <a
                            href="/foip-telepresence"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Fax Over IP (FoIP) Telepresence
                          </a>
                        </li>
                        <li>
                          <a
                            href="/business-phone-system"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Business Phone System
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/communication-api"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Communication APIs
                          </a>
                        </li>
                        <li>
                          <a
                            href="/software-defined-telecom"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Software Defined Telecom
                          </a>
                        </li>
                        <li>
                          <a
                            href="/voip-billing-system"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            VoIP Billing System
                          </a>
                        </li>
                        <li>
                          <a
                            href="/small-business-voip-solution"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Small Business VoIP Solution
                          </a>
                        </li>
                        <li>
                          <a
                            href="/enterprise-contact-center"
                            className="flex items-center  hover:gradient-text-hover  text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Logo"
                              className="w-14 h-14 mr-2"
                            />
                            Enterprise Contact Center
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="flex justify-center items-center">
                      <a href="/blogs">
                        <img
                          src="\assets\images\webMobile.png"
                          alt="Example Image"
                          className="w-[120px] h-auto md:w-[150px] lg:w-[200px] rounded-lg shadow-md"
                        />
                      </a>
                    </div>
                  </div>

                  <hr className="border-t-2 border-gray-300" />
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 mb-4 text-center">
                    <div>
                      <h4 className="text-lg font-semibold">India</h4>
                      <p className="text-pink-600">+91-XXXXXXXXXX</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">USA</h4>
                      <p className="text-pink-600">+1-XXX-XXX-XXXX</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email Enquiries</h4>
                      <p className="text-pink-600">sales@Ayanshtech.com</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        Career Enquiries
                      </h4>
                      <p className="text-pink-600">careers@Ayanshtech.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("hire")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900 hover:text-blue-700"
              >
                Hire Developers
              </button>
              {openDropdown === "hire" && (
                <div className="absolute -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5  border-t-4 border-blue-500">
                  {/* Dropdown content for Hire Developers */}
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/hire-android-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Android Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Android Developers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-freeswitch-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="FreeSWITCH Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            FreeSWITCH Developers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-laravel-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Laravel Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Laravel Developers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-reactnative-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="React Native Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            React Native Developers
                          </a>
                        </li>

                        <li>
                          <a
                            href="/hire-webrtc-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="WebRTC Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            WebRTC Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-mern-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="MERN Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            MERN Developers
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/hire-asterisk-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Asterisk Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Asterisk Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-kamailio-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Kamailio Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Kamailio Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-node-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Node.js Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Node.js Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-reactjs-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="ReactJS Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            ReactJS Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-qa-engineers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="QA Engineer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            QA Engineers
                          </a>
                        </li>

                        <li>
                          <a
                            href="/hire-python-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Python Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Python Developer
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/hire-ios-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="iOS Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            iOS Developers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-opensips-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="OpenSIPs Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            OpenSIPs Developers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-voip-developers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="VoIP Developer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            VoIP Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-support-engineers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="Support Engineer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            Support Engineers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-l2l3support-engineers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="L2/L3 Support Engineer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            L2/L3 Support Engineers
                          </a>
                        </li> 
                      </ul>
                    </div>
                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/hire-aws-engineers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="AWS Certified Engineer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            AWS Certified Engineers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-aws-migration-engineers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="AWS Migration Engineer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            AWS Migration Engineers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/hire-devops-engineers"
                            className="flex items-center  hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="\assets\icons\AyanshtechAdvantage\icon3.png"
                              alt="DevOps Engineer Icon"
                              className="h-14 w-14 mr-2"
                            />
                            DevOps Engineer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="border-t-2 border-gray-300" />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 text-center mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">India</h4>
                      <p className="text-pink-600">+91-XXXXXXXXXX</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">USA</h4>
                      <p className="text-pink-600">+1-XXX-XXX-XXXX</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Email Enquiries</h4>
                      <p className="text-pink-600">sales@Ayanshtech.com</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        Career Enquiries
                      </h4>
                      <p className="text-pink-600">careers@Ayanshtech.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("approach")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900 hover:text-blue-700"
              >
                Approach
              </button>
              {openDropdown === "approach" && (
                <div className="absolute left-1/2 -translate-x-2/3 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 border-t-4 border-blue-500">
                  {/* Dropdown content for Approach */}

                  <div className="p-4 grid grid-cols-2 gap-4 ml-6">
                    <div>
                      <ul className="text-left space-y-2">
                        <li>
                          <a
                            href="/engagement-synergy-model"
                            className="flex items-center hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="/assets/icons/AyanshtechAdvantage/icon3.png"
                              alt="Logo"
                              className="h-14 w-14 mr-2"
                            />
                            Engagement & Synergy Model
                          </a>
                        </li>
                        <li>
                          <a
                            href="/project-development-model"
                            className="flex items-center hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="/assets/icons/AyanshtechAdvantage/icon3.png"
                              alt="Logo"
                              className="h-14 w-14 mr-2"
                            />
                            Project & Development Model
                          </a>
                        </li>
                        <li>
                          <a
                            href="/value-proposition"
                            className="flex items-center hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="/assets/icons/AyanshtechAdvantage/icon3.png"
                              alt="Logo"
                              className="h-14 w-14 mr-2"
                            />
                            Value Proposition
                          </a>
                        </li>
                        <li>
                          <a
                            href="/consultancy-discovery-model"
                            className="flex items-center hover:gradient-text-hover text-lg"
                          >
                            <img
                              src="/assets/icons/AyanshtechAdvantage/icon3.png"
                              alt="Logo"
                              className="h-14 w-14 mr-2"
                            />
                            Consultancy & Discovery Model
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex justify-center items-center">
                      <a href="/blogs">
                        <img
                          src="\assets\images\webMobile.png"
                          alt="Example Image"
                          className="w-[120px] h-auto md:w-[150px] lg:w-[200px] rounded-lg shadow-md"
                        />
                      </a>
                    </div>
                  </div>
                  <hr className="border-t-2 border-gray-300" />
                  <div className="grid grid-cols-2 gap-8 mt-6 text-center mb-5">
                    <div>
                      <h4 className="text-lg font-semibold">India</h4>
                      <p className="text-pink-600">+91-XXXXXXXXXX</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">Email Enquiries</h4>
                      <p className="text-pink-600">sales@Ayanshtech.com</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <a
                href="/contactus"
                className="flex items-center gap-x-1 text-l font-bold leading-6 text-gray-900 hover:text-blue-700"
              >
                <button type="button">About</button>
              </a>
            </div>
          </div>

          {/* Contact Us Button and Hamburger Menu */}
          <div className="flex items-center">
            <Link
              to="/contactus"
              className="hidden lg:inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 sm:text-xs rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
            <div className="lg:hidden ml-4">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-900 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-14 h-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 p-4 max-h-full overflow-y-auto">
            <div
              onMouseEnter={() => handleMouseEnter("offerings")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-bold leading-6 text-gray-900 hover:text-blue-700">
                Offerings
              </button>
              {openDropdown === "offerings" && (
                <div className="p-4 rounded-lg">
                  {/* Dropdown content for Offerings */}

                  <ul className="text-left space-y-2">
                    <li>
                      <a
                        href="/freeswitch"
                        class="text-black hover:text-blue-700"
                      >
                        FreeSWITCH
                      </a>
                    </li>
                    <li>
                      <a href="/webrtc" class="text-black hover:text-blue-700">
                        WebRTC
                      </a>
                    </li>
                    <li>
                      <a
                        href="/kamailio"
                        class="text-black hover:text-blue-700"
                      >
                        Kamailio
                      </a>
                    </li>
                    <li>
                      <a
                        href="/opensips"
                        class="text-black hover:text-blue-700"
                      >
                        OpenSIPS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/asterisk"
                        class="text-black hover:text-blue-700"
                      >
                        Asterisk
                      </a>
                    </li>
                    <li>
                      <a
                        href="/voip-testing"
                        class="text-black hover:text-blue-700"
                      >
                        VoIP Testing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/qa-automation"
                        class="text-black hover:text-blue-700"
                      >
                        QA Automation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/api-testing"
                        class="text-black hover:text-blue-700"
                      >
                        API Testing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web-mobile-solutions"
                        class="text-black hover:text-blue-700"
                      >
                        Web Design and Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/mobile-application-development"
                        class="text-black hover:text-blue-700"
                      >
                        Mobile Application Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sentiment-analysis"
                        class="text-black hover:text-blue-700"
                      >
                        Sentiment Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="/voice-assistant"
                        class="text-black hover:text-blue-700"
                      >
                        Voice Assistant
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("voip-solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-bold leading-6 text-gray-900 hover:text-blue-700">
                VoIP Solutions
              </button>
              {openDropdown === "voip-solutions" && (
                <div className="p-4 rounded-lg">
                  {/* Dropdown content for VoIP Solutions */}
                  <ul className="text-left space-y-2">
                    <li>
                      <a
                        href="/hosted-pbx-solution"
                        className="text-black hover:text-blue-700"
                      >
                        Hosted PBX Solution (Multi Tenant IP PBX)
                      </a>
                    </li>

                    <li>
                      <a
                        href="/unified-communication-solution"
                        className="text-black hover:text-blue-700"
                      >
                        Unified Communication Solution (UCaaS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="/dynamic-ivr-solution"
                        className="text-black hover:text-blue-700"
                      >
                        Dynamic IVR Solution
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sms-broadcasting-system"
                        className="text-black hover:text-blue-700"
                      >
                        Voice/SMS Broadcasting System
                      </a>
                    </li>

                    <li>
                      <a
                        href="/enterprise-voip-solution"
                        className="text-black hover:text-blue-700"
                      >
                        Enterprise VoIP Solutions
                      </a>
                    </li>

                    <li>
                      <a
                        href="/contact-center-solution"
                        className="text-black hover:text-blue-700"
                      >
                        Contact Center / Call Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="/audio-video-conference"
                        className="text-black hover:text-blue-700"
                      >
                        Audio/Video Conference Solution
                      </a>
                    </li>
                    <li>
                      <a
                        href="/foip-telepresence"
                        className="text-black hover:text-blue-700"
                      >
                        Fax Over IP (FoIP) Telepresence
                      </a>
                    </li>
                    <li>
                      <a
                        href="/business-phone-system"
                        className="text-black hover:text-blue-700"
                      >
                        Business Phone System
                      </a>
                    </li>
                    <li>
                      <a
                        href="/communication-api"
                        className="text-black hover:text-blue-700"
                      >
                        Communication APIs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/software-defined-telecom"
                        className="text-black hover:text-blue-700"
                      >
                        Software Defined Telecom
                      </a>
                    </li>
                    <li>
                      <a
                        href="/voip-billing-system"
                        className="text-black hover:text-blue-700"
                      >
                        VoIP Billing System
                      </a>
                    </li>
                    <li>
                      <a
                        href="/small-business-voip-solution"
                        className="text-black hover:text-blue-700"
                      >
                        Small Business VoIP Solution
                      </a>
                    </li>
                    <li>
                      <a
                        href="/enterprise-contact-center"
                        className="text-black hover:text-blue-700"
                      >
                        Enterprise Contact Center
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("hire-developers")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-bold leading-6 text-gray-900 hover:text-blue-700">
                Hire Developers
              </button>
              {openDropdown === "hire-developers" && (
                <div className="p-4  rounded-lg">
                  {/* Dropdown content for Offerings */}
                  <ul class="text-left space-y-2">
                    <li>
                      <a
                        href="/hire-android-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Android Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-freeswitch-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Freeswitch Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-laravel-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Laravel Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-reactnative-developers"
                        class="text-black hover:text-blue-700"
                      >
                        React Native Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-aws-migration-engineers"
                        class="text-black hover:text-blue-700"
                      >
                        AWS Migration Engineers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-webrtc-developers"
                        class="text-black hover:text-blue-700"
                      >
                        WebRTC Developer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-mern-developers"
                        class="text-black hover:text-blue-700"
                      >
                        MERN Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-asterisk-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Asterisk Developer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-kamailio-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Kamailio Developer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-node-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Node.js Developer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-react-developers"
                        class="text-black hover:text-blue-700"
                      >
                        ReactJS Developer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-qa-engineers"
                        class="text-black hover:text-blue-700"
                      >
                        QA Engineers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hirel2l3-support-engineers"
                        class="text-black hover:text-blue-700"
                      >
                        L2/L3 Support Engineers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-python-developers"
                        class="text-black hover:text-blue-700"
                      >
                        Python Developer
                      </a>
                    </li>

                    <li>
                      <a
                        href="/hire-ios-developers"
                        class="text-black hover:text-blue-700"
                      >
                        iOS Developers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-opensips-developers"
                        class="text-black hover:text-blue-700"
                      >
                        OpenSIPs Developers
                      </a>
                    </li>

                    <li>
                      <a
                        href="/hire-voip-developers"
                        class="text-black hover:text-blue-700"
                      >
                        VoIP Developer
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-support-engineers"
                        class="text-black hover:text-blue-700"
                      >
                        Support Engineers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-aws-certified-engineers"
                        class="text-black hover:text-blue-700"
                      >
                        AWS Certified Engineers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hire-devops-engineer"
                        class="text-black hover:text-blue-700"
                      >
                        DevOps Engineer
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("approach")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-bold leading-6 text-gray-900 hover:text-blue-700">
                Approach
              </button>
              {openDropdown === "approach" && (
                <div className="p-4  rounded-lg">
                  {/* Dropdown content for Approach */}
                  <ul class="text-left space-y-2">
                    <li>
                      <a
                        href="/engagement-synergy-model"
                        class="text-black hover:text-blue-700"
                      >
                        Engagement & Synergy Model
                      </a>
                    </li>
                    <li>
                      <a
                        href="/project-development-model"
                        class="text-black hover:text-blue-700"
                      >
                        Project & Development Model
                      </a>
                    </li>
                    <li>
                      <a
                        href="/value-proposition"
                        class="text-black hover:text-blue-700"
                      >
                        Value Proposition
                      </a>
                    </li>
                    <li>
                      <a
                        href="/consultancy-discovery-model"
                        class="text-black hover:text-blue-700"
                      >
                        Consultancy & Discovery Model
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div>
              <a
                href="/contactus"
                className="text-sm font-bold leading-6 text-gray-900 hover:text-blue-700"
              >
                <button type="button">About</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

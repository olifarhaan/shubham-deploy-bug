
import React from "react";

const VoipSolutions = () => {
  const services = [
    { name: "Session Border Controller (SBC)", icon: "" },
    { name: "Hosted PBX Solution (Multi Tenant IP PBX)", icon: "" },
    { name: "Retail VoIP Switch/ Class 5 Switch", icon: "" },
    { name: "Wholesale VoIP Switch/ Class 4 Switch", icon: "" },
    { name: "Unified Communication Solution (UCaaS)", icon: "" },
    { name: "Dynamic IVR Solution", icon: "" },
    { name: "Voice/SMS Broadcasting System", icon: "" },
    { name: "MVNO Solutions", icon: "" },
    { name: "Enterprise VoIP Solutions", icon: "" },
    { name: "MVNO Billing Solutions", icon: "" },
    { name: "Contact Center/ Call Center", icon: "" },
    { name: "Audio/Video Conference Solution", icon: "" },
    { name: "Fax Over IP (FoIP)Telepresence", icon: "" },
    { name: "Business Phone System", icon: "" },
    { name: "Communication APIs", icon: "" },
    { name: "Software Defined Telecom", icon: "" },
    { name: "VoIP Billing System", icon: "" },
    { name: "Small Business VoIP Solutions", icon: "" },
    { name: "Enterprise Contact Center", icon: "" },
  ];

  const contacts = [
    {
      label: "India",
      phone: "+91-7778842856",
      icon: "",
    },
    {
      label: "USA",
      phone: "+1-303-997-3139",
      icon: "",
    },
    {
      label: "Email Enquiries",
      email: "sales@Ayanshtech.com",
      icon: "",
    },
    {
      label: "Career Enquiries",
      email: "careers@Ayanshtech.com",
      icon: "",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-white p-4 rounded-md shadow-sm"
          >
            <span className="text-2xl">{service.icon}</span>
            <span className="text-gray-700 font-medium">{service.name}</span>
          </div>
        ))}
      </div>

      {/* Featured Blog Section */}
      <div className="max-w-7xl mx-auto my-12 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-2">
            VoIP Development vs. Ready-to-Use VoIP Products: A Comparative
            Analysis
          </h3>
          <p className="text-gray-600 mb-4">
            In the fast-paced world of business telecommunications, VoIP
            technology has revolutionized...
          </p>
          <a
            href="#"
            className="text-purple-600 hover:underline text-sm font-semibold"
          >
            Explore Blog →
          </a>
        </div>
        <div>
          <img
            src="https://73bd9e58.rocketcdn.me/wp-content/uploads/2024/05/web.jpg"
            alt="VoIP Blog"
            className="w-full rounded-md"
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-md shadow-sm space-x-4"
          >
            <span className="text-3xl">{contact.icon}</span>
            <div>
              <p className="text-gray-700 font-semibold">{contact.label}</p>
              {contact.phone ? (
                <p className="text-gray-600">{contact.phone}</p>
              ) : (
                <p className="text-gray-600">{contact.email}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoipSolutions;

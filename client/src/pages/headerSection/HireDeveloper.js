
import React from "react";

const HireDeveloper = () => {
  const services = [
    { name: "Android Developers", icon: "" },
    { name: "FreeSwitch Developer", icon: "" },
    { name: "Laravel Developer", icon: "" },
    { name: "React Native Developer", icon: "" },
    { name: "AWS Migration Engineers", icon: "" },
    { name: "MERN Developer", icon: "" },
    { name: "WebRTC Developer", icon: "" },
    { name: "Asterisk Developer", icon: "" },
    { name: "Node.js Developer", icon: "" },
    { name: "React.js Developer", icon: "" },
    { name: "Android Developers", icon: "" },
    { name: "FreeSwitch Developer", icon: "" },
    { name: "Laravel Developer", icon: "" },
    { name: "React Native Developer", icon: "" },
    { name: "AWS Migration Engineers", icon: "" },
    { name: "MERN Developer", icon: "" },
    { name: "WebRTC Developer", icon: "" },
    { name: "Asterisk Developer", icon: "" },
    { name: "Node.js Developer", icon: "" },
    { name: "React.js Developer", icon: "" },
   
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
    <div className="bg-gray-100 py-4 px-4">

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

export default HireDeveloper;

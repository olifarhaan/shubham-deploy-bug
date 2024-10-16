import React from 'react'

const GetInTouch = () => {
  return (
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
  )
}

export default GetInTouch

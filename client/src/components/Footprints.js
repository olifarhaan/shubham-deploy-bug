import React from 'react';

const OurFootprints = () => {
  return (
    <div className="bg-white py-16">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-gray-800">Our Footprints</h2>
        <p className="sm:text-base md:text-lg lg:text-xl text-gray-600 mb-16">
          We focus on catering services with an infrastructure that provides complete proximity to clients globally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img src="https://73bd9e58.rocketcdn.me/wp-content/uploads/2022/01/india-map-new.png" alt="India" className="w-60 mx-auto mb-4" />
            <h3 className="font-bold text-xl mr-6">INDIA</h3>
            <p>501-503, Binori B Square 1, Ahmedabad</p>
            <p className="font-bold mt-2">+91-7778842856</p>
          </div>

          <div className="text-center">
            <img src="https://73bd9e58.rocketcdn.me/wp-content/uploads/2021/09/canadamap.png" alt="Canada" className="w-60 mx-auto mb-4" />
            <h3 className="font-bold text-xl">CANADA</h3>
            <p>1285 West Broadway, Suite 600, Vancouver</p>
            <p className="font-bold mt-2">+1-604-900-8870</p>
          </div>

          <div className="text-center">
            <img src="https://73bd9e58.rocketcdn.me/wp-content/uploads/2021/09/usamap.png" alt="USA" className="w-60 mx-auto mb-4" />
            <h3 className="font-bold text-xl">USA</h3>
            <p>300 SE 2nd Street, Suite 600, Fort Lauderdale</p>
            <p className="font-bold mt-2">+1-303-997-3139</p>
          </div>

          <div className="text-center">
            <img src="https://73bd9e58.rocketcdn.me/wp-content/uploads/2024/07/Africa-1.png" alt="South Africa" className="w-60 mx-auto mb-4" />
            <h3 className="font-bold text-xl">SOUTH AFRICA</h3>
            <p>158 Kiepersol street, Pretoria</p>
            <p className="font-bold mt-2">+27-0871353659</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFootprints;

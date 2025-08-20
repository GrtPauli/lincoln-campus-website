// src/components/about/AboutUs.jsx

import React from 'react';
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import AboutUsImage from '../../assets/about.png'; 
import VisionImage from '../../assets/vision1.jpg';
import MissionImage from '../../assets/mission1.jpg'; // Corrected extension to .jpg

const AboutUs = () => {
  return (
    <div>
   

      <div 
        className="relative bg-cover bg-center h-64 flex items-center justify-center" 
        style={{ backgroundImage: `url(${AboutUsImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold z-10 text-left">About Us</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* About Lincoln University College Section */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Lincoln University College</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Lincoln University College (LUC), located at Petaling Jaya, Malaysia was established in the year 2002 as Lincoln College (LC) and later upgraded to Lincoln University College in the year 2011. Lincoln University College is one of the premier private institutions of higher education approved by the Ministry of Higher Education and Malaysian Qualifications Agency (MQA- National Accreditation Board). The University College is also crowned with 5 Star ranking by the Ministry of Higher Education, Malaysia Consecutively in 2017 and 2019. Our promise to the stakeholders that we shall hold this position forever. Lincoln University College is listed among the...
        </p>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start my-8">
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be an acclaimed institution of higher learning that provides world class education with high capability in providing knowledgeable and skillful professional to serve the global society.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
            {/* The provided image for Vision */}
            <img src={VisionImage} alt="Vision" className="h-auto object-cover rounded-lg w-64"  />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start my-8">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            {/* The provided image for Mission */}
            <img src={MissionImage} alt="Mission" className="h-auto object-cover rounded-lg w-64" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              The mission of Lincoln University College is to become a truly global university with risk-based approach that enhances lifelong learning opportunities, practical and scientific skills, social values, leadership and entrepreneurship by harnessing information technology along with artificial intelligence to create a noble human society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
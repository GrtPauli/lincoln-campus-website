import React from 'react';
import VisionImage from '../../assets/vision1.jpg';
import MissionImage from '../../assets/mission1.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-12">
      {/* Hero Section */}
    

      <div className="container mx-auto px-4 py-6">
        {/* About Lincoln University College Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">About Lincoln University College</h2>
          <p className="text-gray-600 leading-relaxed text-center md:text-left">
            Lincoln University College (LUC), located at Petaling Jaya, Malaysia was established in the year 2002 as Lincoln College (LC) and later upgraded to Lincoln University College in the year 2011. Lincoln University College is one of the premier private institutions of higher education approved by the Ministry of Higher Education and Malaysian Qualifications Agency (MQA- National Accreditation Board). The University College is also crowned with 5 Star ranking by the Ministry of Higher Education, Malaysia Consecutively in 2017 and 2019. Our promise to the stakeholders that we shall hold this position forever. Lincoln University College is listed among the...
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be an acclaimed institution of higher learning that provides world class education with high capability in providing knowledgeable and skillful professional to serve the global society.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={VisionImage} alt="Vision" className="h-auto object-cover rounded-lg w-80 md:w-96" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={MissionImage} alt="Mission" className="h-auto object-cover rounded-lg w-80 md:w-96" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                The mission of Lincoln University College is to become a truly global university with risk-based approach that enhances lifelong learning opportunities, practical and scientific skills, social values, leadership and entrepreneurship by harnessing information technology along with artificial intelligence to create a noble human society.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
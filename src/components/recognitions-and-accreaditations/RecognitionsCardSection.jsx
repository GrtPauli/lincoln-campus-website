import React from 'react';

const RecognitionsCardSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <p className="text-gray-600 leading-relaxed mb-8">
        Lincoln University College (LUC), located at Petaling Jaya, Malaysia was established in the year 2002 as Lincoln College (LC) and later upgraded to Lincoln University College in the year 2011.
      </p>

      {/* Recognitions Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        
        {/* --- First Set of Cards --- */}
        
        {/* Card 1: Government Recognized */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-center text-gray-500 rounded-md mb-4">
            [MQR Logo Placeholder]
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            LINCOLN UNIVERSITY COLLEGE (LUC), MALAYSIA IS FULLY GOVERNMENT RECOGNIZED
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Starting from 2007, MQA's accreditation has no expiry date except for professional qualifications, which are usually accredited for 1 to 5 years. MQA's accreditation is perpetual and the date of its commencement starts from the date of which a qualification is being accredited.
          </p>
          <a href="#" className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2">
            View Link
          </a>
        </div>

        {/* Card 2: Malaysian Qualifications Agency */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-center text-gray-500 rounded-md mb-4">
            [MQA Logo Placeholder]
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            MALAYSIAN QUALIFICATIONS AGENCY (MQA)
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Provisional Accreditation is a "candidacy assessment" to determine the strength of the curriculum to be offered and the readiness of its delivery support system before it is offered to the public. Provisional Accreditation is granted with a validity period to a particular programme.
          </p>
          <a href="#" className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2">
            View Link
          </a>
        </div>

        {/* Card 3: The Setara 2022 */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-center text-gray-500 rounded-md mb-4">
            [Setara 2022 Award Placeholder]
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            THE SETARA – 2022
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            SETARA-2017 has to re-align the assessment metrics to Malaysian Education Blueprint 2015-2025 (HE). It is designed to help universities to build strong fundamentals i.e. deliver the three core functions (teaching, research and services) through appropriate assessment and evaluation metrics.
          </p>
          <a href="#" className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2">
            View Link
          </a>
        </div>

        {/* --- Second Set of Cards --- */}
        
        {/* Card 4: ISO Certification */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-center text-gray-500 rounded-md mb-4">
            [ISO Certification Logo Placeholder]
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            ISO CERTIFICATION
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Lincoln University College has obtained ISO 9001:2015 Certification. Please verify by Certification ID: MY/19/1811029985. To verify the status of a certificate or a group of certificates that a company holds, simply enter the certification ID number (found on the SGS certificate).
          </p>
          <a href="#" className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2">
            View Link
          </a>
        </div>

        {/* Card 5: QS University Rankings */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-center text-gray-500 rounded-md mb-4">
            [QS University Rankings Logo Placeholder]
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            QS UNIVERSITY RANKINGS
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Provisional Accreditation is a "candidacy assessment" to determine the strength of the curriculum to be offered and the readiness of its delivery support system before it is offered to the public. Provisional Accreditation is granted with a validity period to a particular programme.
          </p>
          <a href="#" className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2">
            View Link
          </a>
        </div>

        {/* Card 6: The World University Impact Ranking */}
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-center text-gray-500 rounded-md mb-4">
            [The World University Impact Ranking Logo Placeholder]
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            THE WORLD UNIVERSITY IMPACT RANKING
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Lincoln University College is registered under "The World University Impact Ranking". The university is one of the private institutions of higher education approved by the Ministry of Higher Education and Malaysian Qualifying Agency (MQA-National Accreditation Board).
          </p>
          <a href="#" className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2">
            View Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecognitionsCardSection;
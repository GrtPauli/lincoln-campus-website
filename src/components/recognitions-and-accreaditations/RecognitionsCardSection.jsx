import React from "react";

import moeLogo from "../../assets/fmelogo.jfif";
import nucLogo from "../../assets/nuclogo.png";

const RecognitionsCardSection = () => {
  return (
    <div className="w-full p-12">
      <p className="text-gray-600 leading-relaxed mb-8">
        Lincoln University College (LUC), located at Petaling Jaya, Malaysia was
        established in the year 2002 as Lincoln College (LC) and later upgraded
        to Lincoln University College in the year 2011.
      </p>

      {/* Recognitions Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="w-full h-48 flex items-center justify-center rounded-md mb-4">
            <img
              src={moeLogo}
              alt="Federal Ministry of Education Logo"
              className="object-contain h-full w-full"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            FEDERAL MINISTRY OF EDUCATION
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Lincoln University Malaysia is recognized by the Federal Ministry of
            Education, ensuring that our academic standards align with national
            higher education policies and frameworks.
          </p>
          <a
            href="https://education.gov.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2"
          >
            View Link
          </a>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
          <div className="w-full h-48 flex items-center justify-center rounded-md mb-4">
            <img
              src={nucLogo}
              alt="NUC Logo"
              className="object-contain h-full w-full"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            NATIONAL UNIVERSITIES COMMISSION (NUC)
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            The National Universities Commission (NUC) recognizes Lincoln
            University Malaysia, affirming the credibility and acceptance of our
            programs in Nigeria.
          </p>
          <a
            href="https://www.nuc.edu.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-700 font-semibold hover:underline mt-auto border border-red-700 rounded-md px-4 py-2"
          >
            View Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecognitionsCardSection;

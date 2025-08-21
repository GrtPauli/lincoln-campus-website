import React from 'react';
import recognitionimage from '../../assets/recognitionimage.png';

const RecognitionAndAccreditations = () => {
  return (
    <div className="relative w-full min-h-96 bg-blue-100">
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-blue-200 opacity-60"></div>

      {/* Magnifying Glass and Award Image */}
      <img 
  src={recognitionimage} 
  alt="A recognition badge or award" 
  className="absolute top-1/2 right-2 transform -translate-y-1/2 translate-x-4 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain object-bottom-left"
/>
      
      {/* Content Container (white block with text and red bar - positioned lower-left) */}
      <div className="absolute bottom-8 left-8 w-3/4 md:w-2/3 lg:w-1/2 h-auto bg-white bg-opacity-80 flex items-center shadow-lg">
        
        {/* Red Vertical Bar */}
        <div className="bg-red-700 w-4 h-full"></div>
        
        {/* Text Container */}
        <div className="flex items-center p-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Recognitions <br />& Accreditations
          </h2>
        </div>
      </div>
      
    </div>
  );
};

export default RecognitionAndAccreditations;
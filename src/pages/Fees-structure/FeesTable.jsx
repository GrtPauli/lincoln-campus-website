import React from 'react';
import GombeTableSection from '../../components/Fees-Structure/GombeTableSection';
import NsukTableSection from '../../components/Fees-Structure/NsukTableSection';
import MainLayout from '../../layouts/MainLayout';

const FeeTable = () => {
  const gombePrograms = [
    { campus: 'Gombe', name: 'FACULTY OF MEDICINE AND ALLIED HEALTH SCIENCES', duration: 6, feePerSemester: 1500000, feePerSession: 0 },
    { campus: 'Gombe', name: 'FACULTY OF SCIENCES AND COMPUTING ', duration: 5, feePerSemester: 1500000, feePerSession: 1000000 },
    { campus: 'Gombe', name: 'FACULTY OF MANAGEMENT AND SOCIAL SCIENCES ', duration: 4, feePerSemester: 150000, feePerSession: 400000 },
    
  ];

  const nsukPrograms = [
    { campus: 'Nsuk', name: 'DIPLOMA BANKING OPERATIONS', duration: 6, feePerSemester: 100000, feePerSession: 200000 },
    { campus: 'Nsuk', name: 'DIPLOMA IN BUSINESS ADMINISTRATION', duration: 6, feePerSemester: 100000, feePerSession: 200000 },
    { campus: 'Nsuk', name: 'B.A BUSINESS ADMINISTRATION', duration: 12, feePerSemester: 100000, feePerSession: 300000 },
    { campus: 'Nsuk', name: 'BACHELOR OF ENTREPREUERSHIP', duration: 12, feePerSemester: 100000, feePerSession: 300000 },
    { campus: 'Nsuk', name: 'B.A BUSINESS ADMINISTRATION IN ACCOUNTING', duration: 12, feePerSemester: 100000, feePerSession: 300000 },
    // You can add more Nsuk-specific programs here later
  ];

  return (
    <MainLayout>
    <div className="bg-red-600 min-h-screen">
      {/* Top Header Section */}
      <div className="py-12 px-8 text-white">
        {/* <h1 className="text-4xl font-bold mb-4">
          Scholarship Fee For March/April Intake
          <div className="w-64 h-1 bg-white mt-2"></div>
        </h1> */}
        <p className="text-lg">Fees Structure</p>
      </div>

      {/* Content Section with Tables */}
      <div className="bg-gray-100 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <GombeTableSection facultyName="GOMBE CAMPUS FEES" programs={gombePrograms} />
          <NsukTableSection facultyName="NSUK CAMPUS FEES" programs={nsukPrograms} />
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default FeeTable;
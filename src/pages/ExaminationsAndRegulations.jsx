import React from 'react';
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/ui/Hero";
import ExaminationAndRegulations from '../components/examination-rules-and-regulations/ExaminationAndRegulations';

const ExaminationsAndRegulations = () => {
  return (
    <div>
      <MainLayout>
        <Hero
          title="Examination Rules & Regulations"
          backgroundImage="https://images.unsplash.com/photo-1710210824514-c6543635ee19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFJlc2VhcmNoJTIwYW5kJTIwRGV2ZWxvcG1lbnQlM0ElMjBJbnRyb2R1Y3Rpb258ZW58MHwwfDB8fHww"
          height="h-[200px] md:h-[200px] lg:h-[300px]"
          overlayOpacity="bg-black/10"
        />
        <ExaminationAndRegulations />
      </MainLayout>
    </div>
  );
};

export default ExaminationsAndRegulations;
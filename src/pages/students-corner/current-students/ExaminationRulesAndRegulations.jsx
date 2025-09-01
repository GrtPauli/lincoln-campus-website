import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import Hero from "../../../components/common/ui/Hero";
import ExaminationRulesAndRegulationsContent from "../../../components/students-corner/current-students/ExaminationRulesAndRegulationsContent";

function ExaminationRulesAndRegulations() {


  return (
    <MainLayout>
      <Hero
        title="Examination Rules & Regulations"
        backgroundImage="https://www.lincoln.edu.my/wp-content/uploads/2025/02/students-studying-classroom-1024x683.jpg"
        height="h-[200px] md:h-[200px] lg:h-[400px]"
        overlayOpacity="bg-black/10"
      />

      <ExaminationRulesAndRegulationsContent />
    </MainLayout>
  );
}

export default ExaminationRulesAndRegulations;

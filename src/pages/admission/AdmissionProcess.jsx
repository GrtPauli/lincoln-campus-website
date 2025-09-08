import React from "react";
import AboutUsImage from '../../assets/about.png';
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import AdmissionProcessStructure from "../../components/admission/admission-process/AdmissionProcessStructure";

function AdmissionProcess() {
  return (
    <MainLayout>
      <div>
        <Hero title='Admission Process' backgroundImage={AboutUsImage} />
        <AdmissionProcessStructure/>
      </div>
    </MainLayout>
  );
}

export default AdmissionProcess;

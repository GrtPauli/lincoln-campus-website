import React from "react";
import AboutUsImage from '../../assets/about.png';

import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import FeesBreakdown from "../../components/admission/fees-structure/breakdown";

function FeesStructure() {
  return (
    <MainLayout>
      <div>
        <Hero title='Fees Structure' backgroundImage={AboutUsImage} />
        <FeesBreakdown />
      </div>
    </MainLayout>
  );
}

export default FeesStructure;

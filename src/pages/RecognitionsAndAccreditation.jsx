import React from "react";
import RecognitionsCardSection from "../components/recognitions-and-accreaditations/RecognitionsCardSection";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/ui/Hero";

const RecognitionsAndAccreditationPage = () => {
  return (
    <MainLayout>
      <Hero
        title="Recognition and Accreditations"
        backgroundImage="https://images.unsplash.com/photo-1710210824514-c6543635ee19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFJlc2VhcmNoJTIwYW5kJTIwRGV2ZWxvcG1lbnQlM0ElMjBJbnRyb2R1Y3Rpb258ZW58MHwwfDB8fHww"
        height="h-[200px] md:h-[200px] lg:h-[300px]"
        overlayOpacity="bg-black/10"
      />
      <RecognitionsCardSection />
    </MainLayout>
  );
};

export default RecognitionsAndAccreditationPage;

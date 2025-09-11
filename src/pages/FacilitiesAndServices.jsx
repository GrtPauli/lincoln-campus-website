import React from "react";
import FacilitiesAndServicesContent from "../components/facilities-and-services/FacilitiesAndServicesContent";
import Hero from "../components/common/ui/Hero";
import MainLayout from "../layouts/MainLayout";
import FacilitiesAndServicesVideos from "../components/facilities-and-services/FacilitiesAndServicesVideos";
import StyledUnderline from "../components/common/ui/StyledUnderline";

export default function FacilitiesAndServices() {
  return (
    <MainLayout>
      <Hero
        title="Facilities and Services"
        backgroundImage="https://plus.unsplash.com/premium_photo-1693035341269-8bbcfe73ff5a?w=500&auto=format&fit=crop&q=60"
        height="h-[200px] md:h-[200px] lg:h-[300px]"
        overlayOpacity="bg-black/10"
      />

      <div className="p-12 py-14">
        <p className="mb-3">
          The Lincoln University College mission drives our focus on quality
          education for individual development and it’s vital foundation.
        </p>
        <p className="mb-8">
          Lincoln University College (LUC), located at Petaling Jaya, Malaysia
          was established in the year 2002 as Lincoln College (LC) and later
          upgraded to Lincoln University College in the year 2011.
        </p>
      </div>

      <FacilitiesAndServicesVideos />
      <FacilitiesAndServicesContent />
    </MainLayout>
  );
}

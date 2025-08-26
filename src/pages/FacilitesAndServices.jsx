import React from "react";
import FacilitiesAndServicesContent from "../components/facilities-and-services/FacilitiesAndServicesContent";
import Hero from "../components/common/ui/Hero";
import MainLayout from "../layouts/MainLayout";

export default function FacilitesAndServices() {
  return (
    <MainLayout>
      <div>
        <Hero
          title="Facilities and Services"
          backgroundImage="https://plus.unsplash.com/premium_photo-1693035341269-8bbcfe73ff5a?w=500&auto=format&fit=crop&q=60"
          height="h-[200px] md:h-[200px] lg:h-[300px]"
          overlayOpacity="bg-black/10"
        />
        <FacilitiesAndServicesContent />
      </div>
    </MainLayout>
  );
}

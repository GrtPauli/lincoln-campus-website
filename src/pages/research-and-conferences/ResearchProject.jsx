import React from "react";
import Hero from "../../components/common/ui/Hero";
import ResearchProjectsContent from "../../components/research-and-conferences/research-projects/ResearchProjectsContent";
import ResearchProjectsAccordion from "../../components/research-and-conferences/research-projects/ResearchProjectsAccordion";
import MainLayout from "../../layouts/MainLayout";

export default function ResearchProject() {
  return (
    <MainLayout>
      <div>
        <Hero
          title="Research Projects"
          backgroundImage="https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVzZWFyY2glMjBQcm9qZWN0fGVufDB8MHwwfHx8MA%3D%3D"
          height="h-[200px] md:h-[200px] lg:h-[300px]"
          overlayOpacity="bg-black/10"
        />

        <ResearchProjectsContent />

        <ResearchProjectsAccordion />
      </div>
    </MainLayout>
  );
}

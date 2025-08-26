import React from "react";
import Hero from "../../components/common/ui/Hero";
import IntroductionContent from "../../components/research-and-conferences/introduction/IntroductionContent";
import MainLayout from "../../layouts/MainLayout";

export default function Introduction() {
  return (
    <MainLayout>
      <div>
        <Hero
          title="Research and Development: Introduction"
          backgroundImage="https://images.unsplash.com/photo-1710210824514-c6543635ee19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFJlc2VhcmNoJTIwYW5kJTIwRGV2ZWxvcG1lbnQlM0ElMjBJbnRyb2R1Y3Rpb258ZW58MHwwfDB8fHww"
          height="h-[200px] md:h-[200px] lg:h-[300px]"
          overlayOpacity="bg-black/10"
        />

        <IntroductionContent />
      </div>
    </MainLayout>
  );
}

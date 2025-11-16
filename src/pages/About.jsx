import React from "react";
import AboutSection from "../components/about/AboutSection";
import AboutUsImage from "../assets/about.png";

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/ui/Hero";

function About() {
  return (
    <MainLayout>
      <div>
        <Hero
          title="About Us"
          backgroundImage="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D"
          height="h-[200px] md:h-[200px] lg:h-[300px]"
          overlayOpacity="bg-black/10"
        />
        <AboutSection />
      </div>
    </MainLayout>
  );
}

export default About;

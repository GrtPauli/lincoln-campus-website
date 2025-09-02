import React from "react";
import AboutSection from "../components/about/AboutSection";
import AboutUsImage from '../assets/about.png';

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/ui/Hero";

function About() {
  return (
    <MainLayout>
      <div>
        <Hero title='About Us' backgroundImage={AboutUsImage} />
        <AboutSection />
      </div>
    </MainLayout>
  );
}

export default About;

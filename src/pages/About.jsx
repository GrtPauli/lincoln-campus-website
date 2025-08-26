import React from "react";
import AboutSection from "../components/about/AboutSection";
import AboutHero from "../components/about/AboutHero";
import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div>
        <AboutHero />
        <AboutSection />
      </div>
    </MainLayout>
  );
}

export default About;

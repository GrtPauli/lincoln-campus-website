import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import FacultyNav from "../../components/common/ui/faculty-and-programmes/FacultyNav";
import Overview from "../../components/common/ui/faculty-and-programmes/Overview";
import Programmes from "../../components/common/ui/faculty-and-programmes/Programmes";
import DeanMessage from "../../components/common/ui/faculty-and-programmes/DeanMessage";
import FacultyMembers from "../../components/common/ui/faculty-and-programmes/FacultyMembers";
import Gallery from "../../components/common/ui/faculty-and-programmes/Gallery";
import Testimonials from "../../components/common/ui/faculty-and-programmes/Testimonials";
import { useParams } from "react-router-dom";
import { FACULTIES } from "../../constants/faculties";

export default function FacultyDetails() {


  const { slug } = useParams();
  const faculty = FACULTIES.find((f) => f.slug === slug);

  return (
    <MainLayout>
      <Hero
        title={faculty?.title}
        backgroundImage={faculty.image}
        height="h-[200px] md:h-[200px] lg:h-[400px]"
        overlayOpacity="bg-black/10"
      />
      <FacultyNav />

      <Overview id="overview" title="Overview" paragraphs={faculty.overview} />

      <Programmes
        id="programmes"
        title="Programmes"
        programmes={faculty?.programmes}
        facultySlug={faculty.slug}
      />

      {faculty?.dean && <DeanMessage dean={faculty.dean} />}
      {faculty?.facultyMembers && (
        <FacultyMembers members={faculty.facultyMembers} />
      )}
      {faculty?.gallery && (
        <Gallery title={`${faculty.title} Gallery`} images={faculty.gallery} />
      )}
      {faculty?.testimonials && (
        <Testimonials testimonials={faculty.testimonials} />
      )}
    </MainLayout>
  );
}

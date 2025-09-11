import React, { useEffect, useState } from "react";
import HomeHeroSection from "../components/home/Hero";
import RecognitionsAndAccreditation from "../components/home/RecognitionsAndAccreditation";
import Programmes from "../components/home/Programmes";
import Achievements from "../components/home/Achievements";
import SchoolsSection from "../components/home/Schools";
import Events from "../components/home/Events";
import News from "../components/home/News";
// import Blog from "../components/home/Blog";
import Videos from "../components/home/Videos";
import MainLayout from "../layouts/MainLayout";
import { HomeService, GeneralService, AboutUsService } from "../services";
import { AppLoader } from "../components/common/Loader";


import SkillCard from "../components/practicalskills/PracticalSkillsSlider";
import PracticalSkillsSlider from "../components/practicalskills/PracticalSkillsSlider";





export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const [
          sliders,
          recognitions,
          testimonials,
          videos,
          aboutRes,
          news,
          events,
          shortNotice,
        ] = await Promise.all([
          HomeService.getSliders(),
          GeneralService.getRecognitions(),
          GeneralService.getTestimonials(),
          GeneralService.getVideos(),
          AboutUsService.getAboutUs(),
          HomeService.getNews(),
          HomeService.getEvents(),
          GeneralService.getShortNotice(),
        ]);

        const about = await aboutRes.json();

        if (mounted) {
          setData({
            sliders,
            recognitions,
            testimonials,
            videos,
            about,
            news,
            events,
            shortNotice,
          });
          setLoading(false);
        }
      } catch (err) {
        console.error("Failed to load homepage data", err);
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <AppLoader />;

  return (
    <MainLayout>
      <div>
        <HomeHeroSection slides={data?.sliders?.data} />
        <Programmes />
        <SchoolsSection />
        <Events events={data?.events?.data} />
        <PracticalSkillsSlider />
        <News news={data?.news?.data} />
        <Videos videos={data?.videos?.data} />
        <Achievements />

        <RecognitionsAndAccreditation />
      </div>
    </MainLayout>
  );
}
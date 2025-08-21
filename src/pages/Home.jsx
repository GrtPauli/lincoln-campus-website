import React from 'react'
import HomeHeroSection from '../components/home/Hero'
import RecognitionsAndAccreditation from '../components/home/RecognitionsAndAccreditation'
import Programmes from '../components/home/Programmes'
import Achievements from '../components/home/Achievements'
import SchoolsSection from '../components/home/Schools'
import Events from '../components/home/Events'
import News from '../components/home/News'
import Blog from '../components/home/Blog'

export default function HomePage() {
  return (
    <div>
      <HomeHeroSection />
      <Programmes />
      <Achievements />
      <SchoolsSection />
      <Events />
      <News />
      <Blog />
      <RecognitionsAndAccreditation />
    </div>
  )
}

// src/components/practicalskills/PracticalSkillsSlider.jsx

import React, { useState, useEffect, useRef } from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const practicalSkills = [
  {
    id: "it",
    name: "Information Technology",
    imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=IT",
  },
  {
    id: "med-surg",
    name: "Medicine & Surgery",
    imageUrl: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Medical",
  },
  {
    id: "business-admin",
    name: "Business Administration",
    imageUrl: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Business",
  },
  {
    id: "nursing",
    name: "Nursing",
    imageUrl: "https://via.placeholder.com/150/FF33CC/FFFFFF?text=Nursing",
  },
  {
    id: "economics",
    name: "Economics",
    imageUrl: "https://via.placeholder.com/150/FFFF33/333333?text=Economics",
  },
  {
    id: "education",
    name: "Education",
    imageUrl: "https://via.placeholder.com/150/33FFFF/333333?text=Education",
  },
  {
    id: "mass-comm",
    name: "Mass Communication",
    imageUrl: "https://via.placeholder.com/150/CC33FF/FFFFFF?text=Media",
  },
];

export default function PracticalSkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 2;
    const width = window.innerWidth;
    if (width >= 1024) return 5;
    if (width >= 768) return 4;
    if (width >= 640) return 3;
    return 2;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, practicalSkills.length - slidesPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused, slidesPerView]);

  const goToSlide = (index) => {
      const maxIndex = Math.max(0, practicalSkills.length - slidesPerView);
      setCurrentIndex(Math.min(index, maxIndex));
  };
  
  const nextSlide = () => {
      const maxIndex = Math.max(0, practicalSkills.length - slidesPerView);
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
      const maxIndex = Math.max(0, practicalSkills.length - slidesPerView);
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full p-12">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Explore Our Practical Skills
        </h2>
        <StyledUnderline />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out gap-5"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / slidesPerView)
              }%)`,
            }}
          >
            {practicalSkills.map((skill) => (
              <div
                key={skill.id}
                className="flex-shrink-0"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                 {/* Card content goes directly here */}
                 <div className="w-full h-48 rounded-lg overflow-hidden shadow-md bg-white border border-gray-200 transition-all duration-300 hover:shadow-lg flex flex-col justify-center items-center p-4">
                  {skill.imageUrl && (
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="max-h-28 object-contain mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation buttons and dots remain the same */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5 text-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5 text-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: Math.max(1, practicalSkills.length - slidesPerView + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index
                  ? "bg-primary"
                  : "bg-border hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
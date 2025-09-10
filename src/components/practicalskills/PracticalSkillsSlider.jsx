import React, { useState, useEffect, useRef, useCallback } from "react";
import StyledUnderline from "../common/ui/StyledUnderline";
import { PROJECTS } from "../../constants/projects";
import { Link } from "react-router-dom";

export default function PracticalSkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  // Shuffle projects and limit to 6
  const shuffledProjects = useRef(
    [...PROJECTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
  ).current;

  // Create slides with 3 projects each
  const slides = [];
  for (let i = 0; i < shuffledProjects.length; i += 3) {
    slides.push(shuffledProjects.slice(i, i + 3));
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isPaused || !isVisible || slides.length <= 1) return;
    
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [isPaused, isVisible, slides.length, currentIndex]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(Math.min(index, slides.length - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section className="p-12 py-14 w-full">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl font-bold text-text">
          Practical Skills Application (PSA)
        </h2>
        <StyledUnderline className="mx-auto" />
      </div>

      <div className="relative mx-auto px-4 sm:px-6" ref={containerRef}>
        <div
          className="overflow-hidden rounded-xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="flex px-6 py-2 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slideProjects, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-2"
                aria-hidden={currentIndex !== idx}
              >
                {slideProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-secondary rounded-sm shadow-sm hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                  >
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-text mb-3 line-clamp-2">
                        {project.psaTitle}
                      </h3>
                      <div className="space-y-2 mb-4 text-sm">
                        <p className="text-text">
                          <strong className="text-text">Student:</strong> {project.name}
                        </p>
                        <p className="text-text">
                          <strong className="text-text">Supervisor:</strong> {project.supervisor}
                        </p>
                        <p className="text-text">
                          <strong className="text-text">Year:</strong> {project.year}
                        </p>
                      </div>
                      <div className="mt-auto pt-4">
                        <Link
                          to={`/psa/${project.programmeSlug}`}
                          className="inline-block w-full text-center px-4 py-2 bg-primary/90 text-secondary text-sm font-medium rounded-lg hover:bg-primary transition-colors focus:ring-2 focus:ring-primary/50 focus:outline-none"
                          aria-label={`View details for ${project.psaTitle}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons - only show if there are multiple slides */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-secondary shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Previous projects"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-secondary shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Next projects"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </>
        )}

        {/* Dots - only show if there are multiple slides */}
        {slides.length > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-primary scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index}
              />
            ))}
          </div>
        )}
      </div>

      {/* View More button */}
      <div className="mt-12 text-center">
        <Link
          to="/psa"
          className="inline-flex items-center px-6 py-3 bg-primary/95 text-secondary font-medium rounded-lg shadow-md hover:bg-primary transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
        >
          View More Projects
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
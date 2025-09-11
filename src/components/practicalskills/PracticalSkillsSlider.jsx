import React, { useState, useEffect, useRef } from "react";
import StyledUnderline from "../common/ui/StyledUnderline";
import { FACULTIES } from "../../constants/faculties";
import { Link } from "react-router-dom"; // import Link

export default function PracticalSkillsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 1;
    const width = window.innerWidth;
    if (width >= 1024) return 1;
    if (width >= 768) return 1;
    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);
  console.log("Slides Per View:", slidesPerView);

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= FACULTIES.length - 1 ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => setCurrentIndex(Math.min(index, FACULTIES.length - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev >= FACULTIES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? FACULTIES.length - 1 : prev - 1));

  return (
    <section className="w-full p-12">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Practical Skills Application (PSA)
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
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {FACULTIES.map((faculty) => (
              <div
                key={faculty.slug}
                className="flex-shrink-0 w-full flex flex-col gap-4"
              >
                <h3 className="text-xl font-semibold mb-4">{faculty.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {faculty.programmes.map((programme) => (
                    <Link
                      key={programme.slug}
                      to={`/psa/${programme.slug}`} // link to programme details
                      className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      {programme.image && (
                        <img
                          src={programme.image}
                          alt={programme.title}
                          className="max-h-28 object-contain mb-2 rounded-sm"
                        />
                      )}
                      <p className="text-center text-gray-800 font-medium">
                        {programme.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
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

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {FACULTIES.map((_, index) => (
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

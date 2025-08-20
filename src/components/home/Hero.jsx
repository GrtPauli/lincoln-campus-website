import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/05/THE-924x1024.jpg",
    title: "The QS University Rankings",
    subtitle:
      "#638 World University Rankings | 2026#185 in Asia | 2025 #47 in South-Eastern Asia | 2025 ",
    description:
      "As of the QS University Rankings, Lincoln University College (LUC), Malaysia, is ranked #638 in World University, #185 in Asia and holds the #47 position in South-Eastern Asia",
    cta: "Get more details",
  },
  {
    id: 2,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/05/qs-924x1024.jpg",
    title:
      "THE Lincoln University College Overall Ranking 401-600 in Times Higher Education Impact Rankings 2025",
    subtitle: "",
    description:
      "Lincoln University College, Malaysia, has achieved a position within the 401–600 band in the Times Higher Education Impact Rankings 2025, which assess universities' contributions to the United Nations Sustainable Development Goals (SDGs)",
    cta: "Get more details",
  },
  {
    id: 3,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/05/s4b-924x1024.jpg",
    title: "Embark on Your PhD Journey Today at Lincoln University College",
    subtitle: "Pursue Excellence, Achieve Impact",
    description:
      "Fields of Study: Medicine | Dentistry | Pharmacy and Traditional Complementary Medicine | Nursing & Applied Science | Business & Management | Hospitality & Tourism | Education | Accounting & Finance | Social Sciences, Arts and Humanities | AI Computing & Multimedia | Engineering and Built Environment | Open Distance Learning (ODL) | Research Base Post Graduate Studies",
    cta: "Register Today!",
  },
  {
    id: 4,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/05/s3b-924x1024.jpg",
    title: "Begin Your Master's Degree at Lincoln University College",
    subtitle: "Advance Knowledge, Empower Your Future",
    description:
      "Fields of Study: Medicine | Dentistry | Pharmacy and Traditional Complementary Medicine | Nursing & Applied Science | Business & Management | Hospitality & Tourism | Education | Accounting & Finance | Social Sciences, Arts and Humanities | AI Computing & Multimedia | Engineering and Built Environment | Open Distance Learning (ODL) | Research Base Post Graduate Studies",
    cta: "Register Today!",
  },
  {
    id: 5,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/05/s2b-924x1024.jpg",
    title:
      "Embark on Your Bachelor's Journey Today at Lincoln University College",
    subtitle: "Ignite Potential, Create Your Future",
    description:
      "Fields of Study: Medicine | Dentistry | Pharmacy and Traditional Complementary Medicine | Nursing & Applied Science | Business & Management | Hospitality & Tourism | Education | Accounting & Finance | Social Sciences, Arts and Humanities | AI Computing & Multimedia | Engineering and Built Environment | Open Distance Learning (ODL) | Research Base Post Graduate Studies",
    cta: "Register Today!",
  },
  {
    id: 6,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/05/sb1-924x1024.jpg",
    title: "Embark on Your Diploma Journey Today at Lincoln University College",
    subtitle: "Gain Skills, Build Your Future",
    description:
      "Fields of Study: Medicine | Dentistry | Pharmacy and Traditional Complementary Medicine | Nursing & Applied Science | Business & Management | Hospitality & Tourism | Education | Accounting & Finance | Social Sciences, Arts and Humanities | AI Computing & Multimedia | Engineering and Built Environment | Open Distance Learning (ODL) | Research Base Post Graduate Studies",
    cta: "Register Today!",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 3000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 3000);
  }, []);

  // Enhanced touch events for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isAutoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoplay((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="w-full flex flex-col">
      <div
        className="relative w-full min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              index === current
                ? "opacity-100 translate-x-0 z-10"
                : index < current
                ? "opacity-0 -translate-x-full z-0"
                : "opacity-0 translate-x-full z-0"
            }`}
          >
            <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
              <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-12">
                {/* Image Container */}
                <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-1">
                  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] xl:max-h-[80vh] object-contain rounded-xl transition-transform duration-300 hover:scale-105"
                      loading={index === current ? "eager" : "lazy"}
                    />
                    {/* Image overlay for better text contrast on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-text/10 via-transparent to-transparent rounded-xl lg:hidden"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-2 space-y-4 sm:space-y-6">
                  {/* Title */}
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-text px-2 sm:px-0">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary leading-relaxed px-2 sm:px-0">
                      {slide.subtitle}
                    </h2>
                  )}

                  {/* Description */}
                  <div className="relative">
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed bg-gradient-to-r from-primary to-primary/90 text-secondary p-4 sm:p-5 md:p-6 rounded-xl mx-2 sm:mx-0">
                      {slide.description}
                    </p>
                    {/* Decorative element */}
                    <div className="absolute -bottom-2 left-1/2 lg:left-8 transform -translate-x-1/2 lg:translate-x-0 w-4 h-4 bg-gradient-to-r from-primary to-primary/90 rotate-45"></div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 sm:pt-4">
                    <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/95 text-secondary font-semibold rounded-full hover:shadow-sm transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg focus:outline-none ">
                      {slide.cta}
                      <svg
                        className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 lg:left-6 transform -translate-y-1/2 bg-secondary/10 hover:bg-secondary p-2 sm:p-3 lg:p-4 rounded-full text-text hover:text-primary/90 transition-all duration-300 z-20 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/50 group"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 lg:right-6 transform -translate-y-1/2 bg-secondary/90 hover:bg-secondary p-2 sm:p-3 lg:p-4 rounded-full text-gray-700 hover:text-primary/90 transition-all duration-300 z-20 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/50 group"
          aria-label="Next slide"
        >
          <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Autoplay indicator */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20">
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${
              isAutoplay
                ? "bg-green-500/20 text-green-600"
                : "bg-gray-500/20 text-text"
            } hover:bg-secondary/20 focus:outline-none focus:ring-2 focus:ring-secondary/50`}
            aria-label={isAutoplay ? "Pause autoplay" : "Resume autoplay"}
          >
            {isAutoplay ? (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 bg-secondary/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
          <span className="text-xs sm:text-sm font-medium text-secondary">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Pagniation dots */}
      <div className="w-full py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setIsAutoplay(false);
                  setTimeout(() => setIsAutoplay(true), 3000);
                }}
                className={`relative overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  current === index
                    ? "w-8 sm:w-10 lg:w-12 h-3 sm:h-4 bg-gradient-to-r from-primary to-primary/90"
                    : "w-3 sm:w-4 h-3 sm:h-4 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {current === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/85 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

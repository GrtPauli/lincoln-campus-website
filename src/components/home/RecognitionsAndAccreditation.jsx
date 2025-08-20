import { useState, useEffect, useRef } from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const logos = [
  {
    id: 1,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r9.jpg",
    alt: "Common Wealth",
  },
  {
    id: 2,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r6.jpg",
    alt: "Nigeria",
  },
  {
    id: 3,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r24.jpg",
    alt: "Multirank",
  },
  {
    id: 4,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/01/IMG-20210405-WA0025-with-out-setara.jpg",
    alt: "Ranking Web",
  },
  {
    id: 5,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r1.jpg",
    alt: "IASSW",
  },
  {
    id: 6,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/qs-rank.png",
    alt: "QS Ranking",
  },
  {
    id: 7,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r21.jpg",
    alt: "QS Ranking",
  },
  {
    id: 8,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r23.jpg",
    alt: "QS Ranking",
  },
  {
    id: 9,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r26.jpg",
    alt: "QS Ranking",
  },
  {
    id: 10,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/r27.jpg",
    alt: "QS Ranking",
  },
];

export default function RecognitionsAndAccreditation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Gets slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 3; 
    const width = window.innerWidth;
    if (width >= 1024) return 6;
    if (width >= 768) return 5;
    if (width >= 640) return 4;
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, logos.length - slidesPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, slidesPerView]);

  const goToSlide = (index) => {
    const maxIndex = Math.max(0, logos.length - slidesPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, logos.length - slidesPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, logos.length - slidesPerView);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full p-12">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Recognitions & Accreditation
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
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex-shrink-0"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <div className="bg-secondary border border-border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 mx-2 h-28 flex items-center justify-center group">
                  <img
                    src={logo.image}
                    alt={logo.alt}
                    className="max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

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
            length: Math.max(1, logos.length - slidesPerView + 1),
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

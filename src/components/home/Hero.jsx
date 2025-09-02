import { useState, useRef } from "react";
import { Carousel, ConfigProvider } from "antd";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroSection({ slides }) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 sm:left-4 lg:left-6 transform -translate-y-1/2 bg-secondary/10 hover:bg-secondary p-2 sm:p-3 lg:p-4 rounded-full text-text hover:text-primary/90 transition-all duration-300 z-20 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/50 group"
      aria-label="Previous slide"
    >
      <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 sm:right-4 lg:right-6 transform -translate-y-1/2 bg-secondary/90 hover:bg-secondary p-2 sm:p-3 lg:p-4 rounded-full text-gray-700 hover:text-primary/90 transition-all duration-300 z-20 hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/50 group"
      aria-label="Next slide"
    >
      <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
    </button>
  );

  const handleDotClick = (index) => {
    setCurrent(index);
    carouselRef.current.goTo(index);
  };

  return (
    <section className="w-full h-[500px] cus-xs:h-[300px] 2xl:h-[600px] relative">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "",
            colorPrimary: "black",
          },
        }}
      >
        <Carousel
          ref={carouselRef}
          autoplaySpeed={5000}
          autoplay
          swipeToSlide
          pauseOnHover={false}
          arrows
          prevArrow={<CustomPrevArrow />}
          nextArrow={<CustomNextArrow />}
          dots={false}
          beforeChange={(from, to) => setCurrent(to)}
        >
          {slides?.map((slide, index) => (
            <div
              key={slide.id || index}
              className="relative bg-center bg-cover h-[500px] cus-xs:h-[300px] 2xl:h-[600px] w-full"
            >
              {slide?.link ? (
                <div className="cursor-pointer h-full w-full">
                  <Link to={slide.link} className="w-full h-full block">
                    <img
                      src={`${BASE_API_URL}/images/sliders/${slide.image_url}`}
                      alt={slide.title || "Slide"}
                      className="w-full h-full object-center object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </Link>
                </div>
              ) : (
                <div className="h-full w-full">
                  <img
                    src={`${BASE_API_URL}/images/sliders/${slide.image_url}`}
                    alt={slide.title || "Slide"}
                    className="w-full h-full object-center object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </ConfigProvider>
      <div className="w-full absolute bottom-0 left-0 flex items-center justify-center py-6">
        <div className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4">
          {slides?.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-[600ms] focus:outline-none focus:ring-2 focus:ring-primary/50 ${
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
    </section>
  );
}
import React, { useState } from "react";
import StyledUnderline from "../StyledUnderline";

export default function Testimonials({
  title = "Testimonials",
  testimonials = [],
  // Min-height only on desktop – mobile can grow freely
  fixedHeight = "md:min-h-[420px]",
}) {
  const [current, setCurrent] = useState(0);

  if (!testimonials.length) return null;

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section id="testimonials" className="bg-secondary py-14 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block mb-9">
          <h2 className="text-2xl">{title}</h2>
          <StyledUnderline />
        </div>

        <div
          className={`bg-border/50 rounded-xl p-6 md:p-10 lg:p-12 w-full relative ${fixedHeight}`}
        >
          <div className="grid grid-cols-1">
            <div>
              <div
                key={testimonials[current].id}
                className="transition-opacity duration-300"
              >
                <div className="overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {testimonials[current].text1}
                  </p>
                  {testimonials[current].text2 && (
                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      {testimonials[current].text2}
                    </p>
                  )}
                </div>

                <div className="flex items-center mt-6">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-secondary shadow-sm"
                  />
                  <div className="ml-4">
                    <p className="text-text font-medium text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-border/500 mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>

                {/* Controls BELOW testimonial */}
                <div className="flex flex-col  items-center justify-center gap-4 mt-8">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          current === i ? "bg-text" : "bg-text/40"
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full text-text/50 hover:text-text hover:bg-border transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        className="w-5 h-5"
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
                      className="p-2 rounded-full text-text/50 hover:text-text hover:bg-border transition-colors"
                      aria-label="Next testimonial"
                    >
                      <svg
                        className="w-5 h-5"
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
        </div>
      </div>
    </section>
  );
}

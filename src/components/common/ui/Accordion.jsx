import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  mx-auto border border-border rounded-xl shadow-sm">
      {data.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              aria-expanded={isActive}
              aria-controls={`accordion-content-${index}`}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-border text-primary"
                  : "text-text hover:bg-border/50"
              }`}
            >
              <span>{item.title}</span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                } text-text/50`}
              />
            </button>

            <div
              id={`accordion-content-${index}`}
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isActive ? "max-h-[500px] px-4 py-3 bg-border/50" : "max-h-0"
              }`}
            >
              {isActive && item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
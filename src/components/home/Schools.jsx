import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";
import { FACULTIES } from "../../constants/faculties";
import { Link } from "react-router-dom";

function SchoolsSection() {
  return (
    <section className="w-full p-12 py-14 bg-bg">
      <div className="mb-12 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Our Faculties
        </h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {FACULTIES.map((faculty) => (
          <div
            key={faculty.slug}
            className="bg-secondary rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col group"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={faculty.image}
                alt={faculty.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-semibold text-text mb-4">
                {faculty.title}
              </h3>

              <Link to={`/faculties-and-programmes/${faculty.slug}`} className="mt-auto inline-block px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SchoolsSection;

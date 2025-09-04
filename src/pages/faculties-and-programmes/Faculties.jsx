import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import { FACULTIES } from "../../constants/faculties";
import StyledUnderline from "../../components/common/ui/StyledUnderline";

export default function Faculties() {
  return (
    <MainLayout>
      <Hero
        title={"Faculties & Programmes"}
        backgroundImage="https://plus.unsplash.com/premium_photo-1691844987860-b9efa12844dc?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0"
      />

      <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        <div className="">
          <div className="mb-4 inline-block">
            <h1 className="text-2xl md:text-3xl font-bold text-text">
              Overview
            </h1>
            <StyledUnderline />
          </div>
          <p className="text-lg text-text leading-relaxed">
            Our faculties are designed to nurture academic excellence, research,
            and innovation across disciplines. Each faculty combines
            world-class teaching, practical training, and industry exposure to
            equip students with the knowledge and skills for impactful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FACULTIES.map((faculty) => (
            <div
              key={faculty.slug}
              className="group bg-secondary rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
                <h2 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-secondary drop-shadow-lg">
                  {faculty.title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <p className="text-text mb-6 line-clamp-3 leading-relaxed">
                  {faculty.overview[0]}
                </p>
                <div>
                  <Link
                    to={`/faculties-and-programmes/${faculty.slug}`}
                    className="inline-flex items-center px-5 py-2.5 bg-primary/95 text-secondary font-medium rounded-lg hover:bg-primary transition duration-300"
                  >
                    Explore Faculty →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

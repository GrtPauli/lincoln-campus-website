import React from "react";
import VisionImage from "../../assets/vision1.jpg";
import MissionImage from "../../assets/mission1.jpg";
import StyledUnderline from "../common/ui/StyledUnderline";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-12 max-sm:p-5">
      {/* Hero Section */}

      <div className="container mx-auto px-4 py-6">
        {/* About Lincoln University College Section */}
        <section className="mb-8">
          <div className="inline-block mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
              About Lincoln University
            </h2>
            <StyledUnderline />
          </div>
          <p className="text-gray-600 leading-relaxed text-center md:text-left">
            Lincoln University is a private institution approved by the Federal
            Ministry of Education and accredited by the National Universities
            Commission (NUC), Nigeria. Lincoln University is dedicated to
            delivering a transformative learning experience that combines
            innovation, research, and holistic student development.
            <br /> Lincoln University strives to set the benchmark for quality
            education by producing graduates who are academically excellent,
            entrepreneurial, and socially responsible—individuals who create
            opportunities and drive positive change in society.
            <br /> Education at Lincoln University goes beyond the classroom. By
            providing inclusive and globally relevant learning, we equip
            students with practical skills, scientific knowledge, and strong
            values of leadership, empathy, and resilience. Our goal is to
            empower graduates to thrive in a rapidly changing world, turning
            challenges into opportunities and knowledge into impact.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <div className="inline-block mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Vision
                </h2>
                <StyledUnderline />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lincoln University envisions becoming a distinguished
                institution that sets the benchmark for quality education,
                producing graduates with the capacity to innovate and profoundly
                impact society. Our vision is centered on creating knowledgeable
                and skillful individuals who actively engage in problem-solving,
                driving positive change, and transforming into leaders who
                contribute meaningfully to society by not only seeking jobs but
                by creating them
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={VisionImage}
                alt="Vision"
                className="h-auto object-cover rounded-lg w-80 md:w-96"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={MissionImage}
                alt="Mission"
                className="h-auto object-cover rounded-lg w-80 md:w-96"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Mission
                </h2>
                <StyledUnderline />
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Lincoln University, our mission is to democratize quality
                education, ensuring it is accessible to everyone, regardless of
                limitations. We aim to evolve into a global institution with a
                risk-based approach, providing lifelong learning opportunities
                that equip individuals with practical skills and scientific
                knowledge. Beyond academics, our commitment extends to fostering
                values of patriotism, leadership, empathy, and entrepreneurship.
                We are dedicated to cultivating an environment that empowers
                graduates to address societal challenges creatively, encouraging
                a mindset of innovation and job creation rather than job seeking
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

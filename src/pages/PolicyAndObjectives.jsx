import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/common/ui/Hero";

function PolicyAndObjectives() {
  return (
    <MainLayout>
      <Hero
        title="Our Policy & Objectives"
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
      />

      <div className="container mx-auto p-10">
        {/* Quality Policy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Quality Policy</h2>
          <hr className="border-t-2 border-red-600 mb-4" />
          <p className="text-gray-700">
            At Lincoln, quality education is at the core of our mission. We are
            dedicated to providing accessible, relevant, and practical learning
            experiences that empower our students for success. Our commitment
            extends to fostering a culture of continuous improvement, ensuring
            that our educational programs meet the highest standards and
            contribute to the holistic development of our students. Lincoln aims
            to be a beacon of educational excellence, cultivating an environment
            where learners thrive and emerge as well-rounded, skilled
            individuals ready to make meaningful contributions to society.
          </p>
        </section>

        {/* Objectives Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Objectives</h2>
          <hr className="border-t-2 border-red-600 mb-4" />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Accessible Education:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To maintain an inclusive and accessible learning environment
                  that accommodates students from diverse backgrounds and
                  abilities.
                </li>
                <li>
                  To explore and implement innovative approaches to make
                  education more affordable and reachable.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Practical Skill Development:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To prioritize practical skill development alongside
                  theoretical knowledge, ensuring graduates are well-prepared
                  for the demands of the workforce.
                </li>
                <li>
                  To collaborate with industry partners to align curriculum with
                  real-world needs and trends.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Global Perspective:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To enhance the global perspective of education by
                  incorporating international perspectives and experiences into
                  the curriculum.
                </li>
                <li>
                  To encourage students to engage in global opportunities such
                  as study abroad programs and international collaborations.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Student Financial Support:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To establish mechanisms that support students in managing
                  their tuition fees, such as installment payment options and
                  scholarship opportunities.
                </li>
                <li>
                  To provide transparent information about financial assistance
                  programs available to students.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Community Engagement:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To actively engage with the local community, seeking
                  opportunities for students to apply their knowledge and skills
                  in addressing real-world challenges.
                </li>
                <li>
                  To promote a sense of social responsibility and community
                  service among students through various initiatives.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Innovation and Skill Development:
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  To integrate innovative teaching methods and technology to
                  enhance the learning experience.
                </li>
                <li>
                  To focus on skill development, ensuring graduates are
                  well-equipped for success in their chosen fields.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default PolicyAndObjectives;

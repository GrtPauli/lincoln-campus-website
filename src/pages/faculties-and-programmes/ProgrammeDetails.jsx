// src/pages/ProgrammeDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import { FACULTIES } from "../../constants/faculties";
import StyledUnderline from "../../components/common/ui/StyledUnderline";

export default function ProgrammeDetails() {
  const { facultySlug, programmeSlug } = useParams();
  const [openSections, setOpenSections] = useState({
    subjectHighlights: false,
    entryRequirements: false,
    careerOpportunities: false,
    programmeAim: false,
  });

  // Find the faculty
  const faculty = FACULTIES.find((f) => f.slug === facultySlug);

  // Find the programme
  const programme = faculty?.programmes?.find((p) => p.slug === programmeSlug);

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  if (!faculty || !programme) {
    return (
      <MainLayout>
        <Hero title="Programme Not Found" />
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-gray-600">
            Sorry, the programme you are looking for doesn't exist.
          </p>
        </div>
      </MainLayout>
    );
  }

  const details = programme.details;

  return (
    <MainLayout>
      <Hero title={programme.title} backgroundImage={programme.image} />

      <div className="p-12 py-14">
        <div className="">
          {!details ? (
            <p className="text-text">Programme details coming soon...</p>
          ) : (
            <div className="space-y-8">
              {details?.overview?.length > 0 && (
                <section className="mb-6">
                  <div className="inline-block mb-4">
                    <h3 className="text-xl text-text">Overview</h3>
                    <StyledUnderline />
                  </div>
                  <div className="mb-14">
                    {details.overview.map((item, idx) => (
                      <p key={idx} className="mb-6 text-text">
                        {item}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              <div className="space-y-4">
                {/* Subject Highlights Accordion
                  {details?.subjectHighlights?.coreCourses?.length > 0 && (
                    <div className="border rounded-lg overflow-hidden">
                      <button
                        className="w-full p-4 text-left cursor-pointer transition-colors duration-300"
                        onClick={() => toggleSection('subjectHighlights')}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold text-text">Subject Highlights</h3>
                          <svg 
                            className={`w-5 h-5 transform transition-transform duration-200 ${openSections.subjectHighlights ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {openSections.subjectHighlights && (
                        <div className="p-4 bg-white border-t">
                          <h4 className="text-lg font-medium mb-3 text-primary">Core Courses</h4>
                          <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-gray-200">
                              <thead>
                                <tr className="bg-gray-100">
                                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">S.No.</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">Course Code</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">Course Title</th>
                                  <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">Credits</th>
                                </tr>
                              </thead>
                              <tbody>
                                {details.subjectHighlights.coreCourses.map(
                                  (course) => (
                                    <tr key={course.sn} className="hover:bg-gray-50">
                                      <td className="border border-gray-300 px-4 py-2 text-text">{course.sn}</td>
                                      <td className="border border-gray-300 px-4 py-2 font-mono text-text">{course.code}</td>
                                      <td className="border border-gray-300 px-4 py-2 text-text">{course.title}</td>
                                      <td className="border border-gray-300 px-4 py-2 text-text">{course.credits}</td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )} */}

                {/* Subject Highlights Accordion */}
                {details?.subjectHighlights && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 text-left cursor-pointer transition-colors duration-300"
                      onClick={() => toggleSection("subjectHighlights")}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-text">
                          Subject Highlights
                        </h3>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${
                            openSections.subjectHighlights ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {openSections.subjectHighlights && (
                      <div className="p-4 bg-white border-t space-y-6">
                        {Object.entries(details.subjectHighlights).map(
                          ([category, courses]) =>
                            Array.isArray(courses) && courses.length > 0 ? (
                              <div key={category}>
                                <h4 className="text-lg font-medium mb-3 capitalize text-primary">
                                  {category.replace(/([A-Z])/g, " $1")}
                                </h4>
                                <div className="overflow-x-auto">
                                  <table className="min-w-full border-collapse border border-gray-200">
                                    <thead>
                                      <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">
                                          S.No.
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">
                                          Course Code
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">
                                          Course Title
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2 text-left font-medium text-text">
                                          Credits
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {courses.map((course) => (
                                        <tr
                                          key={course.sn}
                                          className="hover:bg-gray-50"
                                        >
                                          <td className="border border-gray-300 px-4 py-2 text-text">
                                            {course.sn}
                                          </td>
                                          <td className="border border-gray-300 px-4 py-2 font-mono text-text">
                                            {course.code}
                                          </td>
                                          <td className="border border-gray-300 px-4 py-2 text-text">
                                            {course.title}
                                          </td>
                                          <td className="border border-gray-300 px-4 py-2 text-text">
                                            {course.credits}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ) : null
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Entry Requirements Accordion */}
                {details?.entryRequirements?.length > 0 && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 text-left cursor-pointer transition-colors duration-300"
                      onClick={() => toggleSection("entryRequirements")}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-text">
                          Entry Requirements
                        </h3>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${
                            openSections.entryRequirements ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {openSections.entryRequirements && (
                      <div className="p-4 bg-white border-t">
                        <ul className="list-disc list-inside pl-2">
                          {details.entryRequirements.map((req, idx) => (
                            <li key={idx} className="text-text mb-2">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Career Opportunities Accordion */}
                {details?.careerOpportunities?.length > 0 && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 text-left cursor-pointer transition-colors duration-300"
                      onClick={() => toggleSection("careerOpportunities")}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-text">
                          Career Opportunities
                        </h3>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-200 ${
                            openSections.careerOpportunities ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </button>

                    {openSections.careerOpportunities && (
                      <div className="p-4 bg-white border-t">
                        <ul className="list-disc list-inside pl-2">
                          {details.careerOpportunities.map((career, idx) => (
                            <li key={idx} className="text-text mb-2">
                              {career}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Programme Aim Accordion */}
                {details?.programmeAim && (
                  <div className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 text-left cursor-pointer transition-colors duration-300"
                      onClick={() => toggleSection("programmeAim")}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-text">
                          Programme Aim
                        </h3>
                      </div>
                    </button>

                    {openSections.programmeAim && (
                      <div className="p-4 bg-white border-t space-y-3">
                        {Array.isArray(details.programmeAim) ? (
                          details.programmeAim.map((aim, idx) => (
                            <p key={idx} className="text-text">
                              {aim}
                            </p>
                          ))
                        ) : (
                          <p className="text-text">{details.programmeAim}</p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

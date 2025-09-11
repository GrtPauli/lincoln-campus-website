import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import { FACULTIES } from "../../constants/faculties";
import { PROJECTS } from "../../constants/projects";

export default function PracticalSkillDetails() {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Find programme metadata from FACULTIES
  const programmeData = FACULTIES.flatMap((f) => f.programmes).find(
    (p) => p.slug === slug
  );

  // Filter projects by programmeSlug for the programme detail view
  const programmeProjects = PROJECTS.filter((p) => p.programmeSlug === slug);

  const filteredProjects = programmeProjects.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.psaTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.year.toString().includes(searchTerm)
  );

  if (!programmeData) {
    const countsByProgramme = PROJECTS.reduce((acc, p) => {
      const key = p.programmeSlug;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const groupedFaculties = FACULTIES.map((fac) => {
      const programmes = (fac.programmes || []).map((prog) => ({
        ...prog,
        projectCount: countsByProgramme[prog.slug] || 0,
      }));
      const facultyProjectCount = programmes.reduce(
        (sum, prog) => sum + (prog.projectCount || 0),
        0
      );
      return { ...fac, programmes, facultyProjectCount };
    });

    return (
      <MainLayout>
        <Hero
          title={"Practical Skills Application (PSA)"}
          backgroundImage={
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60"
          }
        />

        <div className="p-12">
          {/* <div className="mb-9 inline-block">
            <h2 className="text-2xl">
              Projects
            </h2>
            <StyledUnderline />
          </div> */}

          {groupedFaculties.map((faculty) => (
            <section key={faculty.slug} className="mb-20">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-block mb-6">
                  <h3 className="text-2xl font-semibold  text-text">
                    {faculty.title}
                  </h3>
                  <StyledUnderline />
                </div>

                <div className="text-sm text-gray-600">
                  {faculty.facultyProjectCount} project
                  {faculty.facultyProjectCount !== 1 ? "s" : ""}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {faculty.programmes.map((prog) => (
                  <div
                    key={prog.slug}
                    className="bg-primary rounded-sm shadow hover:scale-105 transition-all duration-300 p-6 flex flex-col"
                  >
 

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-secondary mb-2">
                        {prog.title}
                      </h4>
                      <p className="text-sm text-secondary mb-4">
                        {prog.projectCount} project
                        {prog.projectCount !== 1 ? "s" : ""}
                      </p>
                    </div>

                    <Link
                      to={`/psa/${prog.slug}`}
                      className="mt-auto inline-block text-secondary rounded-sm  font-medium hover:bg-primary/90 transition-colors"
                    >
                      View Projects →
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </MainLayout>
    );
  }

  // ---------- Normal programme detail view ----------
  return (
    <MainLayout>
      <Hero
        title={programmeData.title}
        backgroundImage={
          programmeData.image ||
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60"
        }
      />

      <div className="p-12 pb-16">
        <div className="mb-9">
          <div className="inline-block mb-6">
            <h2 className="text-xl">Programme Overview</h2>
            <StyledUnderline />
          </div>
          <p>
            {programmeData.description ||
              "This programme focuses on hands-on practical skills for students to excel in real-world challenges."}
          </p>
        </div>

        <div className="mb-8">
          <Link
            to="/psa"
            className="flex items-center px-6 py-3 bg-primary/95 text-secondary rounded-sm hover:bg-primary transition-colors duration-200 font-medium shadow-sm"
          >
            ← Back to Practical Skills
          </Link>
        </div>

        {programmeProjects.length > 0 && (
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search by name, title, supervisor, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border-2 border-text/10 rounded-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-lg"
            />
          </div>
        )}

        {programmeProjects.length > 0 ? (
          filteredProjects.length > 0 ? (
            <div className="bg-secondary rounded-sm shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-primary text-secondary">
                      <th className="py-4 px-6 text-left font-semibold">
                        Student Name
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Project Title
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Report
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Demo
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Supervisor
                      </th>
                      <th className="py-4 px-6 text-left font-semibold">
                        Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.map((student, index) => (
                      <tr
                        key={student.id}
                        className={`${
                          index % 2 === 0 ? "bg-border/50" : "bg-secondary"
                        } hover:bg-primary/10 transition-colors duration-200`}
                      >
                        <td className="py-4 px-6 font-medium text-text">
                          {student.name}
                        </td>
                        <td className="py-4 px-6 text-text">
                          {student.psaTitle}
                        </td>
                        <td className="py-4 px-6">
                          {student.report && (
                            <a
                              href={student.report}
                              className="inline-flex items-center px-3 py-2 bg-primary/10 text-red-700 rounded-sm hover:bg-primary/20 transition-colors duration-200 font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              PDF
                            </a>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          {student.demo && (
                            <a
                              href={student.demo}
                              className="inline-flex items-center px-3 py-2 bg-primary/10 text-primary rounded-sm hover:bg-primary/20 transition-colors duration-200 font-medium"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Demo
                            </a>
                          )}
                        </td>
                        <td className="py-4 px-6 text-text">
                          {student.supervisor}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            {student.year}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-text mb-2">
                No Results Found
              </h3>
              <p className="text-text/80">
                Try adjusting your search terms or clear the search to see all
                projects.
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 px-6 py-2 bg-primary text-secondary rounded-sm hover:bg-primary transition-colors duration-200"
                >
                  Clear Search
                </button>
              )}
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-secondary rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-text mb-2">
              No Projects Yet
            </h3>
            <p className="text-text/80">
              Student projects for this programme will appear here once they're
              available.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

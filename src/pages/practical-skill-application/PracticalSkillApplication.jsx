import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import StyledUnderline from "../../components/common/ui/StyledUnderline";

export default function PracticalSkillApplication() {
  const departments = [
    {
      id: 1,
      name: "Information Technology",
      description: "Innovative tech solutions and software development",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Chinedu Okafor",
          psaTitle: "AI-Powered Health Tracker",
          report: "#",
          demo: "#",
          supervisor: "Mr. Jafar",
          year: 2024,
        },
        {
          id: 2,
          name: "Nurul Aisyah",
          psaTitle: "Blockchain Voting System",
          report: "#",
          demo: "#",
          supervisor: "Dr. Lim",
          year: 2024,
        },
        {
          id: 3,
          name: "Emeka Uche",
          psaTitle: "E-Learning Mobile Platform",
          report: "#",
          demo: "#",
          supervisor: "Prof. Johnson",
          year: 2023,
        },
      ],
    },
    {
      id: 2,
      name: "Medicine and Surgery",
      description: "Training doctors with world-class medical knowledge",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Maryam Abdullahi",
          psaTitle: "AI-Assisted Diagnosis System",
          report: "#",
          demo: "#",
          supervisor: "Prof. Bello",
          year: 2024,
        },
        {
          id: 2,
          name: "Ahmad Zulkifli",
          psaTitle: "Telemedicine for Rural Clinics",
          report: "#",
          demo: "#",
          supervisor: "Dr. Farid",
          year: 2023,
        },
        {
          id: 3,
          name: "Ifeanyi Nwosu",
          psaTitle: "Wearable Vital Signs Monitor",
          report: "#",
          demo: "#",
          supervisor: "Dr. James",
          year: 2024,
        },
      ],
    },
    {
      id: 3,
      name: "Business Administration",
      description: "Strategic business solutions and market analysis",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Amina Bello",
          psaTitle: "Digital Marketing Strategy for SMEs",
          report: "#",
          demo: "#",
          supervisor: "Prof. Brown",
          year: 2023,
        },
        {
          id: 2,
          name: "Mohd Faiz",
          psaTitle: "E-Commerce Growth Models",
          report: "#",
          demo: "#",
          supervisor: "Dr. Wong",
          year: 2024,
        },
        {
          id: 3,
          name: "Oluwaseun Adeyemi",
          psaTitle: "Customer Loyalty Analytics",
          report: "#",
          demo: "#",
          supervisor: "Dr. Green",
          year: 2024,
        },
      ],
    },
    {
      id: 4,
      name: "Nursing",
      description: "Healthcare innovations and patient care solutions",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Chukwuemeka Nnaji",
          psaTitle: "Mobile App for Patient Monitoring",
          report: "#",
          demo: "#",
          supervisor: "Prof. Ade",
          year: 2024,
        },
        {
          id: 2,
          name: "Siti Rahmah",
          psaTitle: "Telehealth Services for Rural Areas",
          report: "#",
          demo: "#",
          supervisor: "Dr. Karim",
          year: 2023,
        },
        {
          id: 3,
          name: "Ngozi Eze",
          psaTitle: "AI Symptom Checker",
          report: "#",
          demo: "#",
          supervisor: "Dr. Okafor",
          year: 2024,
        },
      ],
    },
    {
      id: 5,
      name: "Economics",
      description: "Market trends, economic modeling, and development",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Adeola Adekunle",
          psaTitle: "Impact of Cryptocurrency in Africa",
          report: "#",
          demo: "#",
          supervisor: "Prof. Hassan",
          year: 2023,
        },
        {
          id: 2,
          name: "Nurul Izzah",
          psaTitle: "Inflation Modeling in Malaysia",
          report: "#",
          demo: "#",
          supervisor: "Dr. Lim",
          year: 2024,
        },
        {
          id: 3,
          name: "Chinonso Okeke",
          psaTitle: "Microfinance and Poverty Reduction",
          report: "#",
          demo: "#",
          supervisor: "Dr. Okafor",
          year: 2024,
        },
      ],
    },
    {
      id: 6,
      name: "Education",
      description: "Pedagogical research and innovative learning systems",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Samuel Adeyemi",
          psaTitle: "Gamification in Classrooms",
          report: "#",
          demo: "#",
          supervisor: "Prof. Musa",
          year: 2024,
        },
        {
          id: 2,
          name: "Nur Syafiqah",
          psaTitle: "Inclusive Education Methods",
          report: "#",
          demo: "#",
          supervisor: "Dr. Wong",
          year: 2023,
        },
        {
          id: 3,
          name: "Fatima Lawal",
          psaTitle: "Online Learning Effectiveness",
          report: "#",
          demo: "#",
          supervisor: "Dr. Bello",
          year: 2024,
        },
      ],
    },
    {
      id: 7,
      name: "Mass Communication",
      description: "Media, journalism, and communication research",
      color: "bg-primary",
      students: [
        {
          id: 1,
          name: "Zainab Ibrahim",
          psaTitle: "Impact of Social Media on Youth",
          report: "#",
          demo: "#",
          supervisor: "Dr. Bello",
          year: 2023,
        },
        {
          id: 2,
          name: "Ravi Kumar",
          psaTitle: "Community Radio Development",
          report: "#",
          demo: "#",
          supervisor: "Prof. Ojo",
          year: 2024,
        },
        {
          id: 3,
          name: "Nurul Aisyah",
          psaTitle: "Digital Journalism in Malaysia",
          report: "#",
          demo: "#",
          supervisor: "Dr. Rahman",
          year: 2024,
        },
      ],
    },
  ];

  const [selectedDept, setSelectedDept] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = selectedDept
    ? selectedDept.students.filter(
        (student) =>
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.psaTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.year.toString().includes(searchTerm)
      )
    : [];

  return (
    <MainLayout>
      <Hero
        title="Practical Skill Application"
        backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D"
      />

      <div className="p-12 pb-16">
        <div className="mb-9">
          <div className="inline-block mb-6">
            <h2 className="text-xl">Overview</h2>
            <StyledUnderline />
          </div>
          <p>
            Lincoln University's PSA is a hands-on learning approach that helps
            students apply what they learn in class to real-life problems. By
            working with organizations or individuals, students develop
            practical skills, critical thinking, and problem-solving abilities.
            This prepares them to excel in their careers and tackle real-world
            challenges with confidence upon graduation.
          </p>
        </div>

        {/* Departments List */}
        {!selectedDept && (
          <section>
            <div className="inline-block mb-2">
              <div>
                <h2 className="text-xl">Departments</h2>
                <StyledUnderline />
              </div>
            </div>
            <p className="mb-16">Browse through projects by department</p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => setSelectedDept(dept)}
                  className={`group relative overflow-hidden rounded-sm cursor-pointer transform transition-all duration-300 hover:scale-105`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-90`}
                  ></div>

                  <div className="relative p-8 text-secondary">
                    <h3 className="text-xl font-bold mb-3">{dept.name}</h3>
                    <p className="mb-4">{dept.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {dept.students.length} Project(s)
                      </span>
                      <span className="text-xl text-secondary">→</span>
                    </div>
                  </div>

                  {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Department Details */}
        {selectedDept && (
          <section className="mt-16">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <button
                onClick={() => {
                  setSelectedDept(null);
                  setSearchTerm("");
                }}
                className="flex items-center px-6 py-3 bg-primary/95 text-secondary rounded-sm hover:bg-primary cursor-pointer transition-colors duration-200 font-medium shadow-sm"
              >
                <span className="mr-2">←</span> Back to Departments
              </button>

              <div className="text-center flex-1">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl">{selectedDept.icon}</span>
                  <h2 className="text-3xl font-bold">{selectedDept.name}</h2>
                </div>
                {/* <p className="text-text/80">{selectedDept.description}</p> */}
              </div>

              {selectedDept.students.length > 0 && (
                <button className="px-6 py-3 bg-border border-2 border-text/10 rounded-sm hover:bg-text/10 hover:border-text/20 transition-colors duration-200 font-medium cursor-pointer">
                  Download All Reports
                </button>
              )}
            </div>

            {/* Search Bar */}
            {selectedDept.students.length > 0 && (
              <div className="relative mb-8">
                <input
                  type="text"
                  placeholder="Search by name, title, supervisor, or year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border-2 border-text/10 rounded-sm focus:outline-none focus:ring-2 focus:ring- focus:border-transparent transition-all duration-200 text-lg"
                />
              </div>
            )}

            {/* Projects Table */}
            {selectedDept.students.length > 0 ? (
              <>
                {filteredStudents.length > 0 ? (
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
                          {filteredStudents.map((student, index) => (
                            <tr
                              key={student.id}
                              className={`${
                                index % 2 === 0
                                  ? "bg-border/50"
                                  : "bg-secondary"
                              } hover:bg-primary/10 transition-colors duration-200`}
                            >
                              <td className="py-4 px-6 font-medium text-text">
                                {student.name}
                              </td>
                              <td className="py-4 px-6 text-text">
                                {student.psaTitle}
                              </td>
                              <td className="py-4 px-6">
                                <a
                                  href={student.report}
                                  className="inline-flex items-center px-3 py-2 bg-primary/10 text-red-700 rounded-sm hover:bg-primary/20 transition-colors duration-200 font-medium"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  PDF
                                </a>
                              </td>
                              <td className="py-4 px-6">
                                <a
                                  href={student.demo}
                                  className="inline-flex items-center px-3 py-2 bg-primary/10 text-primary rounded-sm hover:bg-primary/20 transition-colors duration-200 font-medium"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Demo
                                </a>
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
                      Try adjusting your search terms or clear the search to see
                      all projects.
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
                )}
              </>
            ) : (
              <div className="text-center py-16 bg-secondary rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold text-text mb-2">
                  No Projects Yet
                </h3>
                <p className="text-text/80">
                  Student projects for this department will appear here once
                  they're available.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </MainLayout>
  );
}

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import {
  FiUploadCloud,
  FiLink,
  FiCheckCircle,
  FiImage,
  FiBookOpen,
} from "react-icons/fi";
import { PSAService } from "../../services/Psa";

const FACULTIES_DATA = [
  {
    title: "MEDICINE AND ALLIED HEALTH SCIENCES",
    slug: "medicine-and-allied-health-sciences",
    programmes: [
      { title: "Medicine", slug: "medicine" },
      { title: "Nursing", slug: "nursing" },
      { title: "Community Health", slug: "community-health" },
      { title: "Public Health", slug: "public-health" },
      {
        title: "Environmental Health Safety",
        slug: "environmental-health-safety",
      },
      {
        title: "Health Information Management",
        slug: "health-information-management",
      },
      { title: "Medical Imaging", slug: "medical-imaging" },
    ],
  },
  {
    title: "FACULTY OF SCIENCES AND COMPUTING",
    slug: "faculty-of-sciences-and-computing",
    programmes: [
      { title: "Microbiology", slug: "microbiology" },
      { title: "Biochemistry", slug: "biochemistry" },
      { title: "Biomedical Sciences", slug: "biomedical-sciences" },
      { title: "Information Technology", slug: "information-technology" },
      {
        title: "Computer Science (Networking Technology and Cybersecurity)",
        slug: "computer-science-networking-technology-and-cybersecurity",
      },
      {
        title: "Computer Science (Artificial Intelligence)",
        slug: "computer-science-artificial-intelligence",
      },
    ],
  },
  {
    title: "FACULTY OF MANAGEMENT AND SOCIAL SCIENCES",
    slug: "faculty-of-management-and-social-sciences",
    programmes: [
      {
        title: "Business Administration in Accounting",
        slug: "business-administration-in-accounting",
      },
      { title: "Business Administration", slug: "business-administration" },
      { title: "Mass Communication", slug: "mass-communication" },
      {
        title: "Management (Oil and Gas Management)",
        slug: "management-oil-and-gas-management",
      },
    ],
  },
];

export default function SubmitPsa() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const nameFromURL = queryParams.get("name") || "";
  const supervisorFromURL = queryParams.get("supervisor") || "";
  const facultyFromURL = queryParams.get("faculty") || "";
  const departmentFromURL = queryParams.get("department") || "";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const errorRef = useRef(null);

  const [formData, setFormData] = useState({
    name: nameFromURL,
    psaTitle: "",
    supervisor: supervisorFromURL,
    year: new Date().getFullYear(),
    semester: "1",
    selectedFaculty: facultyFromURL,
    selectedDepartment: departmentFromURL,
    report: null,
    demo: "",
    screenshots: [],
  });

  // Scroll to error when submitError changes
  useEffect(() => {
    if (submitError) {
      errorRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitError]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "report") {
      setFormData((prev) => ({ ...prev, report: files[0] }));
    } else if (name === "screenshots") {
      setFormData((prev) => ({ ...prev, screenshots: Array.from(files) }));
    } else if (name === "selectedFaculty") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        selectedDepartment: "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (submitError) setSubmitError("");
  };

  const availableDepartments = useMemo(() => {
    const faculty = FACULTIES_DATA.find(
      (f) => f.slug === formData.selectedFaculty
    );
    return faculty ? faculty.programmes : [];
  }, [formData.selectedFaculty]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const facultyObj = FACULTIES_DATA.find(
      (f) => f.slug === formData.selectedFaculty
    );
    const departmentObj = facultyObj?.programmes.find(
      (p) => p.slug === formData.selectedDepartment
    );

    try {
      const submissionData = new FormData();
      submissionData.append("name", formData.name);
      submissionData.append("psaTitle", formData.psaTitle);
      submissionData.append("supervisor", formData.supervisor);
      submissionData.append("year", parseInt(formData.year));
      submissionData.append("semester", parseInt(formData.semester));
      submissionData.append(
        "faculty",
        facultyObj?.title || formData.selectedFaculty
      );
      submissionData.append(
        "department",
        departmentObj?.title || formData.selectedDepartment
      );
      submissionData.append("demo", formData.demo);

      if (formData.report) {
        submissionData.append("report", formData.report);
      }

      formData.screenshots.forEach((screenshot) => {
        submissionData.append("screenshots[]", screenshot);
      });

      const result = await PSAService.submitPSA(submissionData);
      console.log(result)
      alert("PSA Project submitted successfully! Redirecting...");
      navigate("/psa");
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitError(
        error.message || "Failed to submit project. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.psaTitle &&
      formData.supervisor &&
      formData.selectedFaculty &&
      formData.selectedDepartment &&
      formData.report
    );
  };

  return (
    <MainLayout>
      <Hero
        title="Submit Your PSA Project"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
      />

      <div className="p-4 sm:p-12 max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-block">
            <h2 className="text-3xl font-bold text-text">
              Practical Skills Application
            </h2>
            <StyledUnderline />
          </div>
          <h3 className="text-xl font-semibold text-text mt-2">Report Form</h3>
          <p className="text-text/70 text-lg max-w-2xl mx-auto mt-3">
            Please provide accurate details for your Practical Skills
            Application project and upload the final report.
          </p>
        </div>

        {submitError && (
          <div
            ref={errorRef}
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
          >
            <strong>Error: </strong>
            {submitError}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-secondary p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100 space-y-8"
          encType="multipart/form-data"
        >
          {/* Student Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-text">
                Student Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                readOnly={!!nameFromURL}
                placeholder="Your Full Name"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm ${
                  nameFromURL
                    ? "bg-gray-100 cursor-not-allowed"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">
                Supervisor Name
              </label>
              <input
                type="text"
                name="supervisor"
                value={formData.supervisor}
                onChange={handleChange}
                required
                readOnly={!!supervisorFromURL}
                placeholder="Supervisor Name"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm ${
                  supervisorFromURL
                    ? "bg-gray-100 cursor-not-allowed"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
            </div>
          </div>

          {/* Faculty & Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
            <div>
              <label className="block mb-2 font-semibold text-text">
                <FiBookOpen
                  className="inline-block mr-2 text-primary"
                  size={20}
                />
                Faculty <span className="text-red-500">*</span>
              </label>
              <select
                name="selectedFaculty"
                value={formData.selectedFaculty}
                onChange={handleChange}
                required
                disabled={!!facultyFromURL}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm ${
                  facultyFromURL
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-white focus:ring-primary focus:border-primary"
                }`}
              >
                <option value="" disabled>
                  Select a Faculty
                </option>
                {FACULTIES_DATA.map((faculty) => (
                  <option key={faculty.slug} value={faculty.slug}>
                    {faculty.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">
                Department/Program <span className="text-red-500">*</span>
              </label>
              <select
                name="selectedDepartment"
                value={formData.selectedDepartment}
                onChange={handleChange}
                required
                disabled={
                  !!departmentFromURL ||
                  !formData.selectedFaculty ||
                  availableDepartments.length === 0
                }
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm ${
                  departmentFromURL
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-white focus:ring-primary focus:border-primary"
                }`}
              >
                <option value="" disabled>
                  {formData.selectedFaculty
                    ? "Select a Program"
                    : "Select a Faculty first"}
                </option>
                {availableDepartments.map((program) => (
                  <option key={program.slug} value={program.slug}>
                    {program.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Year & Semester */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-text">
                Submission Year
              </label>
              <input
                type="number"
                name="year"
                value={formData.year}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">
                Semester
              </label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-primary focus:border-primary"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Semester {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Title */}
          <div>
            <label className="block mb-2 font-semibold text-text">
              Project Title
            </label>
            <input
              type="text"
              name="psaTitle"
              value={formData.psaTitle}
              onChange={handleChange}
              required
              placeholder="e.g., Development of an AI-Powered Grading System"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          {/* File Uploads */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <div>
              <label className="block mb-3 font-semibold text-text">
                <FiUploadCloud
                  className="inline-block mr-2 text-primary"
                  size={20}
                />
                Upload Final Report (PDF)
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="report"
                accept="application/pdf"
                onChange={handleChange}
                required
                className="hidden"
                id="report-upload"
              />
              <label
                htmlFor="report-upload"
                className={`block px-4 py-3 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all ${
                  formData.report
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-gray-300 hover:border-primary/50 text-gray-500"
                }`}
              >
                {formData.report ? (
                  <span className="font-medium flex items-center justify-center">
                    <FiCheckCircle className="mr-2" size={20} />
                    File Selected: <strong>{formData.report.name}</strong>
                  </span>
                ) : (
                  "Click to select file (Max 10MB, PDF only)"
                )}
              </label>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">
                <FiImage className="inline-block mr-2 text-primary" size={20} />
                Project Screenshots (Optional, multiple)
              </label>
              <input
                type="file"
                name="screenshots"
                accept="image/*"
                multiple
                onChange={handleChange}
                className="hidden"
                id="screenshot-upload"
              />
              <label
                htmlFor="screenshot-upload"
                className="block px-4 py-3 border-2 border-dashed rounded-lg text-center cursor-pointer text-gray-500 hover:border-primary/50"
              >
                {formData.screenshots.length > 0
                  ? `${formData.screenshots.length} file(s) selected`
                  : "Click to upload screenshots (JPG, PNG, etc.)"}
              </label>

              {formData.screenshots.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {formData.screenshots.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`screenshot-${index}`}
                      className="h-24 w-full object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Demo URL */}
          <div>
            <label className="block mb-2 font-semibold text-text">
              <FiLink className="inline-block mr-2 text-primary" size={20} />
              Project Demo URL (Optional)
            </label>
            <input
              type="url"
              name="demo"
              value={formData.demo}
              onChange={handleChange}
              placeholder="https://github.com/your-project or deployed-app.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end pt-4 border-t border-gray-200">
            <Link
              to="/psa"
              className="px-8 py-3 bg-gray-200 text-text font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors mr-4"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid()}
              className={`px-8 py-3 text-secondary font-bold rounded-lg shadow-xl transition-all ${
                isSubmitting || !isFormValid()
                  ? "bg-primary/70 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90 transform hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Project"}
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}


// test:

// http://localhost:5173/submit-psa?name=Daniel%20Jesuloba&supervisor=Prof%20Tunde&faculty=faculty-of-sciences-and-computing&department=computer-science-artificial-intelligence

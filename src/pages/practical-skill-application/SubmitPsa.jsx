
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/common/ui/Hero";
import StyledUnderline from "../../components/common/ui/StyledUnderline";
import { FiUploadCloud, FiLink, FiCheckCircle, FiImage } from "react-icons/fi";

export default function SubmitPsa() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    psaTitle: "",
    supervisor: "",
    year: new Date().getFullYear(),
    semester: "1",
    report: null,
    demo: "",
    screenshots: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  //  Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "report") {
      setFormData((prev) => ({ ...prev, report: files[0] }));
    } else if (name === "screenshots") {
      setFormData((prev) => ({ ...prev, screenshots: Array.from(files) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      alert("PSA Project submitted successfully! Redirecting...");
      navigate("/psa");
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Banner */}
      <Hero
        title="Submit Your PSA Project"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
      />

      <div className="p-4 sm:p-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-text">Practical Skills Application</h2>
          <StyledUnderline />
          <h3 className="text-xl font-semibold text-text mt-2">Report Form</h3>
          <p className="text-text/70 text-lg max-w-2xl mx-auto mt-3">
            Please provide accurate details for your Practical Skills Application project and upload
            the final report.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-secondary p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100 space-y-8"
          encType="multipart/form-data"
        >
          {/*  Student Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-semibold text-text">Student Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-primary focus:border-primary focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">Supervisor Name</label>
              <input
                type="text"
                name="supervisor"
                value={formData.supervisor}
                onChange={handleChange}
                required
                placeholder="Supervisor Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           focus:ring-primary focus:border-primary focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">Submission Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-text">Semester</label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                           bg-white focus:ring-primary focus:border-primary focus:outline-none transition-all"
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Semester {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/*  Project Title */}
          <div>
            <label className="block mb-2 font-semibold text-text">Project Title</label>
            <input
              type="text"
              name="psaTitle"
              value={formData.psaTitle}
              onChange={handleChange}
              required
              placeholder="e.g., Development of an AI-Powered Grading System"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-primary focus:border-primary focus:outline-none transition-all"
            />
          </div>

          {/*  Report Upload */}
          <div className="pt-4 border-t border-gray-200">
            <label className="block mb-3 font-semibold text-text">
              <FiUploadCloud className="inline-block mr-2 text-primary" size={20} />
              Upload Final Report (PDF) <span className="text-red-500">*</span>
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
              className={`block px-4 py-3 border-2 border-dashed rounded-lg text-center cursor-pointer ${
                formData.report
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-300 hover:border-primary/50 text-gray-500"
              }`}
            >
              {formData.report ? (
                <span className="font-medium flex items-center justify-center">
                  <FiCheckCircle className="mr-2" size={20} />
                  File Selected: {formData.report.name}
                </span>
              ) : (
                "Click to select file (Max 10MB, PDF only)"
              )}
            </label>
          </div>

          {/*  Demo URL (Optional) */}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm 
                         focus:ring-primary focus:border-primary"
            />
          </div>

          {/*  Screenshots Upload */}
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
              className="block px-4 py-3 border-2 border-dashed rounded-lg text-center cursor-pointer 
                         text-gray-500 hover:border-primary/50"
            >
              {formData.screenshots.length > 0
                ? `${formData.screenshots.length} file(s) selected`
                : "Click to upload screenshots (JPG, PNG, etc.)"}
            </label>

            {/* Preview Thumbnails */}
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

          {/*  Actions */}
          <div className="flex items-center justify-end pt-4 border-t border-gray-200">
            <Link
              to="/psa"
              className="px-8 py-3 bg-gray-200 text-text font-semibold rounded-lg shadow-md 
                         hover:bg-gray-300 transition-colors mr-4"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 text-secondary font-bold rounded-lg shadow-xl transition-all ${
                isSubmitting
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

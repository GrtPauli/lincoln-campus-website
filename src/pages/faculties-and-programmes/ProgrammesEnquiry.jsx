import React, { useState } from "react";
import { FACULTIES } from "../../constants/faculties";

export default function ProgrammesEnquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    faculty: "",
    program: "",
    startDate: "",
    country: "",
    contactMethod: "email",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset program if faculty changes
    if (name === "faculty") {
      setFormData((prev) => ({ ...prev, program: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.fullName}! Your inquiry about "${formData.program}" has been submitted. We will contact you via ${formData.contactMethod}.`
    );
  };

  const countries = ["Malaysia", "Nigeria", "India", "China", "Others"];

  const selectedFaculty = FACULTIES.find(
    (f) => f.slug === formData.faculty
  );

  return (
    <div className="py-10 md:py-20 px-4">
      <div className="w-full max-w-3xl mx-auto bg-secondary rounded-xl">
        <div className="py-4 flex justify-center">
          <img
            src="https://www.online.lincoln.edu.my/App_Themes/logo/logo_college.png"
            alt="Lincoln University College"
            className="h-16 md:h-20 object-contain"
          />
        </div>

        <div className="px-4 py-6">
          <p className="text-text text-center text-sm md:text-base mb-4">
            Please fill out the form below to submit your program inquiry.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm md:text-base"
          >
            {/* Full Name + Email */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="fullName"
                  className="block font-medium text-text mb-1"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Daniel Smith"
                  className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <label
                  htmlFor="email"
                  className="block font-medium text-text mb-1"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="daniel.smith@example.com"
                  className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {/* Phone + Faculty */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block font-medium text-text mb-1"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+234 810 461 8586"
                  className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="flex-1 mt-4 md:mt-0">
                <label
                  htmlFor="faculty"
                  className="block font-medium text-text mb-1"
                >
                  Faculty:
                </label>
                <select
                  id="faculty"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="">Select a faculty</option>
                  {FACULTIES.map((faculty) => (
                    <option key={faculty.slug} value={faculty.slug}>
                      {faculty.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Programme (depends on faculty) */}
            <div>
              <label
                htmlFor="program"
                className="block font-medium text-text mb-1"
              >
                Program of Interest:
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                disabled={!selectedFaculty}
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm disabled:bg-gray-100 disabled:text-gray-500"
              >
                <option value="">Select a program</option>
                {selectedFaculty?.programmes.map((prog, idx) => (
                  <option key={idx} value={prog.title}>
                    {prog.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label
                htmlFor="startDate"
                className="block font-medium text-text mb-1"
              >
                Intended Start Date:
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block font-medium text-text mb-1"
              >
                Country of Residence:
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-medium text-text mb-1"
              >
                Additional Questions / Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your questions or comments..."
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                rows={4}
              />
            </div>

            {/* Contact Method */}
            <div>
              <p className="block font-medium text-text mb-2">
                Preferred Contact Method:
              </p>
              <div className="flex space-x-4 text-sm md:text-base">
                {["email", "whatsapp", "phone"].map((method) => (
                  <label key={method} className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-text">
                      {method.charAt(0).toUpperCase() + method.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary/90 text-secondary py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 font-medium text-sm"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

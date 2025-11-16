import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FACULTIES } from "../../constants/faculties";

export default function ProgrammeEligibility() {
  const [formData, setFormData] = useState({
    programme: "",
    qualification: "",
    year: "",
    ssceFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "ssceFile") {
      setFormData((prev) => ({ ...prev, ssceFile: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let msg = `Checking eligibility for ${formData.programme} with ${formData.qualification}, completed in ${formData.year}.`;
    if (formData.qualification === "ssce" && formData.ssceFile) {
      msg += `\nSSCE result uploaded: ${formData.ssceFile.name}`;
    }

    alert(msg);
  };

  return (
    <div className="py-10 md:py-20 px-4">
      <div className="w-full max-w-3xl mx-auto bg-secondary rounded-xl">
        <div className="py-4 flex justify-center">
          <Link to="/" className="inline-block">
            <img
              src="https://www.online.lincoln.edu.my/App_Themes/logo/logo_college.png"
              alt="Lincoln University College"
              className="h-16 md:h-20 object-contain"
            />
          </Link>
        </div>

        <div className="px-4 py-6">
          <p className="text-text text-center text-sm md:text-base mb-4">
            Please fill out the form below to check your eligibility for a
            programme.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm md:text-base"
          >
            <div>
              <label
                htmlFor="programme"
                className="block font-medium text-text mb-1"
              >
                Programme of Interest:
              </label>
              <select
                id="programme"
                name="programme"
                value={formData.programme}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">Select a programme</option>
                {FACULTIES.flatMap((faculty) =>
                  faculty.programmes.map((prog, idx) => (
                    <option key={idx} value={prog.title}>
                      {prog.title} ({faculty.title})
                    </option>
                  ))
                )}
              </select>
            </div>

            <div>
              <label
                htmlFor="qualification"
                className="block font-medium text-text mb-1"
              >
                Highest Qualification:
              </label>
              <select
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">Select qualification</option>
                <option value="ssce">SSCE</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor’s</option>
                <option value="masters">Master’s</option>
                <option value="phd">PhD</option>
              </select>
            </div>

            {formData.qualification === "ssce" && (
              <div>
                <label
                  htmlFor="ssceFile"
                  className="block font-medium text-text mb-1"
                >
                  Upload SSCE Result:
                </label>
                <input
                  type="file"
                  id="ssceFile"
                  name="ssceFile"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleChange}
                  required
                  className="w-full text-text file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary/90 file:text-secondary hover:file:bg-primary text-sm cursor-pointer"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="year"
                className="block font-medium text-text mb-1"
              >
                Year of Completion:
              </label>
              <input
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g. 2022"
                required
                className="w-full px-3 py-2 border border-text/70 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary/90 text-secondary py-2 cursor-pointer px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 font-medium text-sm"
              >
                CHECK ELIGIBILITY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

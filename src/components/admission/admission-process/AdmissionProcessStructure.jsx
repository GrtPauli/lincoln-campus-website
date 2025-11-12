import React from "react";
import StyledUnderline from "../../common/ui/StyledUnderline";

export default function AdmissionProcessStructure() {
  const steps = [
    {
      title: "Visit the Application Portal",
      details: ["Go to apply.lincoln.edu.ng to begin your application."],
    },
    {
      title: "Complete the Online Application Form",
      details: [
        "Fill out all required information accurately.",
        "Upload all necessary documents (e.g., academic results, ID, passport photo, etc.).",
        "Review your details and submit your application.",
      ],
    },
    {
      title: "Login to Your Dashboard",
      details: [
        "After submission, you will be redirected to the login page.",
        "Use your registered email and password to log in.",
        "Your dashboard will display your Admission Eligibility Status and Admission Status.",
      ],
    },
    {
      title: "Eligibility Review",
      details: [
        "Your application will be reviewed by the admissions team.",
        "Once reviewed, your Eligibility Status will be updated.",
        "If you are eligible for the course you applied for, you will be prompted to pay the application fee.",
      ],
    },
    {
      title: "Pay the Application Fee",
      details: [
        "Proceed to make the required application fee payment.",
        "Once payment is confirmed, your admission processing will begin.",
      ],
    },
    {
      title: "Admission Issuance",
      details: [
        "After successful processing, your Admission Letter will be made available on your dashboard.",
        "You will see a button labeled “Accept Admission.”",
      ],
    },
    {
      title: "Accept Your Admission",
      details: [
        "Click the “Accept Admission” button.",
        "You will be prompted to pay an Acceptance Fee of ₦20,000.",
        "After successful payment, your admission will be officially accepted.",
      ],
    },
    {
      title: "Retrieve Your Student Portal (LLS) Credentials",
      details: [
        "Once you have accepted your admission, a new button will appear on your dashboard to Get LLS Login Credentials.",
        "Click the button to retrieve your LLS username and password.",
        "Use these credentials to log in at lls.lincoln.edu.ng.",
      ],
    },
    {
      title: "Access the Student Portal (LLS)",
      details: [
        "Login to the Student Portal (LLS) to:",
        "View your student profile.",
        "Access academic information, course registration, and payments.",
        "Begin your journey as a Lincoln student.",
      ],
    },
  ];

  return (
    <div className="p-12 max-sm:p-5">
      <div className="inline-block mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Lincoln University Application Procedure
        </h2>
        <StyledUnderline />
      </div>

      <p className="mb-8 text-gray-700 leading-relaxed">
        At Lincoln University, our application process is fully online and
        streamlined through two portals:
        <br />
        <span className="font-semibold">Application Portal:</span>
        <a
          href="https://apply.lincoln.edu.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          apply.lincoln.edu.ng
        </a>
        <br />
        <span className="font-semibold">Student Portal (LLS):</span>
        <a
          href="https://lls.lincoln.edu.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          lls.lincoln.edu.ng
        </a>
      </p>

      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-50 p-5 rounded-2xl shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-semibold text-xl mb-3">
              Step {index + 1}: {step.title}
            </h3>
            <ul className="pl-5 list-disc flex flex-col gap-3 text-gray-700">
              {step.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

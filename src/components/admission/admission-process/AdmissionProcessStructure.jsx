import React from "react";
import StyledUnderline from "../../common/ui/StyledUnderline";

export default function AdmissionProcessStructure() {
  return (
    <div className="p-12 max-sm:p-5">
      <div className="inline-block mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
          Admission Process
        </h2>
        <StyledUnderline />
      </div>

      <div className="flex flex-col gap-10">
        <div>
          <h1 className="font-semibold text-xl mb-3">1. Walk-In Counseling</h1>
          <ul className="pl-5 list-disc flex flex-col gap-3">
            <li>
              Visit the campus during counseling hours (Mon-Fri: 9 AM-6 PM; Sat:
              9 AM-2 PM).
            </li>
            <li>
              Bring certificates/transcripts (SSCE/A Levels or equivalent) for
              program guidance.
            </li>
            <li>
              Counselors provide career advice, program details, and assist with
              the online application.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-xl mb-3">2.Online Application</h1>
          <ul className="pl-5 list-disc flex flex-col gap-3">
            <li>Complete and submit the online application form.</li>
            <li>Pay the application fee as instructed.</li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-xl mb-3">
            3.Review & Admission Letter
          </h1>
          <ul className="pl-5 list-disc flex flex-col gap-3">
            <li>Application reviewed by admission team.</li>
            <li>
              Admission letter issued within 3 working days after fee payment.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-xl mb-3">
            4. Registration & Class Commencement
          </h1>
          <ul className="pl-5 list-disc flex flex-col gap-3">
            <li>Complete registration process.</li>
            <li>Begin classes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

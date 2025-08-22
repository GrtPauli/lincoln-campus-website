import React from "react";
import Accordion from "../../common/ui/Accordion";

export default function ResearchProjectsAccordion() {
  const researchProjects = [
    {
      title: "Determining Factors of Adoption and Rejection of Takaful by Malaysian Youths",
      content: (
        <div className="space-y-3 text-sm text-text">
          <p>
            <span className="font-semibold">Duration:</span> 15th April 2021 – Contd.
          </p>
          <p>
            <span className="font-semibold">Amount:</span> RM 250,000
          </p>
          <p>
            <span className="font-semibold">Sponsor:</span> FWD Takaful Berhad
          </p>

          <div>
            <p className="font-semibold">Researchers:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Prof Dr Rusni Hassan (Principal Researcher)</li>
              <li>Assoc. Prof Dr Adnan Yusoff</li>
              <li>Dr Syed Ahmed Salman</li>
              <li>Hajjah Asral Widad Hj Ahmad Asnawi</li>
              <li>Dr Syarah Syahira Yusoff</li>
              <li>Dr Nor Razinah Mohd Zin</li>
            </ul>
          </div>

          <a
            href="#"
            className="text-primary font-medium hover:underline block mt-2"
          >
            View
          </a>
        </div>
      ),
    },
    {
      title: "A Study on the Effectiveness of Online Learning During the COVID-19 Pandemic",
      content: (
        <div className="space-y-3 text-sm text-text">
          <p>
            <span className="font-semibold">Duration:</span> 1st June 2020 – 31st May 2021
          </p>
          <p>
            <span className="font-semibold">Amount:</span> RM 150,000
          </p>
          <p>
            <span className="font-semibold">Sponsor:</span> Ministry of Higher Education Malaysia
          </p>

          <div>
            <p className="font-semibold">Researchers:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Dr Ahmad Zaki Ismail (Principal Researcher)</li>
              <li>Dr Nurul Hidayah Mohd Noor</li>
              <li>Dr Farah Nadia Abdul Rahman</li>
            </ul>
          </div>

          <a
            href="#"
            className="text-primary font-medium hover:underline block mt-2"
          >
            View
          </a>
        </div>
      ),
    },
    {
      title: "Impact of Social Media on Youth Mental Health",
      content: (
        <div className="space-y-3 text-sm text-text">
          <p>
            <span className="font-semibold">Duration:</span> 1st January 2022 – 31st December 2022
          </p>
          <p>
            <span className="font-semibold">Amount:</span> RM 100,000
          </p>
          <p>
            <span className="font-semibold">Sponsor:</span> Malaysian Communications and Multimedia Commission (MCMC)
          </p>

          <div>
            <p className="font-semibold">Researchers:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Dr Siti Aishah Ismail (Principal Researcher)</li>
              <li>Dr Mohd Faizal Abdul Rahman</li>
              <li>Dr Nurul Ain Mohd Yusof</li>
            </ul>
          </div>

          <a
            href="#"
            className="text-primary font-medium hover:underline block mt-2"
          >
            View
          </a>
        </div>
      ),
    },
    {
      title: "Exploring the Effects of Climate Change on Malaysian Agriculture",
      content: (
        <div className="space-y-3 text-sm text-text">
          <p>
            <span className="font-semibold">Duration:</span> 1st March 2021 – 28th February 2022
          </p>
          <p>
            <span className="font-semibold">Amount:</span> RM 300,000
          </p>
          <p>
            <span className="font-semibold">Sponsor:</span> Ministry of Agriculture and Food Security Malaysia
          </p>

          <div>
            <p className="font-semibold">Researchers:</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Dr Ahmad Zaki Ismail (Principal Researcher)</li>
              <li>Dr Nurul Hidayah Mohd Noor</li>
              <li>Dr Farah Nadia Abdul Rahman</li>
            </ul>
          </div>

          <a
            href="#"
            className="text-primary font-medium hover:underline block mt-2"
          >
            View
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-[80%] mx-auto mb-8">
      <Accordion data={researchProjects} />
    </div>
  );
}

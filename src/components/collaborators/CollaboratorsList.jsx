import React from "react";
import Accordion from "../common/ui/Accordion";
import MainLayout from "../../layouts/MainLayout";



const foreignCollaborators = [
  {
    title: "Lincoln University College Malaysia",
    content: (
      <div className="space-y-3 text-sm text-text">
        <div className="flex gap-5">
       
          <img
            src="https://via.placeholder.com/300x200?text=Collaboration+Image"
            className="h-[200px] w-auto object-cover rounded-xl"
            alt="Lincoln University College Malaysia"
          />
          <div>
            <p className="font-semibold text-2xl mb-2">
              Dr. Amiya Bhaumik
            </p>
            <p className="">CEO & Founder, LUC Malaysia</p>
          </div>
        </div>
        <p className="leading-loose">
          Our primary foreign partner is Lincoln University College, Malaysia. This collaboration
          is the cornerstone of our academic and administrative framework,
          ensuring our programs meet international standards and offer a global
          perspective to our students. Through this partnership, we share
          knowledge, resources, and research opportunities that benefit our entire
          university community.
        </p>
      </div>
    ),
  },
  {
    title: "University of Kumo",
    content: (
      <div className="space-y-3 text-sm text-text">
        <p className="leading-loose">
          We have an academic partnership with the University of Kumo, focusing on joint research
          projects and student exchange programs in various fields. This collaboration
          strengthens our ties with local and regional institutions, providing
          students with valuable exposure to diverse academic environments.
        </p>
      </div>
    ),
  },
  {
    title: "London School of Economics and Political Science",
    content: (
      <div className="space-y-3 text-sm text-text">
        <p className="leading-loose">
          In an ongoing collaboration, we are working with the London School of Economics
          on a series of seminars and workshops focused on global economic
          trends and policy development. This partnership offers our students unique
          insights from world-renowned experts.
        </p>
      </div>
    ),
  },
];

export default function CollaboratorsList() {
  return (
   
        <div className="max-w-[80%] mx-auto py-10">
            <h1 className="text-4xl font-bold mb-8">Foreign Collaborators</h1>
            <Accordion data={foreignCollaborators} />
        </div>
  
  );
}
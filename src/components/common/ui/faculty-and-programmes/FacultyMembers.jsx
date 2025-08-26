import React from "react";
import StyledUnderline from "../StyledUnderline";

export default function FacultyMembers({ title = "Faculty Members", members }) {
  return (
    <div id="faculty-members" className="w-full bg-secondary p-12 py-14 ">
      <div>
        <div className="mb-9 inline-block">
          <h1 className="text-2xl text-text">{title}</h1>
          <StyledUnderline />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col items-center p-6">
                <div className="mb-5">
                  <img
                    className="h-36 w-36 rounded-full object-cover border border-border shadow-sm"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-text mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-text/60 leading-relaxed">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import StyledUnderline from "../../common/ui/StyledUnderline";

export default function IntroductionContent() {
  return (
    <div className="w-full p-12">
      <div className="mb-8">
        <div className="mb-2 inline-block">
          <h1 className="text-3xl">Vision</h1>
          <StyledUnderline />
        </div>

        <p>
          To be a leading private research institution so as to serve as a
          valuable resource for industry and society and remain a source of
          pride. To formulate appropriate solutions for human problems as well
          as support the livelihood of the society.
        </p>
      </div>

      <div className="mb-8">
        <div className="mb-2 inline-block">
          <h1 className="text-3xl">Mission</h1>
          <StyledUnderline />
        </div>

        <p>
          To promote the development of research activities involving innovative studies along with the development of creative and scholarly activities. To facilitate the planning and development of novel proposals to secure extra mural funding for proper execution research work; and To organize appropriate and systematic dissemination of the research work and scholarly achievements of the faculty members and research scholars.
        </p>
      </div>
    </div>
  );
}

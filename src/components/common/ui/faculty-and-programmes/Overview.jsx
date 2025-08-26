import React from "react";
import StyledUnderline from "../StyledUnderline";

export default function Overview({ id, title, paragraphs }) {
  return (
    <div id={id} className="w-full p-12 py-14">
      <div className="mb-3 inline-block">
        <h1 className="text-2xl">{title}</h1>
        <StyledUnderline />
      </div>

      {paragraphs.map((text, i) => (
        <p key={i} className="mb-3 last:mb-0">
          {text}
        </p>
      ))}
    </div>
  );
}

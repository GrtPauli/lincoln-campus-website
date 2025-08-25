import React from "react";

export default function DeanMessage({ dean }) {
  return (
    <div
      id="dean-message"
      className="w-full p-12 py-14 flex flex-col md:flex-row items-start justify-center gap-12"
    >
      <div className="flex-[.3] flex flex-col items-center md:items-start">
        <img
          src={dean.image}
          alt={dean.name}
          className="mb-3 w-[280px] md:w-[400px] rounded-xl border-2 border-transparent border-b-primary"
        />
        <h1 className="font-bold text-xl">{dean.name}</h1>
        <p>{dean.title}</p>
        <p>{dean.school}</p>
      </div>

      <div className="flex-[.6] p-0 md:p-12">
        <h1 className="font-bold text-3xl md:text-4xl mb-3">
          {dean.heading || "Message By The Dean"}
        </h1>

        {dean.message.map((paragraph, index) => (
          <p key={index} className="mb-3 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

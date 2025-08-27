import React from "react";
import StyledUnderline from "../StyledUnderline";
import { Link } from "react-router-dom";

export default function Programmes({ id, title, programmes }) {
  return (
    <div id={id} className="w-full p-12 py-14">
      <div className="mb-9 inline-block">
        <h1 className="text-2xl">{title}</h1>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
        {programmes.map((programme, index) => (
          <Link
            key={index}
            to={programme.href}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 mb-4 overflow-hidden rounded-full bg-gray-50 flex items-center justify-center md:w-28 md:h-28">
              <img
                src={programme.image}
                alt={programme.title}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
              {programme.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

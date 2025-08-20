import React from "react";
import AboutUsImage from '../../assets/about.png';


function AboutHero() {
  return (
    <div
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${AboutUsImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-white text-4xl font-bold z-10 text-center px-4">
        About Us
      </h1>
    </div>
  );
}

export default AboutHero;

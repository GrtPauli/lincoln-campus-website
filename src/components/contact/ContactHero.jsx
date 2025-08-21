import React from "react";

export default function ContactHero() {
  return (
    <section
      className="relative w-full h-[200px] md:h-[200px] lg:h-[400px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1740560051533-3acef26ace95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnRhY3QlMjB1c3xlbnwwfDB8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10  bg-opacity-40"></div>

      <div className="absolute md:left-12 md:bottom-10 bg-secondary/60 p-6 flex items-center shadow-sm border border-transparent border-l-primary border-l-8 ">
        <h1 className="text-2xl md:text-4xl font-semibold text-text">
          Contact Us
        </h1>
      </div>
    </section>
  );
}

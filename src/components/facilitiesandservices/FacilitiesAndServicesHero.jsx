import React from "react";

export default function FacilitiesAndServicesHero() {
  return (
    <section
      className="relative w-full h-[200px] md:h-[200px] lg:h-[300px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1693035341269-8bbcfe73ff5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHVuaXZlcnNpdHklMjBsaWJyYXJ5fGVufDB8MHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10  bg-opacity-40"></div>

      <div className="absolute md:left-12 md:bottom-10 bg-secondary/60 p-6 flex items-center shadow-sm border border-transparent border-l-primary border-l-8 ">
        <h1 className="text-2xl md:text-4xl font-semibold text-text">
          Facilities and Services
        </h1>
      </div>
    </section>
  );
}

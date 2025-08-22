import React from "react";

export default function Hero({
  title,
  backgroundImage,
  height = "h-[200px] md:h-[250px] lg:h-[300px]",
  overlayOpacity = "bg-black/40",
  align = "md:left-12 md:bottom-10",
}) {
  return (
    <section
      className={`relative w-full ${height} flex items-center justify-center`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Title box */}
      <div
        className={`absolute ${align} bg-secondary/60 p-6 flex items-center shadow-sm border border-transparent border-l-primary border-l-8`}
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-text">{title}</h1>
      </div>
    </section>
  );
}

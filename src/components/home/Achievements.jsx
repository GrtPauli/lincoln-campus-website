import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const achievents = [
  {
    id: 1,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/setara.webp",
  },
  {
    id: 2,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/06/The-new.jpg",
  },
  {
    id: 3,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/01/ISO.webp",
  },
  {
    id: 4,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/06/QS-2025A-new.jpg",
  },
  {
    id: 5,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/04/iso1.jpg",
  },
  {
    id: 6,
    image: "https://www.lincoln.edu.my/wp-content/uploads/2025/04/iso2.jpg",
  },
  {
    id: 7,
    image:
      "https://www.lincoln.edu.my/wp-content/uploads/2025/01/Student-Mobility.webp",
  },
];

function Achievements() {
  return (
    <div className="w-full p-12 py-14">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">
          Our Achievements
        </h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto justify-center items-center">
        {achievents.map((ach) => (
          <div
            key={ach.id}
            className="bg-secondary border border-border rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 p-4 flex justify-center items-center"
          >
            <img
              src={ach.image}
              alt="achievement"
              className="h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;

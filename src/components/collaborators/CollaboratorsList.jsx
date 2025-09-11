import React from "react";


const collaboratorLogos = [
  {
    id: 1,
    src: "/src/assets/EXCELLANZ.jpg",
    alt: "Excellanz Education",
  },
  {
    id: 2,
    src: "/src/assets/ism.jpg",
    alt: "ISM",
  },
  {
    id: 3,
    src: "/src/assets/SIIHM_Logo.jpg",
    alt: "SIHHM",
  },
  {
    id: 4,
    src: "/src/assets/timeslogo.jpg",
    alt: "Times Education",
  },
  {
    id: 5,
    src: "/src/assets/Trinity_International_College2.jpg",
    alt: "YEC Learning Center",
  },
  {
    id: 6,
    src: "/src/assets/txwes.jpg",
    alt: "Texas Wesleyan University",
  },
  {
    id: 7,
    src: "/src/assets/ubt.jpg",
    alt: "Universal Business and Technology Campus",
  },
  {
    id: 8,
    src: "/src/assets/ucr.jpg",
    alt: "UC Riverside",
  },
  {
    id: 9,
    src: "/src/assets/udc.jpg",
    alt: "UDC Education",
  },
  {
    id: 10,
    src: "/src/assets/unimus.jpg",
    alt: "UNIMUS",
  },
  {
    id: 11,
    src: "/src/assets/usm.jpg",
    alt: "Universiti Sains Malaysia",
  },
  {
    id: 12,
    src: "/src/assets/usm-indonesia.jpg",
    alt: "USM Indonesia",
  },
  {
    id: 13,
    src: "/src/assets/vanlang.jpg",
    alt: "Van Lang University",
  },
  {
    id: 14,
    src: "/src/assets/VAU-logo3x106062020.jpg",
    alt: "Vivekananda American University",
  },
  {
    id: 15,
    src: "/src/assets/victoria_college.jpg",
    alt: "Victoria College",
  },
  {
    id: 16,
    src: "/src/assets/visayas-state-university.jpg",
    alt: "Visayas State University",
  },
  {
    id: 17,
    src: "/src/assets/VSM.jpg",
    alt: "VSM+U",
  },
  {
    id: 18,
    src: "/src/assets/WBSU.jpg",
    alt: "West Bengal State Council",
  },
  {
    id: 19,
    src: "/src/assets/Western-Mega-College.jpg",
    alt: "WUMC Omega College",
  },
  {
    id: 20,
    src: "/src/assets/studylink.jpg",
    alt: "Study Link",
  },
  {
    id: 21,
    src: "/src/assets/winstone.jpg",
    alt: "Winston School of Culinary",
  },
  {
    id: 22,
    src: "/src/assets/xi.jpg",
    alt: "Xi Lian Guang Bo",
  },
  {
    id: 23,
    src: "/src/assets/xin.jpg",
    alt: "Xin Yucheng Business School",
  },
  {
    id: 24,
    src: "/src/assets/Y-Max-Logo.jpg",
    alt: "Y-Max College",
  },
 

];

export default function CollaboratorsList() {
  return (
    <div className="max-w-[90%] mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-left mb-12 text-gray-800">
        Foreign Collaborators
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
        {collaboratorLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center p-4 h-32 w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
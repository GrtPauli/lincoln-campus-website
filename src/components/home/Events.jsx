import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const events = [
  {
    id: 1,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/LIMC-2025-Invitation-722x1024.png",
    title: "LIMC 2025 – Agenda – Inauguration",
    href: "/events/limc-2025",
    tag: "Forthcoming",
    date: "22 Aug 2025",
  },
  {
    id: 2,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/2-2-1024x1024.jpg",
    title:
      "Zyvia Moringa & Ginger Herbal Bath Soap Launch – From Research to Market-Ready Innovation",
    href: "/events/zyvia-launch",
    tag: "Events",
    date: "15 Jul 2025",
  },
  {
    id: 3,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/08/Picture5.jpg",
    title: "LUC Engineering Students Win Two Awards at ESTE 2025",
    href: "/events/este-2025",
    tag: "Events",
    date: "10 Jun 2025",
  },
];

export default function Events() {
  return (
    <section className="w-full p-12 py-14">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">Events</h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {event.tag}
              </span>
              <span className="absolute bottom-3 right-3 bg-text/70 text-white text-xs px-2 py-1 rounded-md">
                {event.date}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-text mb-3">
                {event.title}
              </h3>
              <a
                href={event.href}
                className="mt-auto text-primary font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-center items-center mt-10 gap-4">
        <button className="px-4 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition cursor-pointer">
          Previous
        </button>
        <button className="px-4 py-2 rounded-xl bg-primary text-white font-medium hover:bg-red-700 transition cursor-pointer">
          Next
        </button>
      </div> */}
    </section>
  );
}

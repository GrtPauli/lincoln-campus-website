import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const news = [
  {
    id: 1,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/06/image-1.png",
    title: "Lincoln University College Shines in Times Higher Education’s 2025 Impact Rankings",
    href: "/news/limc-2025",
  },
  {
    id: 2,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/04/ca883404-3688-4c79-b7a6-c2eda6de8e79-1024x768.jpg",
    title:
      "5th International Conference on “Transformational Impact of AI on Business Competitiveness”",
    href: "/news/zyvia-launch",
  },
  {
    id: 3,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/04/VASKAR.jpg",
    title: "MoU Signing between ITM University Gwalior, India and Lincoln University College, Malaysia",
    href: "/news/este-2025",
  },
];

export default function News() {
  return (
    <section className="w-full p-12 py-14">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">News</h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {news.map((event) => (
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

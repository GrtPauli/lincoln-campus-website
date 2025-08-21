import React from "react";
import StyledUnderline from "../common/ui/StyledUnderline";

const blog = [
  {
    id: 1,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/07/24-789x1024.jpg",
    title: "LUC Professor of Biochemistry Prof. Dr. Krishnajyoti Goswami’s Global Recognition for Research on Lead Toxicity and Kidney Health",
    href: "/blog/limc-2025",
  },
  {
    id: 2,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/07/image.jpg",
    title:
      "Lincoln University College Celebrates Student Publication in The Daily Observer",
    href: "/blog/zyvia-launch",
  },
  {
    id: 3,
    image: "https://posts.lincoln.edu.my/wp-content/uploads/2025/07/MLT.jpg",
    title: "LUC Librarian Ms. Fatien Azliea Recognised among Top 3 in Prestigious Future PTTR (S) RATE Course Series 1/2025",
    href: "/blog/este-2025",
  },
];

export default function Blog() {
  return (
    <section className="w-full p-12 py-14">
      <div className="mb-8 inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-text">Blog</h2>
        <StyledUnderline />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blog.map((event) => (
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
        <button className="px-4 py-2 rounded-xl border border-border text-text hover:bg-border transition cursor-pointer">
          Previous
        </button>
        <button className="px-4 py-2 rounded-xl bg-primary/90 text-white font-medium hover:bg-primary transition cursor-pointer">
          Next
        </button>
      </div> */}
    </section>
  );
}

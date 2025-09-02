import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="bg-red-700 text-white px-2">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-start">
            <li>
              <a href="#" className="hover:underline">
                Scholarships
              </a>
            </li>
            <li>
              <a href="http://apply.lincoln.edu.ng" className="hover:underline">
                Online Application
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Lincoln Online System
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

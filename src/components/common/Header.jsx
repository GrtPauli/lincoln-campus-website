import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="bg-red-700 text-white px-2">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          {/* Top nav links - auto adjust on mobile */}
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-start">
            <li>
              <a href="#" className="hover:underline">
                Scholarships
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
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
                Online Payment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Staff Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                University Representative
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                360 Virtual Campus
              </a>
            </li>
          </ul>
          {/* Search icon */}
          <div className="flex items-center">
            <button className="p-2 hover:bg-red-800 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

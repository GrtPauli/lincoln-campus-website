import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-red-700 text-white px-2">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-start divide-x divide-white/40">
            <li className="px-2">
              <a
                href="http://apply.lincoln.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Online Application
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://lls.lincoln.edu.ng/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Lincoln Online System
              </a>
            </li>
            <li className="px-2">
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>

            <li className="px-2 relative group">
              <span className="hover:underline flex items-center gap-1 cursor-pointer">
                Campuses ▾
              </span>
              <ul
                className="absolute left-0 top-full mt-1 bg-white text-black rounded shadow-lg z-50 min-w-[220px] 
               hidden group-hover:block"
              >
                <li>
                  <Link
                    to="/campuses/gombe"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Lincoln University Malaysia (Gombe Campus)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/campuses/nsuk"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Lincoln University Malaysia (NSUK Campus)
                  </Link>
                </li>
              </ul>
            </li>

            <li className="px-2">
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

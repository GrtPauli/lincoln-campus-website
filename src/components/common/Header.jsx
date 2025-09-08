// src/components/common/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="bg-red-700 text-white px-2">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-start">
            <li>
              <Link to="/scholarships" className="hover:underline">
                Scholarships
              </Link>
            </li>
            <li>
              <a
                href="http://apply.lincoln.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Online Application
              </a>
            </li>
            <li>
              <Link to="/lincoln-online-system" className="hover:underline">
                Lincoln Online System
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/psa" className="hover:underline">
                Practical Skill Application
              </Link>
            </li>
            <li>
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

import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: QUICK LINKS */}
        <div>
          <h4 className="text-xl font-bold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Online Application Form
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                University Representative Enquiry
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Unauthorized Representatives
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Holidays
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Foreign Collaborators
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                About Alumni Society
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Arrival Information
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: ADDITIONAL INFO */}
        <div>
          <h4 className="text-xl font-bold mb-4">ADDITIONAL INFO</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/examinations-and-regulations"
                className="flex items-center hover:text-red-600 transition-colors"
              >
                <span className="text-red-600 mr-2">&#x2022;</span>
                Examination Rules and Regulations
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Verify Result/Certificate
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                <span className="text-red-600 mr-2">&#x2022;</span>
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: GET IN TOUCH */}
        <div>
          <h4 className="text-xl font-bold mb-4">GET IN TOUCH</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 mt-1">&#x2022;</span>
              <p>Kolej Universitiy Lincoln, No. 12, 14, 16 & 18, Jalan SS 6/12, 47301 Petaling Jaya, Selangor</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">&#x2022;</span>
              <p>+603-7806 3478 (Hotline)</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">&#x2022;</span>
              <p>+1300 880 111 (Malaysia Toll Free)</p>
            </li>
            <li className="flex items-center">
              <span className="text-red-600 mr-2">&#x2022;</span>
              <a href="mailto:info@lincoln.edu.my" className="hover:text-red-600 transition-colors">info@lincoln.edu.my</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900 py-4 text-center">
        <p>©2025 Lincoln University College. All rights reserved.</p>
      </div>
    </footer>
  );
}
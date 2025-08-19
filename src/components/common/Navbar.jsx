// Navbar.jsx
import React from 'react';
 // Import the new component

const Navbar = () => {
  // Define data for your dropdown menus
  const lucItems = [
    { label: 'About Us', link: '#' },
    { label: 'Vision & Mission', link: '#' },
  ];

  const schoolsItems = [
    { label: 'Undergraduate', link: '#' },
    { label: 'Postgraduate', link: '#' },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-red-700 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          {/* Top nav links */}
          <ul className="flex space-x-4 text-sm">
            <li><a href="#" className="hover:underline">Scholarships</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Online Application</a></li>
            <li><a href="#" className="hover:underline">Lincoln Online System</a></li>
            <li><a href="#" className="hover:underline">Online Payment</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Staff Login</a></li>
            <li><a href="#" className="hover:underline">University Representative</a></li>
            <li><a href="#" className="hover:underline">360 Virtual Campus</a></li>
          </ul>
          {/* Search icon */}
          <div className="flex items-center">
            <button className="p-2 hover:bg-red-800 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <nav className="bg-white text-gray-800 shadow-md">
        <div className="container mx-auto px-4 flex items-center py-4">
          {/* Logo */}
          <a href="/" className="mr-8">
            <img src="/path/to/your/logo.png" alt="Lincoln University College Logo" className="h-16" />
          </a>
          {/* Main nav links with dropdowns */}
          <ul className="flex space-x-8 text-lg font-semibold">
            <Dropdown title="Welcome To LUC" items={lucItems} />
            <Dropdown title="Schools & Programmes" items={schoolsItems} />
            <li><a href="#" className="py-2">Student Corner</a></li>
            <li><a href="#" className="py-2">Research & Conferences</a></li>
            <li><a href="#" className="py-2">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
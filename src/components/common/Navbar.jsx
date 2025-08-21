import React, { useState } from 'react';

// Define the Dropdown component inside Navbar.jsx
const Dropdown = ({ title, items, isOpen, onToggle }) => {
  return (
    <li className="relative">
      <button onClick={onToggle} className="flex items-center py-2">
        {title}
        <svg
          className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg rounded-md mt-2 w-48 z-10 right-0">
          {items.map((item, index) => (
            <a key={index} href={item.link} className="block px-4 py-2 hover:bg-gray-100">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

// Main Navbar component with responsiveness
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };
  
  // Data for dropdown menus
  const lucItems = [
    { label: 'About Us', link: '/about-us' },
    { label: 'Recognitions & Accreditations', link: '/recognitions' }, // Corrected link
    { label: 'Facilities and Services', link: '#' },
    { label: 'Downloads', link: '#' },
    { label: 'Collaboration', link: '#' },
    { label: 'Posts', link: '#' },
  ];

  const schoolsItems = [
    { label: 'School of Medicine', link: '#' },
    { label: 'School of Dentistry', link: '#' },
    { label: 'School of Nursing & Applied Science', link: '#' },
    { label: 'Schools of Business & Management', link: '#' },
    { label: 'Schools of Hospitality & Tourism', link: '#' },
    { label: 'Schools of Education', link: '#' },
    { label: 'Schools of Accounting & Finace', link: '#' },
    { label: 'Schools of Social Science, Arts and Humanities', link: '#' },
    { label: 'Schools of Ai Computing & Multimedia', link: '#' },
    { label: 'Schools of Enginnering and Built Environment', link: '#' },
    { label: 'Schools of Performing Arts & Design', link: '#' },
    { label: 'Schools of Innovation And Sustainsbility', link: '#' },
  ];

  const studentCornerItems = [
    { label: 'Current Students', link: '#' },
    { label: 'Prospective Student', link: '#' },
    { label: 'Application for Events', link: '#' },
    { label: 'Credit Transfer Application', link: '#' },
    { label: 'Application Form For Tution Centers', link: '#' },
    { label: 'Application for Ph.D/Doctorate', link: '#' },
  ];

  const researchAndConferencesItems = [
    { label: 'Introduction', link: '#' },
    { label: 'Research Projects', link: '#' },
    { label: 'Publications of Faculty Members', link: '#' },
    { label: 'Staff Edited Books', link: '#' },
    { label: 'Other Publications', link: '#' },
    { label: 'Book Published', link: '#' },
    { label: 'Journal Published', link: '#' },
  ];

  const contactUsItems = [
    { label: 'General Enquiry', link: '#' },
    { label: 'Admissions Office', link: '#' },
    { label: 'Phone & Email', link: '#' },
    { label: 'Social Media', link: '#' },
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-red-700 text-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          {/* Top nav links - auto adjust on mobile */}
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm justify-center md:justify-start">
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
        <div className="container mx-auto px-4 flex items-center py-4 justify-between">
          {/* Logo */}
          <a href="/" className="mr-8 w-48">
            <img src="/src/assets/lincolnlogo.png" alt="Lincoln University College Logo" className="h-16" />
          </a>
          
          {/* Hamburger menu button for mobile */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Main nav links for desktop */}
          <ul className="hidden md:flex space-x-9 text-lg font-semibold">
            <Dropdown 
              title="Welcome To LUC" 
              items={lucItems} 
              isOpen={openDropdown === 'luc'} 
              onToggle={() => handleDropdownToggle('luc')} 
            />
            <Dropdown 
              title="Schools & Programmes" 
              items={schoolsItems} 
              isOpen={openDropdown === 'schools'} 
              onToggle={() => handleDropdownToggle('schools')} 
            />
            <Dropdown 
              title="Student Corner" 
              items={studentCornerItems} 
              isOpen={openDropdown === 'studentCorner'} 
              onToggle={() => handleDropdownToggle('studentCorner')} 
            />
            <Dropdown 
              title="Research & Conferences" 
              items={researchAndConferencesItems} 
              isOpen={openDropdown === 'research'} 
              onToggle={() => handleDropdownToggle('research')} 
            />
            <Dropdown 
              title="Contact Us" 
              items={contactUsItems} 
              isOpen={openDropdown === 'contact'} 
              onToggle={() => handleDropdownToggle('contact')} 
            />
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4 px-4 font-semibold">
            <Dropdown 
              title="Welcome To LUC" 
              items={lucItems} 
              isOpen={openDropdown === 'luc'} 
              onToggle={() => handleDropdownToggle('luc')} 
            />
            <Dropdown 
              title="Schools & Programmes" 
              items={schoolsItems} 
              isOpen={openDropdown === 'schools'} 
              onToggle={() => handleDropdownToggle('schools')} 
            />
            <Dropdown 
              title="Student Corner" 
              items={studentCornerItems} 
              isOpen={openDropdown === 'studentCorner'} 
              onToggle={() => handleDropdownToggle('studentCorner')} 
            />
            <Dropdown 
              title="Research & Conferences" 
              items={researchAndConferencesItems} 
              isOpen={openDropdown === 'research'} 
              onToggle={() => handleDropdownToggle('research')} 
            />
            <Dropdown 
              title="Contact Us" 
              items={contactUsItems} 
              isOpen={openDropdown === 'contact'} 
              onToggle={() => handleDropdownToggle('contact')} 
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
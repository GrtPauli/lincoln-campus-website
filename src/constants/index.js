export const MENU_LINKS = [
  {
    key: "welcome-to-luc",
    label: "Welcome to LUC",
    isParent: true,
    children: [
      {
        key: "about-us",
        label: "About Us",
        to: "/about-us",
      },
      {
        key: "recognitions-and-accreditations",
        label: "Recognitions & Accreditations",
        to: "/recognitions-and-accreditations",
      },
      {
        key: "facilities-and-services",
        label: "Facilities & Services",
        to: "/facilities-and-services",
      },
      {
        key: "downloads",
        label: "Downloads",
        children: [
          { key: "profile", label: "Profile" },
          { key: "brochure", label: "Brochure" },
        ],
      },
      {
        key: "collaboration",
        label: "Collaboration",
        children: [
          { key: "international-affairs", label: "International Affairs" },
        ],
      },
      {
        key: "posts",
        label: "Posts",
        children: [
          { key: "all-events", label: "All Events", to: "/posts/events" },
          { key: "news", label: "News", to: "/posts/news" },
          { key: "blog", label: "Blog" },
          { key: "staff-activity", label: "Staff Activity" },
        ],
      },
    ],
  },
  {
    key: "faculties-and-programmes",
    label: "Faculties & Programmes",
    isParent: true,
  children: [
    {
      key: "school-of-medicine",
      label: "School of Medicine",
      to: "/faculties-and-programmes/school-of-medicine",
    }
  ],
  },
  {
    key: "student-corner",
    label: "Student Corner",
    isParent: true,
    children: [
      {
        key: "current-students",
        label: "Current Students",
        children: [
          { key: "lls", label: "Lincoln Learning System (LLS)" },
          { key: "odl", label: "Lincoln Open Distance Learning" },
          { key: "phd-student-login", label: "PhD Student Login" },
          { key: "examination-schedule", label: "Examination Schedule" },
        ],
      },
      {
        key: "prospective-student",
        label: "Prospective Student",
        children: [
          { key: "hostel-application", label: "Hostel Application" },
          { key: "hostel-status-check", label: "Hostel Status Check" },
          { key: "arrival-information", label: "Arrival Information" },
          { key: "admission-status", label: "Admission Status" },
        ],
      },
      { key: "application-for-events", label: "Application For Events" },
      { key: "application-for-events", label: "Application For Events" },
    ],
  },
  {
    key: "research-and-conferences",
    label: "Research & Conferences",
    isParent: true,
    children: [
      {
        key: "introduction",
        label: "Introduction",
        to: "/research-and-conferences/introduction",
      },
      {
        key: "research-projects",
        label: "Research Projects",
        to: "/research-and-conferences/research-project",
      },
      {
        key: "publications-of-faculty-members",
        label: "Publications of Faculty Members",
      },
      { key: "staff-edited-books", label: "Staff Edited Books" },
      { key: "other-publications", label: "Other Publications" },
      { key: "book-published", label: "Book Published" },
      { key: "journal-published", label: "Journal Published" },
    ],
  },
  { key: "contact-us", label: "Contact Us", isParent: true, to: "/contact-us" },
];

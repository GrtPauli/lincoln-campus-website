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
        key: "Faculty of Medicine & Allied Health Sciences",
        label: "Faculty of Medicine & Allied Health Sciences",
        to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences",
        children: [
          {
            key: "Medicine & Surgery (MBBS)",
            label: "Medicine & Surgery (MBBS)",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/medicine-and-surgery-mbbs",
          },
          {
            key: "B.N.Sc Nursing",
            label: "B.N.Sc Nursing",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/bnsc-nursing",
          },
          {
            key: "B. Environmental Health",
            label: "B. Environmental Health",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/b-environmental-health",
          },
          {
            key: "B. Health Information Management",
            label: "B. Health Information Management",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/b-health-information-management",
          },
          {
            key: "Bachelor of Radiography & Medical Imaging (B.R.A.D)",
            label: "Bachelor of Radiography & Medical Imaging (B.R.A.D)",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/bachelor-of-radiography-and-medical-imaging-brad",
          },
          {
            key: "B.Sc. Public Health",
            label: "B.Sc. Public Health",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/bsc-public-health",
          },
          {
            key: "B. Community Health Science",
            label: "B. Community Health Science",
            to: "/faculties-and-programmes/faculty-of-medicine-and-allied-health-sciences/b-community-health-science",
          },
        ],
      },
      {
        key: "Faculty of Sciences & Computing",
        label: "Faculty of Sciences & Computing",
        to: "/faculties-and-programmes/faculty-of-sciences-and-computing",
        children: [
          {
            key: "B.Sc. Microbiology",
            label: "B.Sc. Microbiology",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-microbiology",
          },
          {
            key: "B.Sc. BioChemistry",
            label: "B.Sc. BioChemistry",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-biochemistry",
          },
          {
            key: "B.Sc. Biomedical Sciences",
            label: "B.Sc. Biomedical Sciences",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-biomedical-sciences",
          },
          {
            key: "B.Sc. Information Technology",
            label: "B.Sc. Information Technology",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-information-technology",
          },
          {
            key: "B.Sc. Cyber Security",
            label: "B.Sc. Cyber Security",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-cyber-security",
          },
        ],
      },
      {
        key: "Faculty of Management & Social Sciences",
        label: "Faculty of Management & Social Sciences",
        to: "/faculties-and-programmes/faculty-of-management-and-social-sciences",
         children: [
          {
            key: "B.Sc. Accounting",
            label: "B.Sc. Accounting",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-accounting",
          },
          {
            key: "B.Sc. Business Administration",
            label: "B.Sc. Business Administration",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-business-administration",
          },
          {
            key: "B.Sc. Management (Oil & Gas)",
            label: "B.Sc. Management (Oil & Gas)",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-management-oil-and-gas",
          },
          {
            key: "B.Sc. Mass Communication",
            label: "B.Sc. Mass Communication",
            to: "/faculties-and-programmes/faculty-of-sciences-and-computing/bsc-mass-communication",
          },
        ],
      },
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
          { key: "lls", label: "Lincoln Learning System (LLS)", to: "https://lls.lincoln.edu.ng/login" },
          { key: "odl", label: "Lincoln Open Distance Learning", to: "/current-students/odl" },
          { key: "phd-student-login", label: "PhD Student Login" },
          { key: "examination-schedule", label: "Examination Schedule" },
          { key: "examination-rules-and-regulations", label: "Examination Rules & Regulations", to: "/current-students/examination-rules-and-regulations" },
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

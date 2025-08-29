import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/Home";

// Welcome to LUC Pages
import About from "./pages/About";
import FacilitiesAndServices from "./pages/FacilitiesAndServices"; // Fixed import
import RecognitionsAndAccreditation from "./pages/RecognitionsAndAccreditation";

// Research and Conferences Pages
import Introduction from "./pages/research-and-conferences/Introduction";
import ResearchProject from "./pages/research-and-conferences/ResearchProject";

// Faculties and Programmes Pages
import SchoolOfMedicine from "./pages/faculties-and-programmes/school-of-medicine/SchoolOfMedicine";

// Contact Pages
import Contact from "./pages/Contact";
// Examination link for the footer
import ExaminationsAndRegulations from "./pages/ExaminationsAndRegulations";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact />} />

          {/* Welcome to LUC Pages */}
          <Route path="/about-us" element={<About />} />
          <Route
            path="/facilities-and-services"
            element={<FacilitiesAndServices />}
          />
          <Route
            path="/recognitions-and-accreditations"
            element={<RecognitionsAndAccreditation />}
          />
          {/* Examination page */}
          <Route
            path="/examinations-and-regulations"
            element={<ExaminationsAndRegulations />}
          />

          {/* Research and Development Pages */}
          <Route
            path="/research-and-conferences/introduction"
            element={<Introduction />}
          />
          <Route
            path="/research-and-conferences/research-project"
            element={<ResearchProject />}
          />

          {/* Faculties and Programmes Pages */}
          <Route
            path="/faculties-and-programmes/school-of-medicine"
            element={<SchoolOfMedicine />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
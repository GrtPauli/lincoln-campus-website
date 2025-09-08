import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/Home";

// Welcome to LUC Pages
import About from "./pages/About";
import FacilitiesAndServices from "./pages/FacilitiesAndServices";
import RecognitionsAndAccreditation from "./pages/RecognitionsAndAccreditation";
import AllEvents from "./pages/posts/AllEvents";
import News from "./pages/posts/News";

// Research and Conferences Pages
import Introduction from "./pages/research-and-conferences/Introduction";
import ResearchProject from "./pages/research-and-conferences/ResearchProject";

// Faculties and Programmes Pages
import FacultyDetails from "./pages/faculties-and-programmes/FacultyDetails";

// Contact Pages
import Contact from "./pages/Contact";
import ExaminationsAndRegulations from "./pages/ExaminationsAndRegulations";
import ManagementPage from "./pages/Management";

import PracticalSkillApplication from "./pages/practical-skill-application/PracticalSkillApplication";
import ScrollToTop from "./components/common/ScrollToTop";
import ProgrammesEnquiry from "./pages/faculties-and-programmes/ProgrammesEnquiry";
import ProgrammeEligibility from "./pages/faculties-and-programmes/ProgrammeEligibility";
import Faculties from "./pages/faculties-and-programmes/Faculties";

// New Import for Policy and Objectives
import PolicyAndObjectives from "./pages/PolicyAndObjectives";

// Header Import
import Header from "./components/common/Header"; // Corrected path
import FeesStructure from "./pages/admission/FeesStructure";
import ProgrammeDetails from "./pages/faculties-and-programmes/ProgrammeDetails";
import AdmissionProcess from "./pages/admission/AdmissionProcess";
import CollaboratorsPage from "./pages/CollaboratorsPage";

function App() {
  return (
    <Router>
      <main>
        <ScrollToTop />
        <Header /> {/* Include Header */}
        <ScrollToTop />
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
          <Route
            path="/examinations-and-regulations"
            element={<ExaminationsAndRegulations />}
          />

          <Route path="/posts/events" element={<AllEvents />} />
          <Route path="/posts/news" element={<News />} />

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
            path="/faculties-and-programmes/:slug"
            element={<FacultyDetails />}
          />
          <Route
            path="/faculties-and-programmes/:facultySlug/programmes/:programmeSlug"
            element={<ProgrammeDetails />}
          />

          <Route
            path="/policy-and-objectives"
            element={<PolicyAndObjectives />}
          />
          <Route path="/enquiry" element={<ProgrammesEnquiry />} />
          <Route path="/eligibility" element={<ProgrammeEligibility />} />
          <Route path="/faculties" element={<Faculties />} />

          <Route
            path="/management"
            element={<ManagementPage />}
          />

          <Route
            path="/admission/fees-structure"
            element={<FeesStructure />}
          />
          <Route
            path="/admission/admission-process"
            element={<AdmissionProcess />}
          />

          <Route path="/psa" element={<PracticalSkillApplication />} />
          <Route path="/psa/:slug" element={<PracticalSkillApplication />} />

          <Route
            path="/collaborators"
            element={<CollaboratorsPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

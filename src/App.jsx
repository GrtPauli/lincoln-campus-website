import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home";

// Welcome to LUC Pages
import About from "./pages/About";
import FacilitesAndServices from "./pages/FacilitesAndServices";

// Research and Conferences Pages
import Introduction from "./pages/researchandconferences/Introduction";
import ResearchProject from "./pages/researchandconferences/ResearchProject";

// Contact Pages
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<Contact />} />

          {/* Welcome to LUC Pages */}
          <Route path="/about-us" element={<About />} />
          <Route
            path="/facilities-and-services"
            element={<FacilitesAndServices />}
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

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

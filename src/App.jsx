import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import HomePage from "./pages/Home";

// Welcome to LUC Pages
import About from "./pages/About";
import FacilitesAndServices from "./pages/FacilitesAndServices";
import RecognitionsAndAccreditation
 from "./components/home/RecognitionsAndAccreditation";

// Research and Conferences Pages
import Introduction from "./pages/research-and-conferences/Introduction";
import ResearchProject from "./pages/research-and-conferences/ResearchProject";

// Contact Pages
import Contact from "./pages/Contact";

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
            element={<FacilitesAndServices />}
          />
         <Route path="/recognitions" element={<RecognitionsAndAccreditation/>}/>
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
    </Router>
  );
}

export default App;

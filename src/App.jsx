import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import FacilitesAndServices from "./pages/FacilitesAndServices";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />

          <Route
            path="/facilities-and-services"
            element={<FacilitesAndServices />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

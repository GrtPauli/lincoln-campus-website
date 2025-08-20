import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AboutUs from "./components/about/AboutUs";

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
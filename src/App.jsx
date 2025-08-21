import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from './pages/About';
import RecognitionAndAccreditations from './pages/RecognitionsAndAccreditation'; 

function App() {
  return (
    <Router>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* Add a new route for the RecognitionAndAccreditations component */}
          <Route path="/recognitions" element={<RecognitionAndAccreditations />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
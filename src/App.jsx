import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import CobaLayout from "./pages/CobaLayout";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/coba" element={<CobaLayout />} />
      </Routes>
    </Router>
  );
}

export default App;

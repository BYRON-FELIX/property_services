import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RequestService from "./pages/RequestService";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#0b0c0c] text-white">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-service" element={<RequestService />} />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
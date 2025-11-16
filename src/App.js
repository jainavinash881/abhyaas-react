import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import Hero from "./components/Hero/Hero";
import MeetAsmi from "./components/MeetAsmi/MeetAsmi";
import WhatWeTeach from "./components/WhatWeTeach/WhatWeTeach";
import Footer from "./components/Footer/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactUs from "./components/ContactUs/ContactUs";
import Yoga from "./components/Offer/Yoga";
import TestimonialCarousel from "./components/Shared/TestimonialCarousel.jsx";


function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);

  if (loading) return <Loader />;

  return (
      <div className="app-container">
        <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MeetAsmi />
                <WhatWeTeach />
                <TestimonialCarousel />
              </>
            }
          />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<MeetAsmi />} />
          <Route path="/yoga" element={<Yoga />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;

import React from "react";
import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import Support from "../page/Support";
import FAQ from "../page/FAQ";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function Directions() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  )
}

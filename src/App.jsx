import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/PlatformFooter";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Our_Clients from './pages/Our_Clients'
import Industries from './pages/Industries'
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/Our_Clients" element={<Our_Clients />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/services" element={<Services />} />
                <Route path="/resources/case-studies" element={<CaseStudies />} />

                <Route path="/resources/blogs" element={<Blog />} />
                <Route path="/contact" element={<Contact/>}/>




      </Routes>

      <Footer />
    </>
  );
};

export default App;

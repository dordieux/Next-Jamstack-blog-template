import React from "react";

import Hero from "../organisms/Hero";
import About from "../organisms/About";
import Blog from "../organisms/Blog";
import Contact from "../organisms/Contact";
import Footer from "../organisms/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

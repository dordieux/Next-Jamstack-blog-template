import React from "react";

import Hero from "../organisms/home/Hero";
import About from "../organisms/home/About";
import Blog from "../organisms/home/Blog";
import Contact from "../organisms/common/Contact";
import Footer from "../organisms/common/Footer";

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

import React from "react";

import Header from "../organisms/common/Header";
import Hero from "../organisms/home/Hero";
import About from "../organisms/home/About";
import Blog from "../organisms/home/Blog";
import Contact from "../organisms/common/Contact";
import Footer from "../organisms/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

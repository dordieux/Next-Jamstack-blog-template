import React from "react";

import { Header } from "../organisms/common/Header";
import { Hero } from "../organisms/home/Hero";
import { About } from "../organisms/home/About";
import { Blog } from "../organisms/home/Blog";
import { Contact } from "../organisms/common/Contact";
import { Footer } from "../organisms/common/Footer";
import { NextPage } from "next";

const Home: NextPage = () => {
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
};

export default Home;

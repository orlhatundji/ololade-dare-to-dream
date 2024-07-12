import * as React from "react";

// Components
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Blogs />
      <Contact />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Ololade Ayelabola</title>;

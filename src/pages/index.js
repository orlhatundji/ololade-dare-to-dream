import * as React from "react";

// Components
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Blogs from "../components/Blogs";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Blogs />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

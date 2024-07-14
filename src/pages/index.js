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

export const Head = () => (
  <>
    <meta name="google-site-verification" content="eCwhOuu21YZC7h40Oq8ym89BhiauGokRqQjugdzxmys" />
    <meta name="msvalidate.01" content="09D45BCBF8D43397A28BA115B192F83C" />
    <meta
      name="description"
      content="A lady of diverse talents, a unique model with a burning passion for the gospel of Christ"
    />
    <meta
      name="keywords"
      content="Ololade Ayelabola, Model, GWR, fashion, catwalk, philanthropist"
    />
    <meta name="author" content="Ololade Ayelabola" />
    <title>Ololade Ayelabola</title>
  </>
);

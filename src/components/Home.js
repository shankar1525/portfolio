import React from "react";
import "../styles/Home.css";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;

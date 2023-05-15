import React from "react";
import About from "../About";
import Contact from "../Contact";
import Experience from "../Experience";
import Feedback from "../Feedback";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Works from "../Works";

const Layout = () => {
  return (
    <main className="w-full h-full bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
};

export default Layout;

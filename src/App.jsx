/* eslint-disable */


import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";

import "./App.css";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="h-screen  max-w-[1200px] mx-auto justify-center">
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

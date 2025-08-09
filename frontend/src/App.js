import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Issues from "./components/Issues";
import Solutions from "./components/Solutions.js";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Form from "./components/Form";
import useScrollTracking from "./components/tracking.js";
import { useRef } from "react";

function App() {
  useScrollTracking();
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Issues />
      <Solutions />
      <Features />
      <Results />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}

export default App;

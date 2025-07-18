import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Issues from './components/Issues';
import Benefits from './components/Benefits';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Issues />
      <Features />
      <Benefits />
      <Results />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
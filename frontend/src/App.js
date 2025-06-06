import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Wrap About and Projects in a flex container */}
      <div className="container">
        <About />
        <Projects />
      </div>

      <Contact />
    </div>
  );
}

export default App;

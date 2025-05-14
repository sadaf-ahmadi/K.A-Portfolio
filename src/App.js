import React from 'react';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <MyNavbar />
      <section id="home"><HeroSection /></section>

      <section id="about" style={{ backgroundColor: '#0b1d2e', color: 'white' }}>
        <About />
      </section>

      <section id="projects" style={{ backgroundColor: '#0f2538', color: 'white' }}>
        <Projects />
      </section>

      <section id="contact" style={{ backgroundColor: '#0b1d2e', color: 'white' }}>
        <Contact />
      </section>
    </>
  );
}

export default App;


import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Background from './components/Background';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Background />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

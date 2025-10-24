
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-10">
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-[-2px] mb-8">
          Strategic Operations Leader & AI Governance Expert
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#666] mb-12 font-light leading-relaxed">
          Bridging technology, policy, and social impact through operations excellence, computational social science, and equity-centered design.
        </p>
        <a 
          href="#projects" 
          className="inline-block px-10 py-4 bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] text-sm tracking-[1px] uppercase transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]"
        >
          View Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
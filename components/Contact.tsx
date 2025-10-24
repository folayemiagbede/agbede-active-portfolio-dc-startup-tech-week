
import React from 'react';
import Section, { SectionTitle } from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="text-center py-16 md:py-28">
      <SectionTitle centerOnDesktop>Let's Connect</SectionTitle>
      <p className="text-lg text-[#666] max-w-3xl mx-auto mb-12 leading-relaxed">
        Interested in collaboration on AI governance, operations transformation, equity-centered research, or public policy innovation? Open to opportunities in cutting-edge organizations prioritizing social impact, information privacy, and responsible technology development.
      </p>
      <div className="flex gap-6 justify-center flex-wrap">
        <a 
          href="mailto:hire.folayemiagbede@gmail.com" 
          className="px-10 py-4 bg-[#1a1a1a] text-white border-2 border-[#1a1a1a] text-sm tracking-[1px] uppercase transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]"
        >
          Email Me
        </a>
        <a 
          href="https://www.linkedin.com/in/folayemiagbede/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-4 bg-white text-[#1a1a1a] border-2 border-[#1a1a1a] text-sm tracking-[1px] uppercase transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
};

export default Contact;
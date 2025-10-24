
import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-20 ${className}`}>
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; centerOnDesktop?: boolean }> = ({ children, centerOnDesktop }) => {
  return (
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-1px] mb-16 text-center ${!centerOnDesktop ? 'md:text-left' : ''}`}>
      {children}
    </h2>
  );
};

export const SectionIntro: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="text-xl text-[#666] max-w-4xl mb-20 font-light leading-relaxed">
        {children}
    </p>
  );
};


export default Section;
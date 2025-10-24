
import React from 'react';
import { RESEARCH_DATA } from '../constants';
import Section, { SectionTitle } from './Section';

const Research: React.FC = () => {
  return (
    <Section id="research">
      <SectionTitle>Research & Publications</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESEARCH_DATA.map((item, index) => (
          <div key={index} className="p-8 border border-[#e5e5e5] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-medium mb-3 tracking-[-0.5px]">{item.title}</h3>
            <p className="text-sm text-[#666] mb-6 italic">{item.meta}</p>
            <p className="text-[#1a1a1a] text-[0.95rem] leading-relaxed">
              {item.description}
            </p>
            {item.links && (
                <div className="mt-4 space-y-2">
                    {item.links.map((link, linkIndex) => (
                         <React.Fragment key={linkIndex}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#0066cc] border-b border-[#0066cc] transition-opacity duration-300 hover:opacity-70 text-sm">
                                {link.text}
                            </a>
                            {linkIndex < item.links.length - 1 && '; '}
                        </React.Fragment>
                    ))}
                </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Research;

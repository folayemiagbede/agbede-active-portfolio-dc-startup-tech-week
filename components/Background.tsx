import React from 'react';
import { BACKGROUND_DATA, EDUCATION_DATA, TRAINING_DATA, SKILLS_DATA } from '../constants';
import Section, { SectionTitle, SectionIntro } from './Section';

const Background: React.FC = () => {
  return (
    <Section id="background">
      <SectionTitle>Professional Highlights</SectionTitle>
      <SectionIntro>
        This section highlights my recent professional experience, focusing on key roles and accomplishments. For a complete career history, please visit my LinkedIn profile.
      </SectionIntro>
      <div className="grid grid-cols-1 gap-16">
        {/* Professional Experience */}
        {BACKGROUND_DATA.map((item, index) => (
          <div key={index} className="pb-16 border-b border-[#e5e5e5] last:border-b-0">
            <h3 className="text-2xl md:text-3xl font-normal mb-2 tracking-[-0.5px]">{item.company}</h3>
            <p className="text-[#666] text-base mb-6 italic">{item.role} | {item.duration}</p>
            <p className="text-[#1a1a1a] mb-6 leading-relaxed">{item.description}</p>
            {item.details?.map((detail, dIndex) => (
              <div key={dIndex} className="mb-6">
                <p className="font-semibold text-[#1a1a1a] mb-4">{detail.title}</p>
                <ul className="space-y-3">
                  {detail.points.map((point, pIndex) => (
                    <li key={pIndex} className="pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-[#0066cc] before:font-bold text-[#1a1a1a] leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Education */}
        <div className="pb-16 border-b border-[#e5e5e5]">
          <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-[-0.5px]">Education</h3>
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold text-[#1a1a1a]">{edu.institution}</p>
              {edu.details.map((detail, dIndex) => (
                <p key={dIndex} className="text-[#1a1a1a] leading-relaxed">{detail}</p>
              ))}
            </div>
          ))}
        </div>
        
        {/* Training & Certifications */}
        <div className="pb-16 border-b border-[#e5e5e5]">
          <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-[-0.5px]">Specialized Training & Certifications</h3>
          <div>
            {TRAINING_DATA.map((training, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <p className="font-semibold text-[#1a1a1a]">{training.institution}</p>
                <p className="text-[#1a1a1a] leading-relaxed">{training.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-[-0.5px]">Technical Skills</h3>
          {SKILLS_DATA.map((skill, index) => (
            <p key={index} className="text-[#1a1a1a] mb-4">
              <strong className="font-semibold">{skill.title}:</strong> {skill.skills}
            </p>
          ))}
        </div>

      </div>
    </Section>
  );
};

export default Background;

import React from 'react';
import { EXPERTISE_DATA } from '../constants';
import { ExpertiseItem as ExpertiseItemType } from '../types';
import Section, { SectionTitle, SectionIntro } from './Section';

const ExpertiseItem: React.FC<{ item: ExpertiseItemType }> = ({ item }) => (
    <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-4 tracking-[-0.5px]">{item.title}</h3>
        <ul className="text-[#666] text-[0.95rem] leading-loose">
            {item.points.map((point, index) => (
                <li key={index} className="py-2 border-b border-[#e5e5e5] last:border-b-0">
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const Expertise: React.FC = () => {
  return (
    <Section id="expertise">
      <SectionTitle>Areas of Expertise</SectionTitle>
      <SectionIntro>
        Building the intersection of responsible technology, operational excellence, and social justice through evidence-based strategy and inclusive innovation.
      </SectionIntro>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {EXPERTISE_DATA.map((item) => (
          <ExpertiseItem key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
};

export default Expertise;

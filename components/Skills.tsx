import React from 'react';
import { SKILLS_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';

const Skills: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.2 });

  return (
    <section 
      id="skills"
      ref={ref}
      className={`py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle className="text-center mb-12">Core Skills</SectionTitle>
      <div className="mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center space-y-3 p-4 bg-gray-100 dark:bg-neutral-900/50 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20 dark:hover:shadow-yellow-400/20">
              {skill.icon}
              <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
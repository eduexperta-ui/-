import React from 'react';
import { WORK_EXPERIENCE_DATA } from '../constants';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';
import type { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ experience: ExperienceType }> = ({ experience }) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-2.5 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-gray-200/50 dark:lg:group-hover:bg-neutral-800/50"></div>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:col-span-2">
        {experience.start} — {experience.end}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-gray-800 dark:text-gray-100">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-gray-900 dark:text-gray-100 hover:text-brand focus-visible:text-brand group/link text-base"
              href={experience.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${experience.title} at ${experience.company}`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block"></span>
              <span>{experience.title} · <span className="inline-block">{experience.company}</span></span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-gray-600 dark:text-gray-400">{experience.description}</p>
      </div>
    </div>
  );
};


const Experience: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });

  return (
    <section 
      id="experience"
      ref={ref}
      className={`py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle className="mb-12">Experience</SectionTitle>
      <div className="group/list space-y-8">
        {WORK_EXPERIENCE_DATA.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
            <span className="text-gray-900 dark:text-white block">
              {PERSONAL_INFO.title_line1}
            </span>
            <span className="text-gray-900 dark:text-white block">
              {PERSONAL_INFO.title_line2}
            </span>
            <span className="text-yellow-500 dark:text-yellow-400 block mt-2">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
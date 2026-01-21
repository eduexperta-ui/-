import React from 'react';
import { PERSONAL_INFO } from '../constants';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20 md:pt-40">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl">
          <h1 className="tracking-tighter leading-tight flex flex-col break-keep">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 dark:text-gray-500 mb-1">
              {PERSONAL_INFO.title_line1}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-500 dark:text-gray-400">
              {PERSONAL_INFO.title_line2}
            </span>
            {/* 메인 타이틀 - 화면 크기에 따라 유동적으로 조절 */}
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-brand dark:text-white mt-4 mb-2">
              {PERSONAL_INFO.title_line3}
            </span>
            {/* 이름 섹션 - 모바일에서 너무 크지 않게 조정 */}
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-brand dark:text-brand mt-8 sm:mt-12 md:mt-16 leading-[1.1] block">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-10 sm:mt-16 break-keep">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
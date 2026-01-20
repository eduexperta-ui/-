import React from 'react';
import { PERSONAL_INFO } from '../constants';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 pb-20">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div>
          <h1 className="tracking-tighter leading-tight flex flex-col">
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-500 dark:text-gray-500 mb-1">
              {PERSONAL_INFO.title_line1}
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-500 dark:text-gray-400">
              {PERSONAL_INFO.title_line2}
            </span>
            {/* 메인 타이틀 */}
            <span className="text-4xl sm:text-6xl md:text-7xl font-medium text-brand dark:text-white mt-4 mb-2">
              {PERSONAL_INFO.title_line3}
            </span>
            {/* 
              이름 섹션: 
              mt-12로 이전 줄과의 간격을 더 확실히 벌리고, 
              leading-[1.2]를 주어 머리 끝이 상단 요소에 붙어 보이는 현상을 해결했습니다.
            */}
            <span className="text-5xl sm:text-7xl md:text-8xl font-bold text-brand dark:text-brand mt-12 sm:mt-16 leading-[1.2] block">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-16">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
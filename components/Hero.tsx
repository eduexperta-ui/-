import React from 'react';
import { PERSONAL_INFO } from '../constants';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8">
        <div>
          {/* 
            leading-[1.05]: 줄 사이의 간격을 거의 없애듯이 붙임
            tracking-tighter: 세련된 타이포그래피를 위해 자간을 좁힘
          */}
          <h1 className="tracking-tighter leading-[1.05] flex flex-col">
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-500 dark:text-gray-500">
              {PERSONAL_INFO.title_line1}
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-500 dark:text-gray-400">
              {PERSONAL_INFO.title_line2}
            </span>
            {/* 메인 타이틀: font-medium(500)으로 굵기를 더 줄여 세련되게 표현 */}
            <span className="text-4xl sm:text-6xl md:text-7xl font-medium text-brand dark:text-white mt-1">
              {PERSONAL_INFO.title_line3}
            </span>
            {/* 이름 섹션: 메인 타이틀과 동일한 크기(7xl)로 확장하여 일체감 강조 */}
            <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-brand dark:text-brand mt-1">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mt-10">
            {PERSONAL_INFO.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

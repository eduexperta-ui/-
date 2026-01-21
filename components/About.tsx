import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';
import { PERSONAL_INFO, profilePlaceholderImg } from '../constants';

const About: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.2 });
  const [imgSrc, setImgSrc] = useState(PERSONAL_INFO.profileImage);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setIsLoading(false);
    if (imgSrc !== profilePlaceholderImg) {
      setImgSrc(profilePlaceholderImg);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle className="mb-8 md:mb-12">About Me</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start mt-4 md:mt-8">
        {/* Profile Image Column */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative group w-full max-w-[280px] md:max-w-full">
            <div className="absolute -inset-1 bg-brand rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-brand/20 bg-neutral-200 dark:bg-neutral-800 shadow-xl">
              {isLoading && (
                <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              <img 
                src={imgSrc} 
                alt="김태진 프로필 사진" 
                onLoad={handleImageLoad}
                onError={handleImageError}
                className={`w-full h-full object-cover object-[center_15%] transition-all duration-700 transform scale-[1.2] origin-top hover:scale-[1.25] ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="md:col-span-8 space-y-6 text-gray-600 dark:text-gray-400 text-base md:text-lg break-keep">
          <p>
              미디어/소프트웨어 공학과 산업공학을 통해 기술과 시스템 사고의 융합적 배경을, 의류학을 통해 사용자 중심 관점을 배웠습니다. 이 경험들을 바탕으로 개인과 조직의 동반 성장을 이끄는 <strong>'진정성 있는 교육 전문가'</strong>로 활동해온 김태진입니다.
          </p>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">애자일 리더십과 소통 문화 구축</h3>
              <p>
              사내 최초로 교육팀에 데일리 스크럼 문화를 도입하여 조직력 및 소통 강화와 업무 실행력을 혁신적으로 향상시켰습니다. <strong>2022년 8월부터 현재까지 팀원 이탈률 0%</strong>를 유지하고 있습니다.
              </p>
          </div>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">학습자 중심의 교육 경험(LX) 설계</h3>
              <p>
              <strong>'참여자가 온전히 학습에만 집중할 수 있는 환경'</strong>을 최우선 가치로 삼습니다. 무대를 디자인하듯 전체 교육 여정을 설계하고, 온라인 환경에 최적화된 학습 경험을 제공하여 평균 수료율 95%, 만족도 4.6점을 달성했습니다.
              </p>
          </div>

          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">변화 적응력과 빠른 실행력</h3>
              <p>
              스타트업 환경에서 변화에 빠르게 적응하고 신속하게 결과를 만들어내는 실행력을 길렀습니다. 100여 명 규모의 기업 해커톤에서 실시간 VoC를 반영하여 프로그램을 개선, 최종 만족도 4.3점을 이끌어냈습니다.
              </p>
          </div>
          
          <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">협업과 조직 중심적 사고</h3>
              <p>
              <strong>'빨리 가려면 혼자 가고, 멀리 가려면 함께 가라'</strong>는 철학을 바탕으로 협업의 힘을 믿고 실천합니다. 진정한 협업이 성과로 이어지는 선순환 구조를 만들기 위해 노력합니다.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import SectionTitle from './SectionTitle';
import { useFadeIn } from '../hooks/useFadeIn';

const About: React.FC = () => {
  const [ref, isVisible] = useFadeIn({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-24 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <SectionTitle>About Me</SectionTitle>
      <div className="mt-8 space-y-6 text-gray-600 dark:text-gray-400 text-lg">
        <p>
            미디어/소프트웨어 공학과 산업공학을 통해 기술과 시스템 사고의 융합적 배경을, 의류학을 통해 사용자 중심 관점을 배웠습니다. 이 경험들을 바탕으로 개인과 조직의 동반 성장을 이끄는 <strong>'진정성 있는 교육 전문가'</strong>로 활동해온 김태진입니다.
        </p>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">애자일 리더십과 소통 문화 구축</h3>
            <p>
            사내 최초로 교육팀에 데일리 스크럼 문화를 도입하여 조직력 및 소톨 강화와 업무 실행력을 혁신적으로 향상시켰습니다. <strong>2022년 8월부터 현재까지 팀원 이탈률 0%</strong>를 유지하고 있습니다. 이는 단순한 관리가 아닌, 팀원 개개인의 성장에 대한 진정성 있는 관심과 지원의 결과입니다. '팀원의 성장이 곧 나의 성장'이라는 신념으로 잠재력을 이끌어내는 리더십을 실천하였습니다.
            </p>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">학습자 중심의 교육 경험(LX) 설계</h3>
            <p>
            <strong>'교육 참여자가 온전히 학습에만 집중할 수 있는 환경'</strong>을 최우선 가치로 삼습니다. 무대를 디자인하듯 전체 교육 여정을 설계하고, 온라인 환경에 최적화된 학습 경험(LX)을 제공하여 842명 규모의 교육에서 평균 수료율 95%, 만족도 4.6점, 3년간 100억원 이상의 매출을 달성했습니다.
            </p>
        </div>

        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">변화 적응력과 빠른 실행력</h3>
            <p>
            스타트업 환경에서 변화에 빠르게 적응하고 신속하게 결과를 만들어내는 실행력을 길렀습니다. 100여 명 규모의 오프라인 기업 해커톤에서 실시간 VoC를 반영하여 프로그램을 개선, 최종 만족도 4.3점을 이끌어내며 차년도 계약까지 성공시켰습니다.
            </p>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">협업과 조직 중심적 사고</h3>
            <p>
            <strong>'빨리 가려면 혼자 가고, 멀리 가려면 함께 가라'</strong>는 철학을 바탕으로 협업의 힘을 믿고 실천합니다. 400명 이상의 C-Level 임직원 교육 경험을 통해 진정한 협업을 톨해 성과로 이어지는 것을 직접 경험하고, 그 선순환 구조를 만들기 위해 노력하였습니다.
            </p>
        </div>

      </div>
    </section>
  );
};

export default About;
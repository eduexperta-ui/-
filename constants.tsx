import React from 'react';
import type { Project, Experience, Skill } from './types';

// SVGs for projects
const bootcampSvg = `<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><g transform="translate(15,15)"><path d="M0,90 L0,20 Q0,0 20,0 L70,0 Q90,0 90,20 L90,90Z" fill="#0c0a09" stroke="#3f3f46"/><text x="45" y="20" font-family="monospace" font-size="10" fill="#3b82f6" text-anchor="middle">&lt;Code/&gt;</text><path d="M20,40 H70 M20,50 H70 M20,60 H50" stroke="#52525b" stroke-width="1.5"/><circle cx="45" cy="75" r="10" fill="#22c55e"/></g><g transform="translate(110,25)"><path d="M0,0 L80,0 L80,70 L0,70Z" fill="none"/><path d="M10,60 L25,40 L45,50 L60,30 L75,45" stroke="#60a5fa" stroke-width="2.5" fill="none"/><path d="M0,70 H80" stroke="#3f3f46" stroke-width="2"/><circle cx="10" cy="60" r="3" fill="#60a5fa"/><circle cx="75" cy="45" r="3" fill="#60a5fa"/></g><text x="100" y="108" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">IT 부트캠프 성장 과정</text></svg>`;
const hackathonImg = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><path d="M0,100 L200,100 L180,20 L20,20Z" fill="#0c0a09" stroke="#3f3f46"/><rect x="50" y="30" width="100" height="50" fill="#3b82f6" opacity="0.8"/><text x="100" y="60" font-family="sans-serif" font-weight="bold" font-size="18" fill="white" text-anchor="middle">EPSON</text><path d="M70,30 L50,0 M130,30 L150,0" stroke="#023F97" stroke-width="3"/><path d="M80,100 V90 L90,80 H110 L120,90 V100" fill="#18181b" stroke="#3f3f46"/><text x="100" y="112" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">엡손 해커톤 현장</text></svg>`)))}`;
const proposalImg = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><g transform="translate(20,20)"><rect x="0" y="0" width="70" height="80" rx="4" fill="#0c0a09" stroke="#3f3f46"/><text x="35" y="15" font-family="sans-serif" font-size="9" fill="#e4e4e7" text-anchor="middle">B2G 제안</text><path d="M10,25 H60 M10,35 H60 M10,45 H40" stroke="#52525b"/><circle cx="45" cy="65" r="15" fill="#22c55e"/><path d="M38,65 l5,5 l10,-10" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></g><g transform="translate(100,30)"><rect x="0" y="60" width="20" height="10" fill="#3b82f6"/><rect x="25" y="40" width="20" height="30" fill="#3b82f6"/><rect x="50" y="20" width="20" height="50" fill="#3b82f6"/><rect x="75" y="0" width="20" height="70" fill="#60a5fa"/><path d="M-5,70 H100" stroke="#3f3f46"/></g><text x="100" y="108" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">비즈니스 임팩트</text></svg>`)))}`;
const networkingImg = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><g transform="translate(100,60)"><circle cx="0" cy="0" r="15" fill="#3b82f6"/><circle cx="-50" cy="-20" r="10" fill="#60a5fa"/><circle cx="50" cy="-20" r="10" fill="#60a5fa"/><circle cx="-30" cy="30" r="10" fill="#60a5fa"/><circle cx="30" cy="30" r="10" fill="#60a5fa"/><path d="M-3,0 L-40,-18 M3,0 L40,-18 M-2,3 L-25,28 M2,3 L25,28" stroke="#52525b"/></g><text x="100" y="108" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">제로-마케팅 달성</text></svg>`)))}`;
const marketingImg = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><g transform="translate(20,20)"><path d="M0,80 L20,60 L40,70 L60,40 L80,50" stroke="#22c55e" stroke-width="2.5" fill="none"/><rect x="0" y="0" width="80" height="80" fill="none" stroke="#3f3f46"/></g><g transform="translate(120,30)"><path d="M0,5 L30,5 L30,0 L50,25 L30,50 L30,45 L0,45Z" fill="#3b82f6"/><text x="25" y="70" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">마케팅 효율화</text></g></svg>`)))}`;
const researchImg = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><g transform="translate(20,20)"><rect x="0" y="0" width="60" height="80" rx="4" fill="#0c0a09" stroke="#3f3f46"/><path d="M10,20 H50 M10,30 H50 M10,40 H30 M10,60 h40" stroke="#52525b" stroke-width="1.5"/><circle cx="30" cy="60" r="5" stroke="#3b82f6" stroke-width="2" fill="none"/></g><g transform="translate(100, 20)"><path d="M10,70 Q40,0 80,70" fill="none" stroke="#60a5fa" stroke-width="2"/><path d="M0,80 H90" stroke="#3f3f46"/></g><text x="100" y="108" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">학술 연구 및 논문</text></svg>`)))}`;
const crowdfundingImg = `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(`<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="120" rx="8" fill="#18181b"/><g transform="translate(20,20)"><path d="M0,80 L80,80 L70,20 L10,20Z" fill="#0c0a09" stroke="#3f3f46"/><text x="40" y="55" font-family="sans-serif" font-weight="bold" font-size="14" fill="#22c55e" text-anchor="middle">264%</text><text x="40" y="70" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">달성</text></g><g transform="translate(120,30)"><path d="M0,0 L40,20 L0,40Z" fill="#023F97"/><text x="20" y="70" font-family="sans-serif" font-size="10" fill="#a1a1aa" text-anchor="middle">와디즈 펀딩</text></g></svg>`)))}`;

const toBase64 = (str: string) => {
    try {
        return window.btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        return '';
    }
};

// Profile Placeholder SVG - 더 선명한 기본 이미지
const profilePlaceholderSvg = `<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#262626"/><circle cx="200" cy="140" r="60" fill="#404040"/><path d="M100,320 Q200,220 300,320" fill="none" stroke="#404040" stroke-width="20" stroke-linecap="round"/><text x="200" y="370" font-family="sans-serif" font-size="18" fill="#525252" text-anchor="middle">PHOTO NOT FOUND</text></svg>`;
export const profilePlaceholderImg = `data:image/svg+xml;base64,${toBase64(profilePlaceholderSvg)}`;

// SVG Icons
export const Icons = {
    curriculum: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    lx_design: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    project_management: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    leadership: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    data_analysis: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    agile: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 4l16 16" /></svg>,
    email: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    phone: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
};

export const SKILLS_DATA: Skill[] = [
  { name: '교육과정 설계', icon: Icons.curriculum },
  { name: '학습 경험(LX) 디자인', icon: Icons.lx_design },
  { name: '프로젝트 관리', icon: Icons.project_management },
  { name: '팀 리더십', icon: Icons.leadership },
  { name: '데이터 분석', icon: Icons.data_analysis },
  { name: '애자일 방법론', icon: Icons.agile },
];

export const WORK_EXPERIENCE_DATA: Experience[] = [
  {
    company: '에듀테크 기업',
    link: '#',
    title: '그룹 리드',
    start: '2021',
    end: '현재',
    description: [
      '웹 프론트엔드 및 UX/UI 부트캠프 총괄 운영 (누적 수료생 902명 달성)',
      '누적 매출 약 100억 원 달성으로 교육의 사업적 가치 증명',
      '고용노동부 K-Digital Training 등 B2G 교육 사업 연속 수주',
      '12명 규모의 교육 운영팀 리딩 및 학습 프레임워크 기반 교육 고도화',
      '2023년 사내 1호 우수사원 표창 수상'
    ]
  },
  {
    company: 'CEO 교육 기업',
    link: '#',
    title: '선임 연구원',
    start: '2017',
    end: '2020',
    description: [
      'CEO 및 고위 임원 대상 리더십 교육 프로그램 기획 및 운영 총괄',
      '신규 교육 과정 론칭을 통한 매출 4억 원 창출',
      '이메일 마케팅 자동화 프로세스 구축 (지원율 10% 상승, 운영 비용 20% 절감)',
      '회사 발전 기여 공로로 사내 공로상 수상'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: '대규모 IT 부트캠프 기획 및 성장 견인',
    context: '에듀테크 기업',
    description: '누적 교육생 902명, 수료생 822명을 배출하며 누적 매출 100억 원을 달성했습니다. 학습자 중심의 교육 시스템을 구축하여 평균 수료율 95%, 만족도 4.6점이라는 높은 성과를 이끌었습니다.',
    tags: ['교육과정 설계', '매출 100억', '성과 분석'],
    thumbnailImage: `data:image/svg+xml;base64,${toBase64(bootcampSvg)}`,
    details: [
        '주 단위 교육생 피드백(정량/정성)을 수집 및 분석하여 5개월의 교육 과정을 지속적으로 개선, 평균 수료율 95%와 만족도 4.6점 이상을 달성했습니다.',
        '온라인 회고조, 스터디 그룹, 동료 특강 시스템으로 피드백 중심의 커뮤니티 학습 환경을 설계했습니다.',
        '최신 기술 트렌드를 반영하여 커리큘럼을 지속적으로 업데이트했습니다 (React → TypeScript → Next.js 순차 도입).',
        'Agile Learning 프레임워크 기반의 스프린트 특강, 수준별/수요 기반 맞춤형 특강을 기획했습니다.',
        '체계적인 교육생 선발 및 평가 프로세스(구조화 지원서, 영상 평가, 역량 측정)를 설계했습니다.'
    ]
  },
  {
    id: 2,
    title: 'B2G IT 교육 사업 제안 및 100% 수주',
    context: '에듀테크 기업',
    description: '고용노동부 주관 K-Digital Training 사업에서 총 4개 과제에 모두 선정되어 100% 수주 성공률을 기록했습니다. 데이터 기반의 제안 전략으로 200억 원 이상의 기대 매출을 확보했습니다.',
    tags: ['RFP 분석', '제안서 기획', '시장 분석', '프리젠테이션'],
    thumbnailImage: proposalImg,
    details: [
        '2021년, 2023년, 2024년(2건) K-Digital Training 웹 프론트엔드 교육 사업 제안서를 작성하여 모두 최종 승인을 받았습니다.',
        '정부기관과의 지속적인 커뮤니케이션을 통해 제안요청서(RFP)의 핵심 요구사항을 분석했습니다.',
        '실시간 교육 트렌드, B2G 시장, 경쟁사, 정부 정책을 분석하여 차별화된 전략을 수립했습니다.',
        '과거 교육 성과 데이터(수료율 95%, 만족도 4.6/5)를 기반으로 실증적인 제안서를 작성했습니다.',
        '핵심 내용을 강조하는 제안 프리젠테이션을 통해 심사위원들의 높은 평가를 받았습니다.'
    ]
  },
  {
    id: 5,
    title: '엡손(EPSON) 기업 해커톤 총괄',
    context: '에듀테크 기업',
    description: '100명 규모의 온·오프라인 해커톤 운영을 총괄했습니다. 참가자 만족도 4.3/5점을 달성하여 차년도 계약을 확보했으며, 효과적인 팀 빌딩 시스템으로 개인 참가자 이탈률을 5% 미만으로 관리했습니다.',
    tags: ['교육 운영 총괄', '멘토링 시스템', '팀빌딩'],
    thumbnailImage: hackathonImg,
    details: [
        '프로젝트 기획서 평가 기준표를 설계하여 본선 진출팀 선발 프로세스를 체계화했습니다.',
        '참가자 역량과 관심사을 고려한 팀 빌딩 시스템(개별 면담, 도메인/선호도 반영)으로 개인 참가자 이탈을 최소화했습니다.',
        '디스코드/줌 기반의 24시간 소통 가능한 온·오프라인 교육 환경을 조성했습니다 (API 강의, 멘토링, 팀 협업 지원).',
        '파이널 데모데이의 전 과정(동선, 타임라인, 이슈 대응)을 세밀하게 설계하고 오프라인 운영을 총괄했습니다.'
    ]
  },
  {
    id: 6,
    title: '학술 연구 및 데이터 분석',
    context: '학술 연구',
    description: '사용자 경험(UX), 마케팅, 기술 수용에 대한 깊이 있는 연구를 수행하여 한국연구재단(KRF) 등재지에 4편의 논문을 게재했습니다. 데이터 기반의 문제 정의 및 해결 능력을 입증합니다.',
    tags: ['데이터 분석', 'UX 리서치', '통계 분석', '논문 게재'],
    thumbnailImage: researchImg,
    details: [
        '주요 연구 주제: 페이스북 마케팅, 증강현실 앱 사용자 경험, 모바일 디스플레이 색채 표현(VoC)',
        '연구 전 과정(설문지 설계, 데이터 수집, 통계 분석, 결과 도출)을 주도적으로 수행했습니다.',
        '통계 분석 툴(SPSS, AMOS)을 활용하여 유의미한 추정 통계 결과를 도출하고 논리적으로 해석하는 역량을 갖추었습니다.'
    ]
  }
];

export const PERSONAL_INFO = {
    name: '김태진 입니다.',
    title_line1: '인재의 잠재력을',
    title_line2: '압도적 성장으로 이끌어내는',
    title_line3: '데이터 기반 IT 교육 전문가',
    bio: '학습자 중심의 정교한 LX 설계와 핵심을 파악하는 데이터 분석역량을 기반으로 교육의 전 과정을 기획하고 실행합니다. 4개 기수 100% 수료를 이끌어낸 압도적인 운영 전문성과 20개가 넘는 IT 교육사업 경험을 바탕으로, 목표에 맞는 프로그램을 설계하여 조직의 브랜드 경쟁력과 사회적 책임을 동시에 강화합니다.',
    email: 'eduexperta@gmail.com',
    phone: '010-4154-4898',
    // 가장 신뢰도가 높은 구글 유저 콘텐츠 서버 링크(lh3)로 변경
    profileImage: 'https://lh3.googleusercontent.com/d/1Ng20CTgKO4jInaEUFAbQO6JWneC5XQx3'
};
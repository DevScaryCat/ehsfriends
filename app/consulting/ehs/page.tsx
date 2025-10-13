// app/consulting/ehs/page.tsx
import { Search, ChevronRight, Home } from 'lucide-react';

// 공통 상수 및 컴포넌트
const PRIMARY_COLOR = 'slate-700'; // 남색 (#1e40af)
const FOOTER_BG = 'gray-900'; // 푸터 배경색: 검정 계열

/**
 * @component MenuItem: 네비게이션 아이템
 */
const MenuItem = ({ title, href }: { title: string; href: string }) => (
    <li>
        <a
            href={href}
            className={`block py-2 text-gray-700 hover:text-${PRIMARY_COLOR} border-b-2 border-transparent hover:border-${PRIMARY_COLOR} transition duration-150 ease-in-out`}
        >
            {title}
        </a>
    </li>
);

/**
 * @component Header: 최상단 네비게이션 및 로고 영역
 */
const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 상단 유틸리티 및 검색 영역 */}
                <div className="flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
                    <a href="#" className={`hover:text-${PRIMARY_COLOR} transition duration-150 ease-in-out px-3`}>
                        로그인
                    </a>
                    <a href="#" className={`hover:text-${PRIMARY_COLOR} transition duration-150 ease-in-out px-3 border-l border-gray-300`}>
                        사이트맵
                    </a>
                    <div className="relative ml-4 hidden sm:block">
                        <input
                            type="text"
                            placeholder="통합 검색"
                            className="pl-2 pr-8 py-1 border border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 w-32 text-xs"
                        />
                        <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 cursor-pointer" />
                    </div>
                </div>

                {/* 로고 및 주 메뉴 영역 (반응형) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6">
                    <div className={`text-3xl font-bold text-${PRIMARY_COLOR} mb-4 md:mb-0 font-sans`}>
                        EHS Friends
                    </div>
                    <nav className="w-full md:w-auto">
                        <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8 text-sm md:text-lg font-semibold text-gray-700">
                            <MenuItem title="EHS 소개" href="/about" />
                            <MenuItem title="환경 정보" href="/environment" />
                            <MenuItem title="보건 정보" href="/health" />
                            <MenuItem title="안전 정보" href="/safety" />
                            <MenuItem title="커뮤니티" href="/community" />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

/**
 * @component PageHero: 페이지 상단 배너
 */
const PageHero = () => {
    return (
        // 배경 이미지 사용
        <div
            className="relative w-full h-64 md:h-80 bg-gray-300 flex items-center"
            style={{ backgroundImage: 'url(https://picsum.photos/id/10/1600/500)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div> {/* 어두운 오버레이 */}
        </div>
    );
};


/**
 * @component Breadcrumbs: 서브 페이지 경로 표시
 */
const Breadcrumbs = () => {
    return (
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
            <ol className="flex items-center space-x-2">
                <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
                <ChevronRight className="w-4 h-4" />
                <li><a href="/consulting" className="hover:text-blue-700 font-semibold">컨설팅</a></li>
                <ChevronRight className="w-4 h-4" />
                <li className={`text-${PRIMARY_COLOR} font-bold`}>EHS 컨설팅</li>
            </ol>
        </nav>
    );
};


/**
 * @component MainContentTabs: 탭 형식 서브 내비게이션
 */
const MainContentTabs = () => {
    const tabs = [
        { title: "서비스 개요", current: true },
        { title: "영향 및 효과", current: false },
        { title: "주요 성공 사례", current: false },
        { title: "전문가 소개", current: false },
    ];

    return (
        <div className="border-b border-gray-300 mb-8 overflow-x-auto">
            <nav className="flex whitespace-nowrap space-x-6 md:space-x-10">
                {tabs.map((tab) => (
                    <a
                        key={tab.title}
                        href="#"
                        className={`py-3 px-1 md:px-0 text-base font-semibold transition duration-200 ease-in-out 
                            ${tab.current
                                ? `text-${PRIMARY_COLOR} border-b-4 border-${PRIMARY_COLOR}`
                                : 'text-gray-500 hover:text-gray-700 border-b-4 border-transparent hover:border-gray-400'
                            }`
                        }
                    >
                        {tab.title}
                    </a>
                ))}
            </nav>
        </div>
    );
};


/**
 * @component Footer: 하단 정보 영역
 */
const Footer = () => {
    return (
        <footer className={`bg-${FOOTER_BG} text-white mt-12`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">바로가기</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-gray-300">EHS 소개</a></li>
                            <li><a href="/faq" className="hover:text-gray-300">자주 묻는 질문</a></li>
                            <li><a href="/careers" className="hover:text-gray-300">채용 정보</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">환경 분야</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-300">대기/수질 관리</a></li>
                            <li><a href="#" className="hover:text-gray-300">폐기물 관리</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">보건 및 안전</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-300">산업 위생</a></li>
                            <li><a href="#" className="hover:text-gray-300">안전 규정</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">연락처</h4>
                        <p className="text-sm">
                            서울 강남구 EHS로 123<br />
                            전화: +82 2-1234-5678<br />
                            이메일: contact@ehsfriends.co.kr
                        </p>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-400">
                    Copyright © 2025 EHS Friends. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

// --- Main Page ---

/**
 * @page EHSConsultingPage: EHS 컨설팅 상세 페이지 (1단 국제 스타일)
 */
export default function EHSConsultingPage() {
    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <PageHero />
            <Breadcrumbs />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 콘텐츠 제목 영역 (HSS 스타일: 탭 위에 위치) */}
                <div className="pb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">통합 EHS 관리 시스템</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        법규 준수와 지속 가능한 성장을 위한 맞춤형 접근 방식.
                    </p>
                </div>

                {/* 메인 콘텐츠 영역 상단 (HSS Continuing Education 페이지와 같은 탭 구조) */}
                <MainContentTabs />

                {/* 1단 풀-사이즈 콘텐츠 영역 */}
                <div className="w-full space-y-10 pt-4">

                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">왜 우리의 EHS 컨설팅을 선택해야 하는가?</h3>
                        <p className="text-gray-700 leading-relaxed">
                            글로벌 기관과 기업들은 국제적인 **환경, 보건, 안전 (EHS)** 표준을 준수하는 데 있어 복잡성이 증가하는 현실에 직면하고 있습니다. 저희 컨설팅 서비스는 깊이 있는 규제 지식과 산업별 전문성을 활용하여, 완벽한 준수와 위험 최소화를 보장하는 전략적 로드맵을 제공합니다. 우리는 기초부터 견고하고 지속 가능한 안전 문화를 구축하는 데 중점을 둡니다.
                        </p>

                        <h4 className={`text-xl font-bold text-${PRIMARY_COLOR} pt-4`}>핵심 프로그램 모듈</h4>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                            <li>**통합 관리 시스템:** ISO 14001, ISO 45001 구현 및 인증 지원.</li>
                            <li>**법규 준수:** 국내외 의무 사항(예: K-REACH, OSHA)에 대한 종합 감사 및 격차 분석.</li>
                            <li>**위험 평가:** 화학 물질 안전 프로토콜 및 고위험 작업에 대한 상세 위험 평가.</li>
                            <li>**산업 보건:** 직원 건강 증진 프로그램 및 산업 위생 모니터링 서비스.</li>
                        </ul>

                        <button className={`mt-6 px-6 py-3 bg-${PRIMARY_COLOR} text-white bg-slate-600 font-semibold`}>
                            EHS 준수 감사 시작하기
                        </button>
                    </section>

                    <hr className="border-gray-200" />

                    {/* HSS 페이지 하단처럼 회색 배경의 강조 블록 추가 */}
                    <section className="bg-gray-50 p-6 border border-gray-200 text-center space-y-4">
                        <h3 className="text-2xl font-bold text-gray-800">귀사의 안전 표준을 높일 준비가 되셨나요?</h3>
                        <p className="text-lg text-gray-600">
                            인증된 EHS 전문가에게 기밀 상담을 요청하십시오.
                        </p>
                        <button className={`px-6 py-3 bg-white border-2 border-${PRIMARY_COLOR} text-${PRIMARY_COLOR} font-semibold hover:bg-${PRIMARY_COLOR} hover:text-white transition`}>
                            상담 요청
                        </button>
                    </section>

                    <hr className="border-gray-200" />

                    {/* 추가 정보 블록 */}
                    <section className="space-y-4 text-sm text-gray-700">
                        <h3 className="text-xl font-bold text-gray-800">추가 자료 및 고지 사항</h3>
                        <p className="italic">
                            제공되는 모든 자료는 최신 규제 업데이트 및 국제 모범 사례를 반영합니다. 고객 기밀은 최우선으로 보장됩니다.
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li><strong className={`text-${PRIMARY_COLOR}`}>프로그램 기간:</strong> 감사는 일반적으로 4-6주 내에 완료되며, 전체 시스템 구현은 3-6개월이 소요됩니다.</li>
                            <li><strong className={`text-${PRIMARY_COLOR}`}>환불 정책:</strong> 계약 체결 후 7일 이내 해지 시, 행정 수수료를 제외한 전액 환불이 가능합니다. (상세 내용은 계약서 참조)</li>
                        </ul>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}
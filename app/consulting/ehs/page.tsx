// app/consulting/ehs/page.tsx
import { Search, ChevronRight, Home } from 'lucide-react';

// 공통 상수 및 컴포넌트 (반응형 코드 유지)
const PRIMARY_COLOR = 'blue-800'; // 남색 (#1e40af)
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
                    <div className={`text-3xl font-serif font-bold text-${PRIMARY_COLOR} mb-4 md:mb-0`}>
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
 * @component PageHero: 페이지 상단 배너 (HSS 스타일)
 */
const PageHero = () => {
    return (
        // 배경 이미지 사용 (HSS Health Library 스타일 반영)
        <div
            className="relative w-full h-64 md:h-80 bg-gray-300 flex items-center"
            style={{ backgroundImage: 'url(https://picsum.photos/id/10/1600/500)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div> {/* 어두운 오버레이 */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-white">EHS Consulting Service</h1>
                <p className="mt-2 text-xl text-gray-200 hidden sm:block">환경, 보건, 안전 규제 대응 및 통합 시스템 구축</p>
            </div>
        </div>
    );
};


/**
 * @component MainContentTabs: 탭 형식 서브 내비게이션 (HSS Continuing Education 반영)
 */
const MainContentTabs = () => {
    const tabs = [
        { title: "서비스 개요", current: true },
        { title: "필요성 및 효과", current: false },
        { title: "주요 사례", current: false },
        { title: "전문가 소개", current: false },
    ];

    return (
        <div className="border-b border-gray-300 mb-8 overflow-x-auto">
            <nav className="flex whitespace-nowrap space-x-4 md:space-x-8">
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
 * @component SidebarNav: 우측 컨텍스트 메뉴
 */
const SidebarNav = () => {
    const consultList = [
        { title: "EHS 컨설팅 (현재)", href: "/consulting/ehs", current: true },
        { title: "근골격계 유해요인 조사", href: "/consulting/msds", current: false },
        { title: "화학물질 관리", href: "/consulting/chemical", current: false },
        { title: "보건관리 위탁", href: "/consulting/health-mgmt", current: false },
        { title: "위험성 평가", href: "/consulting/risk-assessment", current: false },
        { title: "작업환경 개선", href: "/consulting/work-env", current: false },
    ];

    return (
        <div className="space-y-6">
            {/* 1. 컨설팅 목록 (Sub-menu 역할) */}
            <nav className={`border border-gray-300 bg-white shadow-sm`}>
                <h3 className={`bg-${PRIMARY_COLOR} text-white text-lg font-bold p-3`}>컨설팅 분야</h3>
                <ul className="divide-y divide-gray-200">
                    {consultList.map((item) => (
                        <li key={item.title}>
                            <a
                                href={item.href}
                                className={`flex justify-between items-center p-3 text-gray-700 transition hover:bg-gray-100 ${item.current ? `bg-gray-100 text-${PRIMARY_COLOR} font-bold` : ''
                                    }`}
                            >
                                {item.title}
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* 2. 빠른 문의 CTA */}
            <div className={`p-4 border-t-4 border-${PRIMARY_COLOR} bg-gray-50 shadow-md text-center`}>
                <h4 className="text-xl font-bold mb-3 text-gray-800">빠른 문의</h4>
                <p className="text-sm text-gray-600 mb-4">EHS 컨설팅 관련 궁금증을 해결해 드립니다.</p>
                <button className={`w-full py-2 bg-${PRIMARY_COLOR} text-white font-semibold hover:bg-blue-700 transition`}>
                    상담 신청하기
                </button>
            </div>
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
                        <h4 className="text-lg font-semibold mb-3 text-white">주요 메뉴</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-gray-300">기관 소개</a></li>
                            <li><a href="/faq" className="hover:text-gray-300">자주 묻는 질문</a></li>
                            <li><a href="/sitemap" className="hover:text-gray-300">사이트맵</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">환경 분야</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-300">대기/수질 정보</a></li>
                            <li><a href="#" className="hover:text-gray-300">폐기물 처리</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">보건/안전 분야</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-300">산업 보건</a></li>
                            <li><a href="#" className="hover:text-gray-300">안전 관리 규정</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">연락처</h4>
                        <p className="text-sm">
                            (06001) 서울특별시 강남구 EHS로 123<br />
                            전화: 02-1234-5678<br />
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
 * @page EHSConsultingPage: EHS 컨설팅 상세 페이지
 */
export default function EHSConsultingPage() {
    return (
        <div className="font-sans bg-gray-50 min-h-screen">
            <Header />
            <PageHero /> {/* HSS 스타일의 풀사이즈 배너 */}
            <Breadcrumbs />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 메인 콘텐츠 영역 상단 (HSS Continuing Education 페이지와 같은 탭 구조) */}
                <MainContentTabs />

                {/* 2단 반응형 콘텐츠 영역 (HSS 디테일 페이지 핵심 구조) */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* 메인 콘텐츠 영역 (데스크톱: 3/4, 모바일: 100%) */}
                    <section className="w-full md:w-3/4 space-y-8 bg-white p-6 border border-gray-200 shadow-sm">

                        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">EHS 통합 관리 시스템 구축</h2>
                        <p className="text-gray-700 leading-relaxed">
                            저희 EHS 컨설팅은 강화되는 국내외 환경, 보건, 안전 규제에 효과적으로 대응하고, 기업의 지속 가능한 성장을 위한 최적의 **통합 EHS 시스템** 구축을 지원합니다.
                            각 산업 분야별 특성을 깊이 분석하여 리스크를 최소화하고 선진 안전 문화를 정착시키는 **맞춤형 전략과 실질적인 솔루션**을 제공합니다.
                        </p>

                        <h3 className={`text-xl font-bold text-${PRIMARY_COLOR} pt-4`}>컨설팅 범위 및 특징</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                            <li>ISO 14001(환경) 및 ISO 45001(안전보건) 통합 인증 체계 지원</li>
                            <li>화평법, 화관법 등 **환경 법규 준수(Compliance) 진단** 및 Gap 분석</li>
                            <li>산업안전보건 기준 및 고위험 작업장 **안전 관리 체계** 확립</li>
                            <li>직무 스트레스 관리, 건강 증진 등 **근로자 보건 관리 프로그램** 구축</li>
                        </ul>

                        <h3 className={`text-xl font-bold text-${PRIMARY_COLOR} pt-4`}>수행 절차</h3>
                        <div className="grid grid-cols-3 gap-4 text-center border p-4 bg-gray-50">
                            <div className="w-full">
                                <p className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>1. 진단</p>
                                <p className="text-gray-600 mt-1 text-sm">현행 시스템 및 법규 준수 수준 평가</p>
                            </div>
                            <div className="w-full">
                                <p className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>2. 설계</p>
                                <p className="text-gray-600 mt-1 text-sm">통합 시스템 로드맵 및 맞춤 전략 수립</p>
                            </div>
                            <div className="w-full">
                                <p className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>3. 구축/지원</p>
                                <p className="text-gray-600 mt-1 text-sm">시스템 실행 및 인증 심사 대응 지원</p>
                            </div>
                        </div>

                        <p className="text-sm italic text-gray-500 pt-4">
                            *본 컨설팅은 귀사의 ESG 경영 목표 달성과 지속 가능한 안전 문화 구축에 기여합니다.
                        </p>

                    </section>

                    {/* 사이드바 영역 (데스크톱: 1/4, 모바일: 100%) */}
                    <aside className="w-full md:w-1/4">
                        <SidebarNav />
                    </aside>
                </div>

            </main>
            <Footer />
        </div>
    );
}
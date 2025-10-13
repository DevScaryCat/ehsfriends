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
 * @component SidebarNav: 우측 컨텍스트 메뉴 (HSS 상세 페이지 구조 반영)
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

            {/* 2. 빠른 문의 CTA (HSS 스타일 CTA 반영) */}
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
            <Breadcrumbs />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 페이지 제목 영역 */}
                <div className="mb-8">
                    <h1 className={`text-4xl font-extrabold text-${PRIMARY_COLOR} border-b-2 border-gray-300 pb-3`}>EHS 컨설팅 서비스</h1>
                    <p className="mt-2 text-xl text-gray-600">통합 환경, 보건, 안전 관리 시스템 구축을 위한 최적의 파트너</p>
                </div>

                {/* 2단 반응형 콘텐츠 영역 (HSS 디테일 페이지 핵심 구조) */}
                <div className="flex flex-col md:flex-row gap-8">

                    {/* 메인 콘텐츠 영역 (데스크톱: 3/4, 모바일: 100%) */}
                    <section className="w-full md:w-3/4 space-y-8 bg-white p-6 border border-gray-200 shadow-sm">

                        <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-2">서비스 개요 및 필요성</h2>
                        <p className="text-gray-700 leading-relaxed">
                            최근 강화되는 국내외 환경, 보건, 안전 규제에 효과적으로 대응하고, 기업의 지속 가능한 성장을 위해서는 통합적인 EHS 시스템 구축이 필수적입니다.
                            저희 EHS 컨설팅은 각 산업 분야별 특성에 맞는 맞춤형 전략과 실질적인 솔루션을 제공하여 고객사의 리스크를 최소화하고 안전 문화를 정착시키는 것을 목표로 합니다.
                        </p>

                        <h3 className={`text-xl font-bold text-${PRIMARY_COLOR} pt-4`}>주요 컨설팅 내용</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                            <li>통합 EHS 관리 시스템(ISO 14001, ISO 45001 등) 구축 및 인증 지원</li>
                            <li>법규 준수(Compliance) 진단 및 Gap 분석</li>
                            <li>화학물질 관리, 폐기물 처리 등 환경 부문 리스크 평가</li>
                            <li>산업안전보건 기준 및 고위험 작업장 안전 관리 체계 확립</li>
                            <li>종사자 건강 증진 프로그램 및 산업 보건 관리 대행</li>
                        </ul>

                        <h3 className={`text-xl font-bold text-${PRIMARY_COLOR} pt-4`}>문의 절차</h3>
                        <div className="flex justify-between items-center text-center border p-4 bg-gray-50">
                            <div className="w-1/3">
                                <p className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>1단계</p>
                                <p className="text-gray-600 mt-1">상담 및 요청 접수</p>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-500" />
                            <div className="w-1/3">
                                <p className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>2단계</p>
                                <p className="text-gray-600 mt-1">현장 진단 및 견적</p>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-500" />
                            <div className="w-1/3">
                                <p className={`text-2xl font-bold text-${PRIMARY_COLOR}`}>3단계</p>
                                <p className="text-gray-600 mt-1">컨설팅 계약 및 이행</p>
                            </div>
                        </div>


                        <div className="text-center pt-8">
                            <button className={`px-8 py-3 text-lg bg-${PRIMARY_COLOR} text-white font-bold hover:bg-blue-700 transition duration-150 ease-in-out`}>
                                EHS 컨설팅 상세 자료 다운로드
                            </button>
                        </div>

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
// app/consulting/ehs/page.tsx
import { Search, ChevronRight, Home } from 'lucide-react';

// 공통 상수 및 컴포넌트
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
 * @component PageHero: 페이지 상단 배너 (HSS 스타일)
 */
const PageHero = () => {
    return (
        // 배경 이미지 사용
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
 * @page EHSConsultingPage: EHS 컨설팅 상세 페이지 (1단 레이아웃)
 */
export default function EHSConsultingPage() {
    return (
        <div className="font-sans bg-white min-h-screen">
            <Header />
            <PageHero />

            {/* Breadcrumbs는 풀사이즈 콘텐츠 영역에 포함되어야 하므로 컨테이너 내부에 배치 */}
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-gray-500 border-b border-gray-200 bg-white">
                <ol className="flex items-center space-x-2">
                    <li><a href="/" className="hover:text-blue-700"><Home className="w-4 h-4 inline-block text-gray-400" /></a></li>
                    <ChevronRight className="w-4 h-4" />
                    <li><a href="/consulting" className="hover:text-blue-700 font-semibold">컨설팅</a></li>
                    <ChevronRight className="w-4 h-4" />
                    <li className={`text-${PRIMARY_COLOR} font-bold`}>EHS 컨설팅</li>
                </ol>
            </nav>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* 메인 콘텐츠 영역 상단 (HSS Continuing Education 페이지와 같은 탭 구조) */}
                <MainContentTabs />

                {/* 1단 풀-사이즈 콘텐츠 영역 (HSS 교육 페이지 구조) */}
                <div className="w-full space-y-8">

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800">EHS 통합 관리 시스템 개요</h2>
                        <p className="text-gray-700 leading-relaxed">
                            저희 EHS 컨설팅은 강화되는 국내외 환경, 보건, 안전 규제에 효과적으로 대응하고, 기업의 지속 가능한 성장을 위한 최적의 **통합 EHS 시스템** 구축을 지원합니다.
                            각 산업 분야별 특성을 깊이 분석하여 리스크를 최소화하고 선진 안전 문화를 정착시키는 **맞춤형 전략과 실질적인 솔루션**을 제공합니다.
                        </p>

                        <h3 className={`text-xl font-bold text-${PRIMARY_COLOR} pt-4`}>주요 컨설팅 프로그램 목록</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
                            <li>통합 EHS 관리 시스템(ISO 14001, ISO 45001 등) 구축 및 인증 지원</li>
                            <li>법규 준수(Compliance) 진단 및 Gap 분석</li>
                            <li>화학물질 관리, 폐기물 처리 등 환경 부문 리스크 평가</li>
                            <li>산업안전보건 기준 및 고위험 작업장 안전 관리 체계 확립</li>
                            <li>종사자 건강 증진 프로그램 및 산업 보건 관리 대행</li>
                        </ul>

                        <button className={`mt-6 px-6 py-3 bg-${PRIMARY_COLOR} text-white font-semibold hover:bg-blue-700 transition`}>
                            컨설팅 시작하기
                        </button>
                    </section>

                    <hr className="border-gray-200" />

                    {/* HSS 페이지 하단처럼 회색 배경의 강조 블록 추가 */}
                    <section className="bg-gray-100 p-6 border border-gray-200 text-center space-y-4">
                        <h3 className="text-xl font-bold text-gray-800">EHS 전문가와 함께 기업의 미래를 설계하세요</h3>
                        <p className="text-gray-600">
                            20년 경력의 환경보건안전 전문가들이 귀사의 리스크를 진단하고 가장 현실적인 솔루션을 제공합니다.
                        </p>
                        <button className={`px-6 py-3 bg-white border border-${PRIMARY_COLOR} text-${PRIMARY_COLOR} font-semibold hover:bg-${PRIMARY_COLOR} hover:text-white transition`}>
                            전문가 상담 신청
                        </button>
                    </section>

                    <hr className="border-gray-200" />

                    {/* 추가 정보 블록 */}
                    <section className="space-y-4 text-sm text-gray-700">
                        <h3 className="text-xl font-bold text-gray-800">참고 자료 및 유의사항</h3>
                        <p className="italic">
                            *컨설팅 과정에 사용되는 모든 자료는 법규 및 최신 기술 동향을 반영하여 업데이트되며, 고객사의 기밀 유지를 최우선으로 합니다.
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-4">
                            <li><strong className={`text-${PRIMARY_COLOR}`}>이행 안내:</strong> 컨설팅은 초기 진단 후 3~6개월 기간 동안 단계별로 진행됩니다.</li>
                            <li><strong className={`text-${PRIMARY_COLOR}`}>취소 및 환불 규정:</strong> 계약 후 7일 이내 해지 시 위약금 없이 전액 환불 가능합니다. (상세 내용은 계약서 참조)</li>
                        </ul>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
}
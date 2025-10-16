// components/CommonLayout.tsx
import { Search, Home, ChevronRight } from 'lucide-react';

// 공통 상수
export const PRIMARY_COLOR = 'slate-700'; // 남색 (#1e40af)
export const FOOTER_BG = 'slate-900'; // 푸터 배경색: 검정 계열

/**
 * @component SubMenuItem: 드롭다운 하위 메뉴 아이템
 */
const SubMenuItem = ({ title, href }: { title: string; href: string }) => (
    <li>
        <a
            href={href}
            // w-max 클래스를 사용하여 텍스트 길이에 맞춰 드롭다운 너비 자동 조정
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-slate-700 transition duration-150 ease-in-out whitespace-nowrap`}
        >
            {title}
        </a>
    </li>
);

/**
 * @component NavItem: 상위 메뉴 아이템 (드롭다운 포함 가능)
 */
const NavItem = ({ title, href, subMenus }: { title: string; href: string; subMenus?: { title: string; href: string; }[] }) => {
    const isDropdown = subMenus && subMenus.length > 0;

    // 상위 메뉴 링크 스타일
    const linkClasses = `block py-2 text-gray-700 font-semibold md:text-lg border-b-2 border-transparent hover:border-slate-700 hover:text-slate-700 transition duration-150 ease-in-out`;

    return (
        // group 클래스를 사용하여 group-hover로 드롭다운 표시 (PC 환경)
        <li className={`relative ${isDropdown ? 'group' : ''}`}>
            {/* 상위 메뉴 링크 */}
            <a
                href={href}
                className={linkClasses}
            >
                {title}
            </a>

            {/* 드롭다운 메뉴 (hover 시 표시) */}
            {isDropdown && (
                <ul className={`absolute left-0 mt-0 w-max bg-white border border-gray-200 shadow-lg py-1 z-20 hidden group-hover:block`}>
                    {subMenus.map((item, index) => (
                        <SubMenuItem key={index} {...item} />
                    ))}
                </ul>
            )}
        </li>
    );
};


/**
 * @component Header: 최상단 네비게이션 및 로고 영역 (반응형 적용)
 */
export const Header = () => {

    // 새로운 네비게이션 구조 정의
    const navItems = [
        { title: "EHS 소개", href: "/about" },
        {
            title: "업무 안내",
            href: "/service",
            subMenus: [
                { title: "EHS컨설팅", href: "/service/ehs" },
                { title: "화학물질관리 컨설팅", href: "/service/chemical" },
                { title: "근골격계 유해요인조사", href: "/service/msds" },
                { title: "보건관리위탁", href: "/service/health-mgmt" },
                { title: "위험성평가", href: "/service/risk-assessment" },
                { title: "작업환경개선 컨설팅", href: "/service/work-env" },
                { title: "산업보건지도사 컨설팅", href: "/service/health-pro" },
            ]
        },
        { title: "알림소식", href: "/notice" },
        // 상담신청은 별도로 버튼 스타일로 처리
    ];

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 상단 유틸리티 및 검색 영역 */}
                <div className="flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
                    <a href="#" className={`hover:text-slate-700 transition duration-150 ease-in-out px-3`}>
                        로그인
                    </a>
                    <a href="#" className={`hover:text-slate-700 transition duration-150 ease-in-out px-3 border-l border-gray-300`}>
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
                    <a href='/' className={`text-3xl font-bold text-slate-700 mb-4 md:mb-0 font-sans`}>
                        EHS Friends
                    </a>
                    {/* 메인 네비게이션 리스트 */}
                    <nav className="w-full md:w-auto">
                        <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8 items-center text-sm md:text-lg font-semibold text-gray-700">
                            {navItems.map((item, index) => (
                                <NavItem key={index} {...item} />
                            ))}
                            <li>
                                <a
                                    href="/contact"
                                    className={`inline-block px-4 py-2 text-sm md:text-base bg-slate-700 text-white rounded hover:bg-slate-800 transition duration-150 ease-in-out whitespace-nowrap`}
                                >
                                    상담신청
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

/**
 * @component Footer: 하단 정보 영역 (반응형 적용)
 */
export const Footer = () => {
    return (
        <footer className={`bg-slate-950 text-white mt-12`}>
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
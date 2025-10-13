// components/CommonLayout.tsx
import { Search, Home, ChevronRight } from 'lucide-react';

// 공통 상수
export const PRIMARY_COLOR = 'slate-700'; // 남색 (#1e40af)
export const FOOTER_BG = 'gray-900'; // 푸터 배경색: 검정 계열

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
 * @component Header: 최상단 네비게이션 및 로고 영역 (반응형 적용)
 */
export const Header = () => {
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
                    <a href='/' className={`text-3xl font-bold text-${PRIMARY_COLOR} mb-4 md:mb-0 font-sans`}>
                        EHS Friends
                    </a>
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
 * @component Footer: 하단 정보 영역 (반응형 적용)
 */
export const Footer = () => {
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
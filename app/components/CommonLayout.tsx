// app/components/CommonLayout.tsx
"use client"; // useState를 사용하므로 클라이언트 컴포넌트로 전환합니다.

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Next.js Image 컴포넌트 임포트
import SearchModal from './SearchModal'; // 검색 모달 컴포넌트를 임포트합니다.

// 공통 상수
export const PRIMARY_COLOR = 'slate-700';
export const FOOTER_BG = 'slate-900';

/**
 * @component SubMenuItem: 드롭다운 하위 메뉴 아이템
 */
const SubMenuItem = ({ title, href }: { title: string; href: string }) => (
    <li>
        <Link
            href={href}
            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-slate-700 transition duration-150 ease-in-out whitespace-nowrap`}
        >
            {title}
        </Link>
    </li>
);

/**
 * @component NavItem: 상위 메뉴 아이템 (드롭다운 포함 가능)
 */
const NavItem = ({ title, href, subMenus }: { title: string; href: string; subMenus?: { title: string; href: string; }[] }) => {
    const isDropdown = subMenus && subMenus.length > 0;
    const linkClasses = `block py-2 text-gray-700 font-semibold md:text-lg border-b-2 border-transparent hover:border-slate-700 hover:text-slate-700 transition duration-150 ease-in-out`;

    return (
        <li className={`relative ${isDropdown ? 'group' : ''}`}>
            <Link
                href={href}
                className={linkClasses}
            >
                {title}
            </Link>
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
    const [isSearchOpen, setIsSearchOpen] = useState(false); // 모달 상태 관리

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
    ];

    return (
        <>
            <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end items-center py-2 text-sm text-gray-600 border-b border-gray-100">
                        <Link href="#" className={`hover:text-slate-700 transition duration-150 ease-in-out px-3`}>로그인</Link>
                        <Link href="#" className={`hover:text-slate-700 transition duration-150 ease-in-out px-3 border-l border-gray-300`}>사이트맵</Link>

                        <div className="relative ml-4 hidden sm:block" onClick={() => setIsSearchOpen(true)}>
                            <input
                                type="text"
                                placeholder="통합 검색"
                                className="pl-2 pr-8 py-1 border border-gray-300 rounded-sm w-32 text-xs cursor-pointer"
                                readOnly
                            />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6">
                        {/* 텍스트 로고를 Image 컴포넌트로 교체 */}
                        <Link href='/' className="mb-4 md:mb-0 block">
                            <Image
                                src="/logo.png" // public 폴더의 로고 경로
                                alt="EHS Friends 로고"
                                width={190} // 로고 이미지의 실제 가로 크기 또는 원하는 크기
                                height={45} // 로고 이미지의 실제 세로 크기 또는 원하는 크기
                                priority // LCP(Largest Contentful Paint) 개선을 위해 로고는 우선 로드
                            />
                        </Link>
                        <nav className="w-full md:w-auto">
                            <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8 items-center text-sm md:text-lg font-semibold text-gray-700">
                                {navItems.map((item, index) => (
                                    <NavItem key={index} {...item} />
                                ))}
                                <li>
                                    <Link href="/contact" className={`inline-block px-4 py-2 text-sm md:text-base bg-slate-700 text-white rounded hover:bg-slate-800 transition duration-150 ease-in-out whitespace-nowrap`}>
                                        상담신청
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
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
                            <li><Link href="/about" className="hover:text-gray-300">EHS 소개</Link></li>
                            <li><Link href="/faq" className="hover:text-gray-300">자주 묻는 질문</Link></li>
                            <li><Link href="/careers" className="hover:text-gray-300">채용 정보</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">환경 분야</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-gray-300">대기/수질 관리</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">폐기물 관리</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">보건 및 안전</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-gray-300">산업 위생</Link></li>
                            <li><Link href="#" className="hover:text-gray-300">안전 규정</Link></li>
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
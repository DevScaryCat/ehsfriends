// app/components/CommonLayout.tsx
"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import SearchModal from './SearchModal';

// 공통 상수
export const PRIMARY_COLOR = 'slate-700';
export const FOOTER_BG = 'slate-900'; // 이 상수는 현재 Footer 스타일에서 직접 사용되지는 않습니다.

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
    const [isSearchOpen, setIsSearchOpen] = useState(false);

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
                        <div className="relative ml-4 hidden sm:block" onClick={() => setIsSearchOpen(true)}>
                            <input type="text" placeholder="통합 검색" className="pl-2 pr-8 py-1 border border-gray-300 rounded-sm w-32 text-xs cursor-pointer" readOnly />
                            <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6">
                        <Link href='/' className="mb-4 md:mb-0 block">
                            <Image src="/logo.png" alt="EHS Friends 로고" width={190} height={45} priority />
                        </Link>
                        <nav className="w-full md:w-auto">
                            <ul className="flex flex-wrap md:flex-nowrap space-x-4 md:space-x-8 items-center text-sm md:text-lg font-semibold text-gray-700">
                                {navItems.map((item, index) => (<NavItem key={index} {...item} />))}
                                <li><Link href="/contact" className={`inline-block px-4 py-2 text-sm md:text-base bg-slate-700 text-white rounded hover:bg-slate-800 transition duration-150 ease-in-out whitespace-nowrap`}>상담신청</Link></li>
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
 * @component Footer: 하단 정보 영역 (반응형 적용) - 내용 수정됨
 */
export const Footer = () => {
    // 실제 업무 안내 메뉴를 푸터 링크로 사용
    const serviceLinks = [
        { title: "EHS컨설팅", href: "/service/ehs" },
        { title: "화학물질관리 컨설팅", href: "/service/chemical" },
        { title: "근골격계 유해요인조사", href: "/service/msds" },
        { title: "보건관리위탁", href: "/service/health-mgmt" },
        { title: "위험성평가", href: "/service/risk-assessment" },
        { title: "작업환경개선 컨설팅", href: "/service/work-env" },
        { title: "산업보건지도사 컨설팅", href: "/service/health-pro" },
    ];

    return (
        <footer className={`bg-slate-950 text-white mt-12`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
                    {/* 1열: 주요 메뉴 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">바로가기</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-gray-300">EHS 소개</Link></li>
                            <li><Link href="/service" className="hover:text-gray-300">업무 안내</Link></li>
                            <li><Link href="/notice" className="hover:text-gray-300">알림소식</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300">상담신청</Link></li>
                            {/* 필요시 추가 링크 */}
                            <li><Link href="/privacy" className="hover:text-gray-300">개인정보처리방침</Link></li>
                            <li><Link href="/terms" className="hover:text-gray-300">이용약관</Link></li>
                        </ul>
                    </div>
                    {/* 2열 & 3열: 업무 안내 세부 메뉴 (반으로 나누어 표시) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">업무 안내</h4>
                        <ul className="space-y-2 text-sm">
                            {serviceLinks.slice(0, 4).map(link => (
                                <li key={link.href}><Link href={link.href} className="hover:text-gray-300">{link.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-0 md:pt-10"> {/* 데스크탑에서 제목과 높이 맞추기 */}
                        <ul className="space-y-2 text-sm">
                            {serviceLinks.slice(4).map(link => (
                                <li key={link.href}><Link href={link.href} className="hover:text-gray-300">{link.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    {/* 4열: 연락처 (실제 정보로 수정 필요) */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">연락처</h4>
                        <p className="text-sm leading-relaxed">
                            (주)EHS프렌즈<br />
                            경기도 부천시 EHS로 123, 4층<br />
                            대표전화: 032-123-4567<br />
                            팩스: 032-123-4568<br />
                            이메일: <a href="mailto:contact@ehsfriends.co.kr" className="hover:text-gray-300 underline">contact@ehsfriends.co.kr</a>
                        </p>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-400">
                    Copyright © {new Date().getFullYear()} EHS Friends. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};